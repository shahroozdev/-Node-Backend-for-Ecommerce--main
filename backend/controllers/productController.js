// controllers/productController.js

const Product = require("../models/product");

// Function to add a new product
const addProduct = async (req, res) => {
  const { name, price, description, category, image, isBestSeller } = req.body;
  try {
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      image,
      isBestSeller,
    });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
};

// Function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params; // Extract category from route parameters

    // Query products based on category
    const products = await Product.find({ category });

    if (!products.length) {
      return res.status(404).json({ message: "No products found in this category" });
    }

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Function to get a product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

// Function to update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, category, image, isBestSeller } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, category, image, isBestSeller },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

// Function to delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};
// controllers/productController.js
const searchProducts = async (req, res) => {
  try {
    const {
      category,
      name,
      minPrice,
      maxPrice,
      keywords,
      sortBy = "createdAt",
      sortOrder = "desc",
      limit = 10,
      page = 1,
    } = req.query;

    const filters = {};

    // Add category filter
    if (category) {
      filters.category = category;
    }

    // Add name filter (case-insensitive search)
    if (name) {
      filters.name = { $regex: name, $options: "i" };
    }

    // Add price range filter
    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.$gte = parseFloat(minPrice);
      if (maxPrice) filters.price.$lte = parseFloat(maxPrice);
    }

    // Add keywords filter
    if (keywords) {
      const keywordArray = keywords.split(",").map((kw) => kw.trim());
      filters.keywords = { $in: keywordArray };
    }

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const products = await Product.find(filters)
      .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Total count for pagination
    const total = await Product.countDocuments(filters);

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      products,
    });
  } catch (error) {
    console.error("Error in advancedSearch:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};


module.exports = { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct, searchProducts, getProductsByCategory};
