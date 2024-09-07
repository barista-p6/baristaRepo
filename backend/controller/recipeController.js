const Recipe = require("./../model/recipes");
const path = require("path");
const fs = require("fs");
const Product = require("../model/products");
const mongoose = require("mongoose");


exports.createRecipe = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const {
      name,
      cookingTime,
      categories,
      dietaryRestrictions,
      preparationSteps,
      ingredients,
      syrups,
    } = req.body;

    const imagePath =
      req.files && req.files["image"] ? req.files["image"][0].path : null;
    
    const background =
      req.files && req.files["background"] ? req.files["background"][0].path : null;

    const parsedPreparation = preparationSteps
      ? JSON.parse(preparationSteps)
      : [];
    const parsedIngredients = ingredients ? JSON.parse(ingredients) : [];
    const syrupIds = syrups ? JSON.parse(syrups) : [];

    const newRecipe = new Recipe({
      baristaId: req.user,
      name,
      cookingTime,
      categories,
      dietaryRestrictions,
      preparation: parsedPreparation,
      ingredients: parsedIngredients,
      photos: imagePath,
      bg: background,
      products: syrupIds,
    });

    const savedRecipe = await newRecipe.save();
    console.log("Saved Recipe:", savedRecipe);

    if (syrupIds.length > 0) {
      await Product.updateMany(
        { _id: { $in: syrupIds } },
        { $addToSet: { recipes: savedRecipe._id } }
      );
    }

    res.status(201).json({
      message: "Recipe created and associated with products successfully",
      recipe: savedRecipe,
    });
  } catch (error) {
    console.error("Error creating Recipe:", error);
    res.status(500).json({ error: error.message });
  }
};
// exports.getRecipe = async (req, res) => {
//   try {
//     // if (!req.user) {
//     //   return res.status(401).json({ error: "Unauthorized" });
//     // }

//     const syrup = await Recipe.find();
//     res.status(200).json(syrup);
//   } catch (error) {
//     console.error("Error fetching syrups:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
// // -----------------------------------
// exports.getProducts = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!id) {
//       return res.status(400).json({ message: 'No ID provided' });
//     }

//     const product = await Product.findById(id);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.json(product);
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
