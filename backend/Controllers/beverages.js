const Beverage = require("../model/beverages");
const Review = require("../model/reviews");


exports.getBeverages = async (req, res) => {
  try {
    const beverages = await Beverage.find({isDeleted:false}).populate("baristaId","username");
    console.log(beverages);
    res.json(beverages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching beverages" });
  }
};

exports.getReviewRate = async (req, res) => {
  try {
    const reviews = await Review.find().populate("recipeId", "rating");
    const reviewRateMap = reviews.reduce((acc, review) => {
      if (review.recipeId) {
        acc[review.recipeId._id] = review.rating;
      }
      return acc;
    }, {});
    res.json(reviewRateMap);
  } catch (error) {
    console.error("Error in getReviewRate:", error);
    res.status(500).json({ message: "Error fetching reviews" });
  }
};


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
