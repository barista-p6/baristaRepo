
const Order = require("../model/orders");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({isDeleted:false})
      .populate("userId", "username")
      .populate("baristaId", "username")
      .populate("beverageId", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};


exports.updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, totalPrice} = req.body;
    const updatedOrderItem = await Order.findByIdAndUpdate(
      id,
      { quantity, totalPrice },
      { new: true }
    )
      .populate("userId", "username")
      .populate("baristaId", "username")
      .populate("beverageId", "name");

    res.json(updatedOrderItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating order item" });
  }
};


exports.softDeleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error soft deleting order" });
  }
};

