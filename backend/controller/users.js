const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./../model/users");
const Barista  = require("./../model/baristas");
require("dotenv").config();
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, isDeleted: false, isActive: true });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password, or account is inactive or deleted" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });

    res.status(200).json({ message: "User logged in successfully!" });
  } catch (error) {
    res.status(500).send("Error logging in: " + error.message);
  }
};

// -----------------------------------------------------------------------
exports.loginBarista = async (req, res) => {
  try {
    const { email, password } = req.body;

    const barista = await Barista.findOne({ email, isDeleted: false, isActive: true });
    if (!barista) {
      return res.status(400).json({ message: "Invalid email or password, or account is inactive or deleted" });
    }

    const isMatch = await bcrypt.compare(password, barista.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: barista._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });

    res.status(200).json({ message: "Barista logged in successfully!" });
  } catch (error) {
    res.status(500).send("Error logging in: " + error.message);
  }
};

// ---------------------------------------------------------------------
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });
    res
      .status(201)
      .json({ message: "User registered successfully (First Method)!" });
  } catch (error) {
    res
      .status(500)
      .send("Error registering user (First Method): " + error.message);
  }
};

// ---------------------------------------------------------------------
exports.registerBarista = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newBarista = new Barista({
      username,
      email,
      password: hashedPassword,
    });

    await newBarista.save();

    const token = jwt.sign({ id: newBarista._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });

    res.status(201).json({ message: "Barista registered successfully!" });
  } catch (error) {
    res.status(500).send("Error registering Barista: " + error.message);
  }
};