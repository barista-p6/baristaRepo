const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  ingredients: [
    {
      name: { type: String, required: true }, 
      unit: { type: String, required: true } 
    }
  ],
  type: { type: String, required: true }, 
  isAvailable: { type: Boolean, default: true }, 
  createdAt: { type: Date, default: Date.now }, 
  updatedAt: { type: Date, default: Date.now }, 
  recipesId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }], 
  allergyInfo: { type: String } 
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;
