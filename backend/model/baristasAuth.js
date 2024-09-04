const mongoose = require("mongoose");

const baristaAuthSchema = new mongoose.Schema(
  {
    baristaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Barista",
      required: true,
    },
    profileImage: String,
    phone: { type: String, required: true },
    culinarySchool: { type: String, required: true },
    bio: { type: String, required: true },
    portfolio: String,
    recommendations: String,
    applicationStatus: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BaristaAuth", baristaAuthSchema);
