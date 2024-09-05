// const Recipe = require("../model/recipes");

// exports.getRecipes = async (req, res) => {
//   try {
//     const recipes = await Recipe.find({ isDeleted: false }).populate(
//       "baristaId",
//       "username"
//     );
//     console.log(recipes);
//     res.json(recipes);
//   } catch (error) {
//     console.error("Error in getRecipes:", error);
//     res.status(500).json({ message: "Error fetching recipes" });
//   }
// };
const Recipe = require("../model/recipes");

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("baristaId", "username");
    console.log(recipes);
    res.json(recipes);
  } catch (error) {
    console.error("Error in getRecipes:", error);
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

