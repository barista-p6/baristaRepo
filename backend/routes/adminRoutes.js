const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');

const userController = require('../Controllers/user');
const baristaController = require('../Controllers/barista');
const recipeController = require('../Controllers/recipes');
const beverageController = require('../Controllers/beverages');
const orderController = require('../Controllers/order');
const reviewsController = require('../Controllers/reviews');
const baristaReqController = require('../Controllers/baristaReq')

router.get('/dashboard-stats', adminController.getDashboardStats);


router.get('/users',userController .getUsers);
router.put("/users/:id", userController.updateUser);
router.patch("/users/:id", userController.deleteUser);
router.patch("/users/:id/toggle-status", userController.toggleUserStatus);


router.get('/baristas', baristaController.getBaristas);
router.get('/baristas/stats', baristaController.getBaristastats);
router.patch("/baristas/:id/toggle-status", baristaController.toggleBaristaStatus);
router.patch("/baristas/:id", baristaController.deleteBarista);


router.get("/recipes", recipeController.getRecipes);
router.get("/beverages", beverageController.getBeverages);
router.get("/orders", orderController.getOrders);
router.get("/reviews",reviewsController .getReviews);
router.get('/dashboard-stats', adminController.getDashboardStats);

router.get('/requests',baristaReqController.getRequests);
// router.get("/requests" , baristaAuthController.getRequests);
router.patch("/requests/:id", baristaReqController.deleteRequest);

module.exports = router;