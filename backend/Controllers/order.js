
const Order = require("../model/orders");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "username")
      .populate("baristaId", "username")
      .populate("beverageId", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};