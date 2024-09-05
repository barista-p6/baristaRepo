const Barista = require("../model/baristas");
const Recipe = require('../model/recipes'); 
const Beverage = require('../model/beverages');
const Order = require('../model/orders');
exports.getBaristas = async (req, res) => {
  try {
    const baristas = await Barista.find({isDeleted: false, isApproved: true}).select("-password"); 
    res.json(baristas);
  } catch (error) {
    console.error("Error fetching baristas:", error);
    res.status(500).json({ message: "Error fetching baristas" });
  }
};


exports.deleteBarista = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await Barista.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error soft deleting user" });
  }
};



exports.getBaristastats = async (req, res) => {
  try {
    const baristas = await Barista.aggregate([
      {
        $match: { isDeleted: false, isApproved: true } // Optional: Filter active and approved baristas
      },
      {
        $lookup: {
          from: 'recipes', // Correct collection name
          localField: '_id',
          foreignField: 'baristaId',
          as: 'recipes'
        }
      },
      {
        $lookup: {
          from: 'beverages', // Correct collection name
          localField: '_id',
          foreignField: 'baristaId',
          as: 'beverages'
        }
      },
      {
        $lookup: {
          from: 'orders', // Correct collection name
          localField: '_id',
          foreignField: 'baristaId',
          as: 'orders'
        }
      },
      {
        $project: {
          username: 1,
          email: 1,
          profilePic: 1,
          isApproved: 1,
          recipeCount: { $size: '$recipes' },
          beverageCount: { $size: '$beverages' },
          orderCount: { $size: '$orders' }
        }
      }
    ]);

    res.json(baristas);
  } catch (error) {
    console.error('Error fetching barista stats:', error);
    res.status(500).json({ message: 'Error fetching barista stats' });
  }
};


exports.toggleBaristaStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const barista = await Barista.findById(id);
    if (!barista) {
      return res.status(404).json({ message: "User not found" });
    }
    barista.isActive = !barista.isActive;
    await barista.save();
    res.json(barista);
  } catch (error) {
    res.status(500).json({ message: "Error toggling barista status" });
  }
};

exports.deleteBarista = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBarista = await Barista.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    if (!updatedBarista) {
      return res.status(404).json({ message: "Barista not found" });
    }
    res.json({ message: "Barista soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error soft deleting Barista" });
  }
};