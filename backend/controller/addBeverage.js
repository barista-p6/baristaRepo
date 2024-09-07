const Beverage = require("../model/beverages");
const syrups = require("../model/products");
const Product = require("../model/products");
const path = require("path");
const fs = require("fs");

exports.createBeverage = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { name, description, price, category, quantityAvailable, syrups } =
      req.body;

    const imagePath =
      req.files && req.files["image"] ? req.files["image"][0].path : null;

    const syrupIds = syrups ? JSON.parse(syrups) : [];

     const newBeverage = new Beverage({
      baristaId: req.user,
      name,
      description,
      price,
      category,
      photos: imagePath,
      quantityAvailable,
      products: syrupIds,
    });

    const savedBeverage = await newBeverage.save();
    console.log("Saved Beverage:", savedBeverage);

    if (syrupIds.length > 0) {
      await Product.updateMany(
        { _id: { $in: syrupIds } }, 
        { $addToSet: { beverages: savedBeverage._id } } 
      );
    }

    res.status(201).json({
      message: "Beverage created and associated with products successfully",
      beverage: savedBeverage,
    });
  } catch (error) {
    console.error("Error creating Beverage:", error);
    res.status(500).json({ error: error.message });
  }
};

// -------------------
exports.AllSyrups = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const syrup = await syrups.find();
    res.status(200).json(syrup);
  } catch (error) {
    console.error("Error fetching syrups:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
