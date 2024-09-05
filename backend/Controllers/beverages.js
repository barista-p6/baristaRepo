const Beverage = require("../model/beverages");

exports.getBeverages = async (req, res) => {
  try {
    const beverages = (await Beverage.find().populate("baristaId", "username"));
    res.json(beverages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching beverages" });
  }
};
