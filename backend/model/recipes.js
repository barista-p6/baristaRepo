const mongoose = require("mongoose");
// const { report } = require("../routes/userProfile");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  baristaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Barista",
    required: true,
  },
  preparation: [{ type: String }], // Changed to an array of strings for steps
  ingredients: [
    {
      name: { type: String, required: true }, // Name of the ingredient
      quantity: { type: Number, required: true }, // Quantity of the ingredient
      unit: { type: String, required: true }, // Unit of measurement (e.g., cups, teaspoons)
    },
  ],
  isDeleted: { type: Boolean, default: false },
  report: { type: Number, default: 0 },
  cookingTime: { type: String },
  categories: { type: [String] },
  cuisine: { type: String },
  dietaryRestrictions: { type: [String] },

  photos: { type: [String] },
  bg: { type: [String] },

  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
