const User = require("../model/users");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -confirmPassword"); //select("-password -confirmPassword")هاي يعني ما تجيب هضول الشغلات
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, email },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
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

// exports.toggleUserStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);
//     user.isActive = !user.isActive;
//     await user.save();
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Error toggling user status" });
//   }
// };
exports.toggleUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.isActive = !user.isActive;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error toggling user status" });
  }
};
