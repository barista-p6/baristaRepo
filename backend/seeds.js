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


const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Promise.all([
      User.deleteMany({}),
      Barista.deleteMany({}),
      Beverage.deleteMany({}),
      Comment.deleteMany({}),
      Ingredient.deleteMany({}),
      Order.deleteMany({}),
      Product.deleteMany({}),
      Recipe.deleteMany({}),
      Review.deleteMany({})
    ]);

    // Create sample data
    const users = await User.create([
      { username: 'user1', email: 'user1@example.com', password: 'password123', confirmPassword: 'password123' },
      { username: 'user2', email: 'user2@example.com', password: 'password123', confirmPassword: 'password123' }
    ]);

    const baristas = await Barista.create([
      { username: 'barista1', email: 'barista1@example.com', password: 'password123', confirmPassword: 'password123' },
      { username: 'barista2', email: 'barista2@example.com', password: 'password123', confirmPassword: 'password123' }
    ]);

    const products = await Product.create([
      { name: 'Product1', description: 'Description1', price: 10, category: 'Category1' },
      { name: 'Product2', description: 'Description2', price: 20, category: 'Category2' }
    ]);

    const recipes = await Recipe.create([
      { name: 'Recipe1', instructions: 'Instructions1', products: [products[0]._id] },
      { name: 'Recipe2', instructions: 'Instructions2', products: [products[1]._id] }
    ]);

    const beverages = await Beverage.create([
      { baristaId: baristas[0]._id, name: 'Beverage1', description: 'Description1', price: 5, quantityAvailable: 100 },
      { baristaId: baristas[1]._id, name: 'Beverage2', description: 'Description2', price: 7, quantityAvailable: 50 }
    ]);

    const comments = await Comment.create([
      { userId: users[0]._id, targetId: beverages[0]._id, targetType: 'Beverage', content: 'Great beverage!' },
      { userId: users[1]._id, targetId: recipes[0]._id, targetType: 'Recipe', content: 'Delicious recipe!' }
    ]);

    const ingredients = await Ingredient.create([
      { ingredientId: recipes[0]._id, type: 'Spice', isAvailable: true },
      { ingredientId: recipes[1]._id, type: 'Herb', isAvailable: true }
    ]);

    const orders = await Order.create([
      { userId: users[0]._id, baristaId: baristas[0]._id, beverageId: beverages[0]._id, quantity: 2, totalPrice: 10, deliveryAddress: 'Address1' },
      { userId: users[1]._id, baristaId: baristas[1]._id, beverageId: beverages[1]._id, quantity: 1, totalPrice: 7, deliveryAddress: 'Address2' }
    ]);

    const reviews = await Review.create([
      { userId: users[0]._id, targetId: beverages[0]._id, targetModel: 'Beverage', rating: 5, comment: 'Amazing!' },
      { userId: users[1]._id, targetId: recipes[0]._id, targetModel: 'Recipe', rating: 4, comment: 'Very good!' }
    ]);

    console.log('Database seeding complete.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
