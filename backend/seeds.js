const mongoose = require("mongoose");
const Barista = require("./model/baristas");
const Beverage = require("./model/beverages");
const Comment = require("./model/comments");
const Ingredient = require("./model/ingredients");
const Order = require("./model/orders");
const Product = require("./model/products");
const Recipe = require("./model/recipes");
const Review = require("./model/reviews");
const User = require("./model/users");
const BaristaAuth = require("./model/baristasAuth");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});

// Clear existing data
const clearData = async () => {
  await User.deleteMany({});
  await Barista.deleteMany({});
  await Recipe.deleteMany({});
  await Beverage.deleteMany({});
  await Review.deleteMany({});
  await Product.deleteMany({});
  await Order.deleteMany({});
  await BaristaAuth.deleteMany({});
  console.log("Existing data cleared.");
};

// Create sample data
const createSampleData = async () => {
  // Sample Users
  const user1 = new User({
    username: "john_doe",
    email: "john@example.com",
    password: "123456",
  });
  const user2 = new User({
    username: "jane_doe",
    email: "jane@example.com",
    password: "abcdef",
  });

  await user1.save();
  await user2.save();

  // Sample Baristas
  const barista1 = new Barista({
    username: "barista_one",
    email: "barista1@example.com",
    password: "barista123",
    isApproved: true,
  });
  const barista2 = new Barista({
    username: "barista_two",
    email: "barista2@example.com",
    password: "barista456",
    isApproved: true,
  });

  await barista1.save();
  await barista2.save();
  // Sample BaristaAuth
  const baristaAuth1 = new BaristaAuth({
    baristaId: "66d969a1c7bf2bbc0340d24d",
    profileImage: "uploadsprofileImage-1725444916669.JPG",
    phone: "0786997275",
    culinarySchool: "uploadsculinarySchool-1725444916708.pdf",
    bio: "Experienced barista with a passion for creating specialty drinks.",
    portfolio: "uploadsportfolio-1725444916726.pdf",
    recommendations: "recommendation",
    applicationStatus: "pending",
  });

  await baristaAuth1.save();

  // Sample Recipes
  const recipes = [
    {
      name: "Vanilla Syrup Drink Mix",
      baristaId: barista1._id,
      instructions: "Mix vanilla syrup with milk.",
    },
    {
      name: "Hazelnut Syrup Drink Mix",
      baristaId: barista2._id,
      instructions: "Mix hazelnut syrup with coffee.",
    },
    {
      name: "Cranberry Tonic Drink",
      baristaId: barista1._id,
      instructions: "Mix cranberry syrup with tonic water.",
    },
    {
      name: "Mint Mojito Drink Mix",
      baristaId: barista2._id,
      instructions: "Mix mint syrup with lime and soda.",
    },
    {
      name: "Caramel Syrup Drink Mix",
      baristaId: barista1._id,
      instructions: "Mix caramel syrup with espresso.",
    },
    {
      name: "Almond Syrup Drink Mix",
      baristaId: barista2._id,
      instructions: "Mix almond syrup with milk.",
    },
    {
      name: "Cinnamon Syrup Drink Mix",
      baristaId: barista1._id,
      instructions: "Mix cinnamon syrup with tea.",
    },
    {
      name: "Ginger Syrup Drink Mix",
      baristaId: barista2._id,
      instructions: "Mix ginger syrup with lemonade.",
    },
    {
      name: "Maple Syrup Drink Mix",
      baristaId: barista1._id,
      instructions: "Mix maple syrup with hot water.",
    },
    {
      name: "Orange Syrup Drink Mix",
      baristaId: barista2._id,
      instructions: "Mix orange syrup with sparkling water.",
    },
    {
      name: "Lavender Syrup Drink Mix",
      baristaId: barista1._id,
      instructions: "Mix lavender syrup with soda.",
    },
  ];

  const savedRecipes = await Recipe.insertMany(recipes);

  // Sample Beverages with quantityAvailable
  const beverages = [
    {
      name: "Vanilla Latte",
      baristaId: barista1._id,
      description: "Smooth vanilla latte.",
      price: 5,
      category: "Coffee",
      quantityAvailable: 50,
    },
    {
      name: "Hazelnut Mocha",
      baristaId: barista2._id,
      description: "Rich hazelnut mocha.",
      price: 6,
      category: "Coffee",
      quantityAvailable: 45,
    },
    {
      name: "Cranberry Tonic",
      baristaId: barista1._id,
      description: "Fruity cranberry tonic.",
      price: 4,
      category: "Mojito",
      quantityAvailable: 60,
    },
    {
      name: "Honey Lemonade",
      baristaId: barista2._id,
      description: "Sweet honey lemonade.",
      price: 3,
      category: "Mojito",
      quantityAvailable: 40,
    },
    {
      name: "Passion Fruit Mojito",
      baristaId: barista1._id,
      description: "Refreshing passion fruit mojito.",
      price: 4,
      category: "Mojito",
      quantityAvailable: 30,
    },
    {
      name: "Peach Iced Tea",
      baristaId: barista2._id,
      description: "Cool peach iced tea.",
      price: 4,
      category: "IcedTea",
      quantityAvailable: 55,
    },
    {
      name: "Raspberry Iced Tea",
      baristaId: barista1._id,
      description: "Sweet raspberry iced tea.",
      price: 4,
      category: "IcedTea",
      quantityAvailable: 50,
    },
    {
      name: "Watermelon Cooler",
      baristaId: barista2._id,
      description: "Cool watermelon drink.",
      price: 5,
      category: "Mojito",
      quantityAvailable: 35,
    },
    {
      name: "Almond Coffee",
      baristaId: barista1._id,
      description: "Almond-flavored coffee.",
      price: 5,
      category: "Coffee",
      quantityAvailable: 40,
    },
    {
      name: "Blueberry Lemonade",
      baristaId: barista2._id,
      description: "Tangy blueberry lemonade.",
      price: 3,
      category: "Mojito",
      quantityAvailable: 30,
    },
    {
      name: "Raspberry Cooler",
      baristaId: barista1._id,
      description: "Chilled raspberry cooler.",
      price: 4,
      category: "IcedTea",
      quantityAvailable: 35,
    },
    {
      name: "Hot Cinnamon",
      baristaId: barista2._id,
      description: "Spicy hot cinnamon drink.",
      price: 4,
      category: "Coffee",
      quantityAvailable: 20,
    },
    {
      name: "Pear Lemonade",
      baristaId: barista1._id,
      description: "Pear-flavored lemonade.",
      price: 3,
      category: "Mojito",
      quantityAvailable: 45,
    },
    {
      name: "Honey Iced Tea",
      baristaId: barista2._id,
      description: "Sweet honey iced tea.",
      price: 4,
      category: "IcedTea",
      quantityAvailable: 50,
    },
    {
      name: "Passion Fruit Iced Tea",
      baristaId: barista1._id,
      description: "Passion fruit iced tea.",
      price: 4,
      category: "IcedTea",
      quantityAvailable: 25,
    },
    {
      name: "Violet Iced Tea",
      baristaId: barista2._id,
      description: "Floral violet iced tea.",
      price: 4,
      category: "IcedTea",
      quantityAvailable: 30,
    },
    {
      name: "Peach Mint Cooler",
      baristaId: barista1._id,
      description: "Peach and mint cooler.",
      price: 5,
      category: "Mojito",
      quantityAvailable: 30,
    },
    {
      name: "Mango Lemonade",
      baristaId: barista2._id,
      description: "Mango-flavored lemonade.",
      price: 3,
      category: "Mojito",
      quantityAvailable: 35,
    },
    {
      name: "Caramel Macchiato",
      baristaId: barista1._id,
      description: "Sweet caramel macchiato.",
      price: 6,
      category: "Coffee",
      quantityAvailable: 40,
    },
    {
      name: "Strawberry",
      baristaId: barista2._id,
      description: "Sweet strawberry drink.",
      price: 4,
      category: "Mojito",
      quantityAvailable: 25,
    },
    {
      name: "Mint Julep",
      baristaId: barista1._id,
      description: "Classic mint julep.",
      price: 5,
      category: "Mojito",
      quantityAvailable: 40,
    },
    {
      name: "Ginger Ale",
      baristaId: barista2._id,
      description: "Spicy ginger ale.",
      price: 4,
      category: "Mojito",
      quantityAvailable: 20,
    },
  ];

  const savedBeverages = await Beverage.insertMany(beverages);
  // Sample Products linked with Recipes and Beverages
  const products = [
    {
      name: "Hazelnut Syrup",
      description: "Nutty hazelnut syrup.",
      price: 10,
      category: "Syrup",
      recipes: [savedRecipes[1]._id],
      beverages: [savedBeverages[1]._id],
    },
    {
      name: "Honey Syrup",
      description: "Sweet honey syrup.",
      price: 8,
      category: "Syrup",
      beverages: [savedBeverages[3]._id],
    },
    {
      name: "Red Passion Fruit Syrup",
      description: "Tart passion fruit syrup.",
      price: 9,
      category: "Syrup",
      beverages: [savedBeverages[4]._id],
    },
    {
      name: "Violet Syrup",
      description: "Floral violet syrup.",
      price: 7,
      category: "Syrup",
      beverages: [savedBeverages[14]._id],
    },
    {
      name: "Iced Tea Peach Syrup",
      description: "Peach-flavored iced tea syrup.",
      price: 6,
      category: "Syrup",
      beverages: [savedBeverages[5]._id],
    },
    {
      name: "Iced Tea Mango Syrup",
      description: "Mango-flavored iced tea syrup.",
      price: 6,
      category: "Syrup",
      beverages: [savedBeverages[17]._id],
    },
    {
      name: "Iced Tea Raspberry Syrup",
      description: "Raspberry-flavored iced tea syrup.",
      price: 6,
      category: "Syrup",
      beverages: [savedBeverages[6]._id],
    },
    {
      name: "Watermelon Syrup",
      description: "Cool watermelon syrup.",
      price: 8,
      category: "Syrup",
      beverages: [savedBeverages[7]._id],
    },
    {
      name: "Orange Syrup",
      description: "Citrus orange syrup.",
      price: 7,
      category: "Syrup",
      recipes: [savedRecipes[9]._id],
    },
  ];

  await Product.insertMany(products);

  // Sample Reviews for Recipes and Beverages
  const reviews = [
    {
      userId: user1._id,
      recipeId: savedRecipes[0]._id,
      baristaId: barista1._id,
      rating: 5,
      comment: "Loved the Vanilla Syrup Drink Mix!",
    },
    {
      userId: user2._id,
      recipeId: savedRecipes[1]._id,
      baristaId: barista2._id,
      rating: 4,
      comment: "Hazelnut syrup is delicious!",
    },
    {
      userId: user1._id,
      recipeId: savedRecipes[2]._id,
      baristaId: barista1._id,
      rating: 5,
      comment: "Refreshing Cranberry Tonic!",
    },
    {
      userId: user2._id,
      beverageId: savedBeverages[0]._id,
      baristaId: barista1._id,
      rating: 5,
      comment: "Vanilla Latte was perfect!",
    },
    {
      userId: user1._id,
      beverageId: savedBeverages[4]._id,
      baristaId: barista2._id,
      rating: 4,
      comment: "Passion Fruit Mojito is a must-try!",
    },
  ];

  await Review.insertMany(reviews);

  // Sample Orders
  const orders = [
    {
      userId: user1._id,
      baristaId: barista1._id,
      beverageId: savedBeverages[0]._id,
      quantity: 2,
      totalPrice: 10,
      deliveryAddress: "123 Coffee St.",
    },
    {
      userId: user2._id,
      baristaId: barista2._id,
      beverageId: savedBeverages[1]._id,
      quantity: 1,
      totalPrice: 6,
      deliveryAddress: "456 Tea Ave.",
    },
  ];

  await Order.insertMany(orders);

  console.log("Sample data created.");
};

const seedDatabase = async () => {
  await clearData();
  await createSampleData();
  mongoose.connection.close();
};

seedDatabase();
