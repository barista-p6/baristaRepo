const express = require("express");
const router = express.Router();
const Product = require('../model/products'); 
const Recipe = require('../model/recipes') ;
const Beverage = require('../model/beverages')




router.get('/Allproducts', async (req, res) => {
    const products = await Product.find()
    res.json(products);
});



router.get('/product/:id', async (req, res) => {
      const productId = req.params.id;
  

      const product = await Product.findById(productId)
        .populate('recipes')  
        .populate('beverages');  


      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(product);
   
  });
  

module.exports = router;