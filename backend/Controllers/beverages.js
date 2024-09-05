const Beverage = require("../model/beverages");

exports.getBeverages = async (req, res) => {
  try {
    const beverages = await Beverage.find({isDeleted:false}).populate(
      "baristaId",
      "username"
    );
    console.log(beverages);
    res.json(beverages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching beverages" });
  }
};

// تعديل عليهم

exports.editBeverage = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updateBeverage = await Beverage.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updateBeverage) {
      return res.status(404).json({ message: "Beverage not found" });
    }
    res.json(updateBeverage);
  } catch (error) {
    res.status(500).json({ message: "Error updating beverage" });
  }
};

exports.softDeleteBeverage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBeverage = await Beverage.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );

    if (!deletedBeverage) {
      return res.status(404).json({ message: "Beverage not found" });
    }

    res.json({ message: "Beverage soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error soft deleting beverage" });
  }
};
