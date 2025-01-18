// routes/product.js
const express = require("express");
const { searchProducts, getAllProducts, getProductsByCategory, getProductById } = require("../controllers/productController");
const router = express.Router();

router.get("/search", searchProducts); // Advanced search route
router.get("/all", getAllProducts); // Advanced search route
router.get("/byCategory/:category", getProductsByCategory); // Advanced search route
router.get("/:id", getProductById); // Advanced search route

module.exports = router;
