const mongoose = require("mongoose");
const Product = require("./models/product");
const dotenv = require("dotenv");

dotenv.config();
const necklaceItems = [
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "earrings",
      images: ["/assets/images/earrings-1/1-1.jpg", "/assets/images/necklaces-1/1-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/2-1.jpg", "/assets/images/necklaces-1/2-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/3-1.jpg", "/assets/images/necklaces-1/3-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/4-1.jpg", "/assets/images/necklaces-1/4-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/5-1.jpg", "/assets/images/necklaces-1/5-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/6-1.jpg", "/assets/images/necklaces-1/6-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/7-1.jpg", "/assets/images/necklaces-1/7-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/8-1.jpg", "/assets/images/necklaces-1/8-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/9-1.jpg", "/assets/images/necklaces-1/9-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/10-1.jpg", "/assets/images/necklaces-1/10-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Chunky Chain Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
      category: "necklaces",
      images: ["/assets/images/necklaces-1/11-1.jpg", "/assets/images/necklaces-1/11-2.jpg"],
      bestSeller: false,
    },
  ];
  
  
  // earrings
const earringsItems = [
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/1-1.jpg", "/assets/images/earrings-1/1-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/2-1.jpg", "/assets/images/earrings-1/2-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/3-1.jpg", "/assets/images/earrings-1/3-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/4-1.jpg", "/assets/images/earrings-1/4-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/5-1.jpg", "/assets/images/earrings-1/5-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/6-1.jpg", "/assets/images/earrings-1/6-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/7-1.jpg", "/assets/images/earrings-1/7-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/8-1.jpg", "/assets/images/earrings-1/8-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/9-1.jpg", "/assets/images/earrings-1/9-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/10-1.jpg", "/assets/images/earrings-1/10-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/11-1.jpg", "/assets/images/earrings-1/11-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/12-1.jpg", "/assets/images/earrings-1/12-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/13-1.jpg", "/assets/images/earrings-1/13-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/14-1.jpg", "/assets/images/earrings-1/14-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/15-1.jpg", "/assets/images/earrings-1/15-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/16-1.jpg", "/assets/images/earrings-1/16-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/17-1.jpg", "/assets/images/earrings-1/17-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/18-1.jpg", "/assets/images/earrings-1/18-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/19-1.jpg", "/assets/images/earrings-1/19-2.jpg"],
      bestSeller: true,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/20-1.jpg", "/assets/images/earrings-1/20-1.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/21-1.jpg", "/assets/images/earrings-1/21-2.jpg"],
      bestSeller: false,
    },
    {
      name: "Orbit Triple Hoops",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "earrings",
      images: ["/assets/images/earrings-1/22-1.jpg", "/assets/images/earrings-1/22-2.jpg"],
      bestSeller: false,
    },
  ];
  
  // rings
const ringsItems = [
    {
      id: 1,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/1-1.jpg", "/assets/images/rings-1/1-2.jpg"],
      bestSeller: true,
    },
    {
      id: 2,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/2-1.jpg", "/assets/images/rings-1/2-2.jpg"],
      bestSeller: false,
    },
    {
      id: 3,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/3-1.jpg", "/assets/images/rings-1/3-2.jpg"],
      bestSeller: true,
    },
    {
      id: 4,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/4-1.jpg", "/assets/images/rings-1/4-2.jpg"],
      bestSeller: false,
    },
    {
      id: 5,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/5-1.jpg", "/assets/images/rings-1/5-2.jpg"],
      bestSeller: false,
    },
    {
      id: 6,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/6-1.jpg", "/assets/images/rings-1/6-2.jpg"],
      bestSeller: true,
    },
    {
      id: 7,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/7-1.jpg", "/assets/images/rings-1/7-2.jpg"],
      bestSeller: false,
    },
    {
      id: 8,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/8-1.jpg", "/assets/images/rings-1/8-2.jpg"],
      bestSeller: false,
    },
    {
      id: 9,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/9-1.jpg", "/assets/images/rings-1/9-2.jpg"],
      bestSeller: true,
    },
    {
      id: 10,
      name: "Stackable Pebble Rings",
      price: 2500,
      description: "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture.",
      category: "rings",
      images: ["/assets/images/rings-1/10-1.jpg", "/assets/images/rings-1/10-2.jpg"],
      bestSeller: false,
    },
  ];
  
  
  // Combine all product data
const allProducts = [
    ...necklaceItems,
    ...earringsItems,
    ...ringsItems,
  ];
  // Seed function
const seedProducts = async () => {
    try {
      // Connect to the database
      await mongoose.connect(process.env.MONGO_URI);
  
      // Clear the Product collection
      await Product.deleteMany({});
      console.log("Cleared existing products");
  
      // Insert new product data
      await Product.insertMany(allProducts);
      console.log("Inserted product data successfully!");
  
      // Disconnect from the database
      mongoose.connection.close();
    } catch (err) {
      console.error("Error seeding data:", err);
      mongoose.connection.close();
    }
  };

module.exports = seedProducts