const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beverageSchema = new Schema({
  baristaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Barista', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantityAvailable: { type: Number, required: true },
  category: { type: String },
  photos: { type: [String] },
  report: { type: Number, default: 0 },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], 
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Beverage = mongoose.model('Beverage', beverageSchema);
module.exports = Beverage;




// Details Page for Drink