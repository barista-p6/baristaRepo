const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beverageSchema = new Schema({
  baristaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Barista', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantityAvailable: { type: Number, required: true },
  photos: { type: [String] },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  rating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Beverage = mongoose.model('Beverage', beverageSchema);
module.exports = Beverage;