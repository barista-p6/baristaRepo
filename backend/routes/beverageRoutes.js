const express = require("express");
const router = express.Router();
const beverageController = require("../controller/addBeverage");
const upload = require("../config/multer-config");
const auth = require("../middleware/auth");

router.post(
  "/create",
  upload.fields([{ name: "image", maxCount: 1 }]),
  auth,
  beverageController.createBeverage
);

router.get('/syrups' , auth , beverageController.AllSyrups)
module.exports = router;
