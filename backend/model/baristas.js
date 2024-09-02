const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baristaSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  profilePic: { type: String },
  bio: { type: String },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  isApproved: { type: Boolean, default: false },
  balance: { type: Number, default: 0 },
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
  beverages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Beverage' }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  rating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Barista = mongoose.model('Barista', baristaSchema);
module.exports = Barista;