const Beverage = require("../model/beverages");
const path = require("path");
const fs = require("fs");

exports.createBeverage = async (req, res) => {
  try {
    console.log("Files:", req.files);
    console.log("Body:", req.body);

    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { name, description, price, category , quantityAvailable } = req.body;

    const imagePath =
      req.files && req.files["image"] ? req.files["image"][0].path : null;

    const newBeverage = new Beverage({
      baristaId: req.user,
      name,
      description,
      price,
      category,
      photos: imagePath,
      quantityAvailable
    });

    const savedBeverage = await newBeverage.save();
    console.log("Saved Beverage:", savedBeverage);
    res.status(201).json({
      message: "Beverage created successfully",
      beverage: savedBeverage,
    });
  } catch (error) {
    console.error("Error creating Beverage:", error);
    res.status(500).json({ error: error.message });
  }
};
