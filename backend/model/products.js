const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  // ضفتهم جديد
  photos: { type: [String] },
  bg: { type: [String] },
  
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }], 
  beverages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Beverage' }], 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
