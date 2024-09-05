const Review = require("../model/reviews");
const Order = require("../model/orders");
const Beverage = require("../model/beverages");
const Recipe = require("../model/recipes");
const Barista = require("../model/baristas");
const User = require("../model/users");
//بترجعلي اجمالي اعداد كل وحدة
exports.getDashboardStats = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const baristaCount = await Barista.countDocuments();
    const recipeCount = await Recipe.countDocuments();
    const beverageCount = await Beverage.countDocuments();
    const orderCount = await Order.countDocuments();
    // const contactCount= await Contact.countDocuments();

    res.json({
      userCount,
      baristaCount,
      recipeCount,
      beverageCount,
      orderCount,
      // countactCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard stats" });
  }
};
//استرجاع كل المستخدمين
