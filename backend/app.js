const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const shippingRoutes = require("./routes/shipping");
const coupanRoutes = require("./routes/coupon");
const wishlistRoutes = require("./routes/wishlist");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Serve static files from the 'assets' folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/shipping", shippingRoutes);
app.use("/api/coupan", coupanRoutes);
app.use("/api/wishlist", wishlistRoutes);

// Export the app as a serverless function
module.exports = app;
