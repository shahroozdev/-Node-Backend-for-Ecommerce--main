const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  description: { type: String },
  discountType: { type: String, enum: ["percentage", "fixed"], required: true },
  discountValue: { type: Number, required:true},
  usageLimit: { type: Number, default: 1 },
  usageLimitPerUser: { type: Number, default: 1 },
  minimumAmount: { type: Number, default: 0 },
  expiryDate: { type: Date, required: true },
},{timestamps:true});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
