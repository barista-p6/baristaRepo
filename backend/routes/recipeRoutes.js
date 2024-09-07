const express = require("express");
const router = express.Router();
const recipeController = require("../controller/recipeController");
const upload = require("../config/multer-config");
const auth = require("../middleware/auth");

router.post(
  "/create",
  upload.fields([{ name: "image", maxCount: 1 }]),
  auth,
  recipeController.createRecipe
);

module.exports = router;
