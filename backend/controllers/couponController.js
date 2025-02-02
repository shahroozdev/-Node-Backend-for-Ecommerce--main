// controllers/couponController.js

const asyncCatch = require("../middlewares/asyncTryCatch");
const { createCouponSchema } = require("../middlewares/validator");
const Coupon = require("../models/Coupon");

const applyCoupon = async (req, res) => {
  const { code, cartTotal } = req.body;
  // const {id:userId} = req.user;

    // Find the coupon by code
    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return res.status(404).json({ message: "Invalid coupon code" });
    }

    // Check if coupon is expired
    if (new Date() > new Date(coupon.expiryDate)) {
      return res.status(400).json({ message: "Coupon has expired" });
    }

    // Check if minimum cart amount is met
    if (cartTotal < coupon.minimumAmount) {
      return res.status(400).json({ message: `Minimum order amount should be ${coupon.minimumAmount}` });
    }

    // Apply discount based on type
    let discountAmount = 0;
    if (coupon.discountType === "percentage") {
      discountAmount = (coupon.discountValue / 100) * cartTotal;
    } else if (coupon.discountType === "fixed") {
      discountAmount = coupon.discountValue;
    }

    // Ensure discount is not greater than cart total
    discountAmount = Math.min(discountAmount, cartTotal);

    res.status(200).json({
      message: "Coupon applied successfully",
      discountAmount,
      finalTotal: cartTotal - discountAmount,
    });
  // const { couponCode } = req.body;

  // try {
  //   // Check if coupon exists
  //   const coupon = await Coupon.findOne({ code: couponCode });
  //   if (!coupon) {
  //     return res.status(400).json({ message: "Invalid coupon code" });
  //   }

  //   // Check if coupon is expired
  //   if (new Date(coupon.expiryDate) < new Date()) {
  //     return res.status(400).json({ message: "Coupon has expired" });
  //   }

  //   // Check if coupon is already used
  //   if (coupon.isUsed) {
  //     return res.status(400).json({ message: "Coupon has already been used" });
  //   }

  //   // Mark the coupon as used (optional)
  //   coupon.isUsed = true;
  //   await coupon.save();

  //   return res.status(200).json({ message: "Coupon applied successfully", discount: coupon.discount });
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).json({ message: "Server error" });
  // }
};
const createCoupan = asyncCatch(createCouponSchema, async (req, res) => {
  try {
    // Check if the coupon code already exists in the database
    const existingCoupon = await Coupon.findOne({ code: req.body.code });
    
    if (existingCoupon) {
      return res.status(400).json({ message: "Coupon code already exists" });
    }

    // If no coupon exists, proceed to create a new one
    const coupon = new Coupon(req.body);
    await coupon.save();
    res.status(200).json({ message: "Coupon created successfully", coupon });
  } catch (error) {
    res.status(400).json({ message: "Error creating coupon", error: error.message });
  }
});

// Get all coupons
const getAllCoupan = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ message: "Error fetching coupons", error: error.message });
  }
};

// Get a single coupon by ID
const getCoupanById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) return res.status(404).json({ message: "Coupon not found" });

    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({ message: "Error fetching coupon", error: error.message });
  }
};

const deleteCoupan= async(req, res) =>{
  const {id}= req.body;
  try {
    const coupon = await Coupon.findById(id);
    if (!coupon) return res.status(404).json({ message: "Coupon not found" });
    // Use the id to delete the coupon
    await Coupon.deleteOne({ _id: id });

    res.status(200).json({ message: 'Coupon is deleted.' });
  } catch (error) {
    res.status(500).json({ message: "Error deleting coupon", error: error.message });
  }
}
const updateCoupon = asyncCatch(createCouponSchema, async (req, res) => {
  try {
    // Find the coupon by ID
    const coupon = await Coupon.findById(req.params.id);

    // If coupon not found, return a 404 error
    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    // Check if the coupon code is being updated and if the new code already exists
    if (req.body.code && req.body.code !== coupon.code) {
      const existingCoupon = await Coupon.findOne({ code: req.body.code });

      if (existingCoupon) {
        return res.status(400).json({ message: "Coupon code already exists" });
      }
    }

    // Update the coupon with the new data
    Object.assign(coupon, req.body); // Merge the request body with the existing coupon

    // Save the updated coupon
    await coupon.save();

    res.status(200).json({ message: "Coupon updated successfully", coupon });
  } catch (error) {
    res.status(400).json({ message: "Error updating coupon", error: error.message });
  }
});

module.exports = { applyCoupon , createCoupan, getAllCoupan, getCoupanById, deleteCoupan, updateCoupon};
