// routes/shipping.js
const express = require("express");
const { addShipping } = require("../controllers/shippingController");
const { protectRoute } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", protectRoute, addShipping);

module.exports = router;
