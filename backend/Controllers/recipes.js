const Recipe = require("../model/recipes");
const Review = require("../model/reviews");


exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({isDeleted : false}).populate("baristaId", "username");
    console.log(recipes);
    res.json(recipes);
  } catch (error) {
    console.error("Error in getRecipes:", error);
    res.status(500).json({ message: "Error fetching recipes" });
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



exports.deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRecipe = await Recipe.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    if (!deleteRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json({ message: "Recipe soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error soft deleting recipe" });
  }
};