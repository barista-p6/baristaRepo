const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  baristaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Barista', required: true },
  name: { type: String, required: true },
  ingredientsId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  instructions: { type: String, required: true },
  cookingTime: { type: String },
  categories: { type: [String] },
  cuisine: { type: String },
  dietaryRestrictions: { type: [String] },
  photos: { type: [String] },
  rating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;