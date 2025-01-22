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
module.exports = { addShipping, getShippingByUserId };
