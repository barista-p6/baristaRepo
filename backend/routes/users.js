const express = require("express");
const router = express.Router();
const userController = require("./../controller/users");

router.post("/register/cheif", userController.registerBarista);
router.post("/login/cheif", userController.loginBarista);
router.post("/register/user", userController.registerUser);
router.post("/login/user", userController.loginUser);


module.exports = router;
