
const Review = require("../model/reviews");


exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("userId", "username")
      .populate("targetId", "name");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
};