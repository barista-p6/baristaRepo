const Review = require("../model/reviews");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ isDeleted: false }).populate(
      "userId",
      "username"
    );
      
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
};
exports.softDeleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json({ message: "Review soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error soft deleting review" });
  }
};
