const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');

router.get('/dashboard-stats', adminController.getDashboardStats);
router.get('/users', adminController.getUsers);
router.get('/baristas', adminController.getBaristas);
router.get("/recipes", adminController.getRecipes);
router.get("/beverages", adminController.getBeverages);
router.get("/orders", adminController.getOrders);
router.get("/reviews", adminController.getReviews);

module.exports = router;