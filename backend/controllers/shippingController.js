// controllers/shippingController.js
const asyncCatch = require("../middlewares/asyncTryCatch");
const { shippingSchema } = require("../middlewares/validator");
const Shipping = require("../models/shipping");

// Add shipping information
const addShipping = asyncCatch(shippingSchema, async (req, res) => {
  const {
    fullName,
    phoneNumber,
    address,
    city,
    state,
    postalCode,
    landmark,
    products,
  } = req.body;

  // Calculate total price
  const totalPrice = products.reduce((sum, product) => {
    if (!product._id || !product.quantity || !product.price) {
      throw new Error(
        "Each product must have product ID, quantity, and price."
      );
    }
    return sum + product.quantity * product.price;
  }, 0);
  // Create shipping document
  const shipping = new Shipping({
    user: req.user.id,
    fullName,
    phoneNumber,
    address,
    city,
    state,
    postalCode,
    landmark,
    products,
    totalPrice,
  });
  await shipping.save();
  res.status(201).json({ message: "Shipping details added", shipping });
});

//Get shipping by user id
const getShippingByUserId = async (req, res) => {
  try {
    // Fetch all shipping details for the user
    const shippings = await Shipping.find({ user: req.user.id });

    if (!shippings || shippings.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: "No shipping details found for this user." 
      });
    }

    res.status(200).json({
      success: true,
      message: "Shipping details retrieved successfully.",
      orders: shippings,
    });
  } catch (error) {
    console.error("Error fetching shipping details:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching shipping details.",
      error: error.message,
    });
  }
};
const getAllOrdersList = async (req, res) => {
  try {
    // Fetch all shipping orders from the Shipping model
    const list = await Shipping.find();

    // Send a response with the list of orders
    res.status(200).json({
      success: true,
      message: "Shipping details fetched successfully.",
      data: list,
    });
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching shipping details.",
      error: error.message,
    });
  }
};

const getSalesReport = async (req, res) => {
  const { range } = req.params; // Get the range from the request body (e.g., 12, 6, 3, 7d)
  
  // Get current date
  const date = new Date();
  let startDate;

  // Calculate start date based on the range
  if (range === "12") {
    // Last 12 months
    startDate = new Date(date.setMonth(date.getMonth() - 12));
  } else if (range === "6") {
    // Last 6 months
    startDate = new Date(date.setMonth(date.getMonth() - 6));
  } else if (range === "30d") {
    // Last 3 months
    startDate = new Date(date.setDate(date.getDate() - 30));
  } else if (range === "7d") {
    // Last 7 days
    startDate = new Date(date.setDate(date.getDate() - 7));
  } else {
    // Default to 1 month if an invalid range is provided
    startDate = new Date(date.setMonth(date.getMonth() - 1));
  }
  try {
    const salesData = await Shipping.aggregate([
      // Match orders within the date range
      {
        $match: {
          createdAt: {
            $gte: new Date(startDate),
            $lte:new Date(),
          },
          // isDelivered: true, // Only consider delivered shipments
        },
      },
      // Group by day or month (or even by user, depending on how you want to display the data)
      {
        $group: {
          _id: { $dateToString: { format: "%d-%m", date: "$createdAt" } }, // Group by date
          totalSales: { $sum: "$totalPrice" }, // Sum the totalPrice field for each day
          totalOrders: { $sum: 1 }, // Count the number of orders (optional)
        },
      },
      // Sort by date
      { $sort: { _id: 1 } },
    ]);
    return res.status(200).json({
      success: true,
      message: "Shipping details fetched successfully.",
      data: salesData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching shipping details.",
      error: error.message,
    });
  }
}


module.exports = { addShipping, getShippingByUserId, getSalesReport, getAllOrdersList };
