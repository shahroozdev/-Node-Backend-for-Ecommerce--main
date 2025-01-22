// routes/shipping.js
const express = require("express");
const { addShipping, getShippingByUserId } = require("../controllers/shippingController");
const { protectRoute } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", protectRoute, addShipping);
router.get("/", protectRoute, getShippingByUserId);

module.exports = router;
