


// حذفته



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  ingredientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
  recipesId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
  type: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;