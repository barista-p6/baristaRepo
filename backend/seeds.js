const mongoose = require('mongoose');
const Barista = require('./model/baristas');
const Beverage = require('./model/beverages');
const Comment = require('./model/comments');
const Ingredient = require('./model/ingredients');
const Order = require('./model/orders');
const Product = require('./model/products');
const Recipe = require('./model/recipes');
const Review = require('./model/reviews');
const User = require('./model/users');
require('dotenv').config(); 




mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});
async function seed() {
  try {
    await mongoose.connection.dropDatabase();

    // Create Users
    const user1 = await User.create({
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
      bio: 'Coffee enthusiast.',
      socialLinks: {
        facebook: 'https://facebook.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        twitter: 'https://twitter.com/johndoe'
      }
    });

    const user2 = await User.create({
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'password123',
      bio: 'Loves making new recipes.'
    });

    // Create Baristas
    const barista1 = await Barista.create({
      username: 'barista_john',
      email: 'barista_john@example.com',
      password: 'password123',
      bio: 'Expert in brewing and mixing flavors.'
    });

    const barista2 = await Barista.create({
      username: 'barista_jane',
      email: 'barista_jane@example.com',
      password: 'password123',
      bio: 'Passionate about crafting beverages.'
    });

    // Create Products
    const product1 = await Product.create({
      name: 'Vanilla Syrup',
      description: 'Rich vanilla syrup for flavoring drinks.',
      price: 12.99,
      category: 'Syrup'
    });

    const product2 = await Product.create({
      name: 'Hazelnut Syrup',
      description: 'Nutty hazelnut syrup for coffee and desserts.',
      price: 14.99,
      category: 'Syrup'
    });

    // Create Beverages
    const beverage1 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Vanilla Latte',
      description: 'Creamy latte with a hint of vanilla.',
      price: 4.99,
      quantityAvailable: 20,
      products: [product1._id]
    });

    const beverage2 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Hazelnut Mocha',
      description: 'Chocolate mocha with hazelnut syrup.',
      price: 5.49,
      quantityAvailable: 15,
      products: [product2._id]
    });

    // Update Products with Beverages
    await Product.findByIdAndUpdate(product1._id, { beverages: [beverage1._id] });
    await Product.findByIdAndUpdate(product2._id, { beverages: [beverage2._id] });

    // Create Recipes
    const recipe1 = await Recipe.create({
      barista: barista1._id,
      name: 'Vanilla Syrup Recipe',
      instructions: 'Mix sugar and water, add vanilla extract, simmer.',
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'American',
      dietaryRestrictions: ['Vegetarian'],
      products: [product1._id]
    });

    const recipe2 = await Recipe.create({
      barista: barista2._id,
      name: 'Hazelnut Syrup Recipe',
      instructions: 'Roast hazelnuts, blend with syrup, simmer.',
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'European',
      dietaryRestrictions: ['Vegan'],
      products: [product2._id]
    });

    // Update Products with Recipes
    await Product.findByIdAndUpdate(product1._id, { recipes: [recipe1._id] });
    await Product.findByIdAndUpdate(product2._id, { recipes: [recipe2._id] });

    // Create Comments
    const comment1 = await Comment.create({
      userId: user1._id,
      targetId: recipe1._id,
      targetType: 'Recipe',
      content: 'Amazing recipe! Tastes great with coffee.'
    });

    const comment2 = await Comment.create({
      userId: user2._id,
      targetId: beverage1._id,
      targetType: 'Beverage',
      content: 'Love the vanilla flavor in this latte.'
    });

    // Create Ingredients
    const ingredient1 = await Ingredient.create({
      ingredientId: recipe1._id,
      recipesId: [recipe1._id],
      type: 'Syrup',
      isAvailable: true
    });

    const ingredient2 = await Ingredient.create({
      ingredientId: recipe2._id,
      recipesId: [recipe2._id],
      type: 'Syrup',
      isAvailable: true
    });

    // Create Orders
    const order1 = await Order.create({
      userId: user1._id,
      baristaId: barista1._id,
      beverageId: beverage1._id,
      quantity: 2,
      totalPrice: 9.98,
      deliveryAddress: '123 Coffee Street',
      paymentStatus: 'paid'
    });

    const order2 = await Order.create({
      userId: user2._id,
      baristaId: barista2._id,
      beverageId: beverage2._id,
      quantity: 1,
      totalPrice: 5.49,
      deliveryAddress: '456 Mocha Avenue',
      paymentStatus: 'paid'
    });

    // Create Reviews
    const review1 = await Review.create({
      userId: user1._id,
      targetId: beverage1._id,
      targetModel: 'Beverage',
      rating: 5,
      comment: 'Best latte I\'ve ever had!'
    });

    const review2 = await Review.create({
      userId: user2._id,
      targetId: recipe2._id,
      targetModel: 'Recipe',
      rating: 4,
      comment: 'Easy to make and delicious!'
    });

    console.log('Data successfully seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
}

seed();