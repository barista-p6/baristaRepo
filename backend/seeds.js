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


// Clear existing data
const clearData = async () => {
  await User.deleteMany({});
  await Barista.deleteMany({});
  await Product.deleteMany({});
  await Recipe.deleteMany({});
  await Beverage.deleteMany({});
  await Review.deleteMany({});
  await Order.deleteMany({});
  console.log("Existing data cleared.");
};

// Create sample data
const createSampleData = async () => {
  // Sample Users
  const user1 = new User({ username: 'john_doe', email: 'john@example.com', password: '123456' });
  const user2 = new User({ username: 'jane_doe', email: 'jane@example.com', password: 'abcdef' });

  // Sample Baristas
  const barista1 = new Barista({ username: 'barista_one', email: 'barista1@example.com', password: 'barista123', isApproved: true });
  const barista2 = new Barista({ username: 'barista_two', email: 'barista2@example.com', password: 'barista456', isApproved: true });

  // Sample Recipes
  const recipe1 = new Recipe({ name: 'Espresso', baristaId: barista1._id, instructions: 'Brew coffee with espresso machine.' });
  const recipe2 = new Recipe({ name: 'Green Tea', baristaId: barista2._id, instructions: 'Brew tea with hot water.' });

  await recipe1.save();
  await recipe2.save();

  // Sample Beverages
  const beverage1 = new Beverage({ name: 'Latte', baristaId: barista1._id, description: 'Creamy latte.', price: 5, quantityAvailable: 20 });
  const beverage2 = new Beverage({ name: 'Matcha Tea', baristaId: barista2._id, description: 'Refreshing matcha tea.', price: 4, quantityAvailable: 30 });

  await beverage1.save();
  await beverage2.save();

  // Sample Products linked with Recipes and Beverages
  const product1 = new Product({ name: 'Coffee Beans', description: 'Premium coffee beans.', price: 15, category: 'Coffee', recipes: [recipe1._id], beverages: [beverage1._id] });
  const product2 = new Product({ name: 'Tea Leaves', description: 'Organic tea leaves.', price: 10, category: 'Tea', recipes: [recipe2._id], beverages: [beverage2._id] });

  await product1.save();
  await product2.save();

  // Sample Reviews for Recipes and Beverages
  const review1 = new Review({ userId: user1._id, targetId: recipe1._id, targetModel: 'Recipe', rating: 5, comment: 'Great Espresso!' });
  const review2 = new Review({ userId: user2._id, targetId: beverage2._id, targetModel: 'Beverage', rating: 4, comment: 'Refreshing matcha!' });

  await review1.save();
  await review2.save();

  // Sample Orders
  const order1 = new Order({ userId: user1._id, baristaId: barista1._id, beverageId: beverage1._id, quantity: 2, totalPrice: 10, deliveryAddress: '123 Coffee St.' });
  const order2 = new Order({ userId: user2._id, baristaId: barista2._id, beverageId: beverage2._id, quantity: 3, totalPrice: 12, deliveryAddress: '456 Tea Ave.' });

  await order1.save();
  await order2.save();

  // Updating Barista with recipes, beverages, and orders
  barista1.recipes.push(recipe1._id);
  barista1.beverages.push(beverage1._id);
  barista1.orders.push(order1._id);
  barista2.recipes.push(recipe2._id);
  barista2.beverages.push(beverage2._id);
  barista2.orders.push(order2._id);

  await barista1.save();
  await barista2.save();

  // Save Users
  await user1.save();
  await user2.save();

  console.log("Sample data created.");
};

const seedDatabase = async () => {
  await clearData();
  await createSampleData();
  mongoose.connection.close();
};

seedDatabase();