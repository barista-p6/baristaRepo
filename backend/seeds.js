const mongoose = require('mongoose');
const Barista = require('./model/baristas');
const Beverage = require('./model/beverages');
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
  await Recipe.deleteMany({});
  await Beverage.deleteMany({});
  await Review.deleteMany({});
  await Product.deleteMany({});
  await Order.deleteMany({});
  console.log("Existing data cleared.");
};

// Create sample data
const createSampleData = async () => {
  // Sample Users
  const user1 = new User({ username: 'john_doe', email: 'john@example.com', password: '123456' });
  const user2 = new User({ username: 'jane_doe', email: 'jane@example.com', password: 'abcdef' });

  await user1.save();
  await user2.save();

  // Sample Baristas
  const barista1 = new Barista({ username: 'barista_one', email: 'barista1@example.com', password: 'barista123', isApproved: true });
  const barista2 = new Barista({ username: 'barista_two', email: 'barista2@example.com', password: 'barista456', isApproved: true });

  await barista1.save();
  await barista2.save();
 // Sample Recipes
 const recipes = [
  
  { 
    name: 'Vanilla Syrup Drink Mix', 
    baristaId: barista1._id, 
    preparation: 'Shake well before serving.',
    ingredients: [{ name: 'Vanilla Syrup', quantity: 50, unit: 'ml' }, { name: 'Milk', quantity: 200, unit: 'ml' }],
    cookingTime: '5 minutes',
    categories: ['Syrup'],
    cuisine: 'American',
    dietaryRestrictions: ['Vegetarian'],
    bg: ['https://www.1883.com/app/uploads/2021/05/sirop_vanille-1883_bg-2.webp'] ,
    photos: ['https://www.1883.com/app/uploads/2021/05/sirop_vanille-1883_ps.webp'],
    reviews: [],
    products: []
  },


  { 
    name: 'Hazelnut Syrup Drink Mix', 
    baristaId: barista2._id, 
    preparation: 'Serve hot.',
    ingredients: [{ name: 'Hazelnut Syrup', quantity: 30, unit: 'ml' }, { name: 'Coffee', quantity: 150, unit: 'ml' }],
    cookingTime: '5 minutes',
    categories: ['Syrup'],
    cuisine: 'American',
    dietaryRestrictions: ['Gluten-Free'],
    photos: ['https://www.1883.com/app/uploads/2024/06/1883_miel-1.png'],
    bg : ['https://www.1883.com/app/uploads/2024/06/1883_miel-1.png'] ,
    reviews: [],
    products: []
  },
  { 
    name: 'Cranberry Tonic Drink', 
    baristaId: barista1._id, 
    preparation: 'Serve chilled.',
    ingredients: [{ name: 'Cranberry Syrup', quantity: 40, unit: 'ml' }, { name: 'Tonic Water', quantity: 200, unit: 'ml' }],
    cookingTime: '3 minutes',
    categories: ['Syrup'],
    cuisine: 'American',
    dietaryRestrictions: ['Vegetarian'],
    photos: ['https://www.1883.com/app/uploads/2021/05/sirop_cranberry-1883_ps.png'],
    bg : ['https://www.1883.com/app/uploads/2024/08/CRANBERRY-TONIC-683x1024.jpg'] ,
    products: []
  } ,

  
  { name: 'Mint Mojito Drink Mix', baristaId: barista2._id },
  { name: 'Caramel Syrup Drink Mix', baristaId: barista1._id },
  { name: 'Almond Syrup Drink Mix', baristaId: barista2._id},
  { name: 'Cinnamon Syrup Drink Mix', baristaId: barista1._id },
  { name: 'Ginger Syrup Drink Mix', baristaId: barista2._id },
  { name: 'Maple Syrup Drink Mix', baristaId: barista1._id},
  { name: 'Orange Syrup Drink Mix', baristaId: barista2._id },
  { name: 'Lavender Syrup Drink Mix', baristaId: barista1._id }
];

const savedRecipes = await Recipe.insertMany(recipes);

// Sample Beverages with quantityAvailable
const beverages = [
  { name: 'Vanilla Latte', baristaId: barista1._id, description: 'Smooth vanilla latte.', price: 5, category: 'Coffee', quantityAvailable: 50, photos: ['https://www.1883.com/app/uploads/2024/08/vanilla-latte.jpg'] },
  { name: 'Hazelnut Mocha', baristaId: barista2._id, description: 'Rich hazelnut mocha.', price: 6, category: 'Coffee', quantityAvailable: 45, photos: ['https://www.1883.com/app/uploads/2024/08/hazelnut-mocha.jpg'] },
  { name: 'Cranberry Tonic', baristaId: barista1._id, description: 'Fruity cranberry tonic.', price: 4, photos: ['https://www.1883.com/app/uploads/2024/08/CRANBERRY-TONIC-683x1024.jpg'], category: 'Mojito', quantityAvailable: 60 },
  { name: 'Honey Lemonade', baristaId: barista2._id, description: 'Sweet honey lemonade.', price: 3, category: 'Mojito', quantityAvailable: 40, photos: ['https://www.1883.com/app/uploads/2024/08/honey-lemonade.jpg'] },
  { name: 'Passion Fruit Mojito', baristaId: barista1._id, description: 'Refreshing passion fruit mojito.', price: 4, category: 'Mojito', quantityAvailable: 30, photos: ['https://www.1883.com/app/uploads/2024/08/passion-fruit-mojito.jpg'] },
  { name: 'Peach Iced Tea', baristaId: barista2._id, description: 'Cool peach iced tea.', price: 4, category: 'IcedTea', quantityAvailable: 55, photos: ['https://www.1883.com/app/uploads/2024/08/peach-iced-tea.jpg'] },
  { name: 'Raspberry Iced Tea', baristaId: barista1._id, description: 'Sweet raspberry iced tea.', price: 4, category: 'IcedTea', quantityAvailable: 50, photos: ['https://www.1883.com/app/uploads/2024/08/raspberry-iced-tea.jpg'] },
  { name: 'Watermelon Cooler', baristaId: barista2._id, description: 'Cool watermelon drink.', price: 5, category: 'Mojito', quantityAvailable: 35, photos: ['https://www.1883.com/app/uploads/2024/08/watermelon-cooler.jpg'] },
  { name: 'Almond Coffee', baristaId: barista1._id, description: 'Almond-flavored coffee.', price: 5, category: 'Coffee', quantityAvailable: 40, photos: ['https://www.1883.com/app/uploads/2024/08/almond-coffee.jpg'] },
  { name: 'Blueberry Lemonade', baristaId: barista2._id, description: 'Tangy blueberry lemonade.', price: 3, category: 'Mojito', quantityAvailable: 30, photos: ['https://www.1883.com/app/uploads/2024/08/blueberry-lemonade.jpg'] },
  { name: 'Raspberry Cooler', baristaId: barista1._id, description: 'Chilled raspberry cooler.', price: 4, category: 'IcedTea', quantityAvailable: 35, photos: ['https://www.1883.com/app/uploads/2024/08/raspberry-cooler.jpg'] },
  { name: 'Hot Cinnamon', baristaId: barista2._id, description: 'Spicy hot cinnamon drink.', price: 4, category: 'Coffee', quantityAvailable: 20, photos: ['https://www.1883.com/app/uploads/2024/08/hot-cinnamon.jpg'] },
  { name: 'Pear Lemonade', baristaId: barista1._id, description: 'Pear-flavored lemonade.', price: 3, category: 'Mojito', quantityAvailable: 45, photos: ['https://www.1883.com/app/uploads/2024/08/pear-lemonade.jpg'] },
  { name: 'Honey Iced Tea', baristaId: barista2._id, description: 'Sweet honey iced tea.', price: 4, category: 'IcedTea', quantityAvailable: 50, photos: ['https://www.1883.com/app/uploads/2024/08/honey-iced-tea.jpg'] },
  { name: 'Passion Fruit Iced Tea', baristaId: barista1._id, description: 'Passion fruit iced tea.', price: 4, category: 'IcedTea', quantityAvailable: 25, photos: ['https://www.1883.com/app/uploads/2024/08/passion-fruit-iced-tea.jpg'] },
  { name: 'Violet Iced Tea', baristaId: barista2._id, description: 'Floral violet iced tea.', price: 4, category: 'IcedTea', quantityAvailable: 30, photos: ['https://www.1883.com/app/uploads/2024/08/violet-iced-tea.jpg'] },
  { name: 'Peach Mint Cooler', baristaId: barista1._id, description: 'Peach and mint cooler.', price: 5, category: 'Mojito', quantityAvailable: 30, photos: ['https://www.1883.com/app/uploads/2024/08/peach-mint-cooler.jpg'] },
  { name: 'Mango Lemonade', baristaId: barista2._id, description: 'Mango-flavored lemonade.', price: 3, category: 'Mojito', quantityAvailable: 35, photos: ['https://www.1883.com/app/uploads/2024/08/mango-lemonade.jpg'] },
  { name: 'Caramel Macchiato', baristaId: barista1._id, description: 'Sweet caramel macchiato.', price: 6, category: 'Coffee', quantityAvailable: 40, photos: ['https://www.1883.com/app/uploads/2024/08/caramel-macchiato.jpg'] },
  { name: 'Strawberry', baristaId: barista2._id, description: 'Sweet strawberry drink.', price: 4, category: 'Mojito', quantityAvailable: 25, photos: ['https://www.1883.com/app/uploads/2024/08/strawberry-drink.jpg'] },
  { name: 'Mint Julep', baristaId: barista1._id, description: 'Classic mint julep.', price: 5, category: 'Mojito', quantityAvailable: 40, photos: ['https://www.1883.com/app/uploads/2024/08/mint-julep.jpg'] },
  { name: 'Ginger Ale', baristaId: barista2._id, description: 'Spicy ginger ale.', price: 4, category: 'Mojito', quantityAvailable: 20, photos: ['https://www.1883.com/app/uploads/2024/08/ginger-ale.jpg'] }
];

const savedBeverages = await Beverage.insertMany(beverages);
  // Sample Products linked with Recipes and Beverages
  const products = [

    // // بدي اضيفهم جديد 
    // { name: 'Ocean Spray Cranberry Syrup', description: '.', price: 10, category: 'Syrup' , photos: ['https://example.com/images/hazelnut_syrup.jpg'], bg: ['https://www.1883.com/app/uploads/2024/08/Cranberry_elements_18832.png'] , recipes: [savedRecipes[1]._id], beverages: [savedBeverages[1]._id] } ,
    // { name: 'CRANBERRY Syrup', description: '.', price: 10, category: 'Syrup' , photos: ['https://www.1883.com/app/uploads/2021/05/sirop_cranberry-1883_ps.png'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_cranberry-1883_bg.jpg'] , recipes: [savedRecipes[1]._id], beverages: [savedBeverages[1]._id] } ,
    // { name: 'HONEY Syrup', description: '.', price: 10, category: 'Syrup' , photos: ['https://www.1883.com/app/uploads/2024/06/1883_miel-1.png'], bg: ['https://www.1883.com/app/uploads/2024/06/Miel_elements_18832-1.jpg'] , recipes: [savedRecipes[1]._id], beverages: [savedBeverages[1]._id] } ,
    // { name: 'RED PASSION FRUIT', description: '.', price: 10, category: 'Syrup' , photos: [''], bg: [''] , recipes: [savedRecipes[1]._id], beverages: [savedBeverages[1]._id] } ,
    // { name: 'RED PASSION FRUIT', description: '.', price: 10, category: 'Syrup' , photos: [''], bg: [''] , recipes: [savedRecipes[1]._id], beverages: [savedBeverages[1]._id] } ,

    // // بدي اضيفهم جديد 

    { name: 'Curacao Syrup', description: 'Vibrant and sweet blue curacao syrup.', price: 10, category: 'Syrup', photos: ['https://www.1883.com/app/uploads/2021/05/sirop_curacao-bleu-1883-1.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_curacao-bleu-1883_bg-1.webp'], beverages: [savedBeverages[1]._id] },

    { name: 'Hazelnut Syrup', description: 'Nutty hazelnut syrup.', price: 10, category: 'Syrup',photos: ['https://www.1883.com/app/uploads/2021/05/sirop_noisette-sugar-free-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_noisette-sugar-free-1883_bg.webp'] ,  recipes: [savedRecipes[1]._id], beverages: [savedBeverages[1]._id] },
    { name: 'Honey Syrup', description: 'Sweet honey syrup.', price: 8, category: 'Syrup',photos: ['https://www.1883.com/app/uploads/2024/06/1883_miel-1.png'], bg: ['https://www.1883.com/app/uploads/2024/06/Miel_elements_18832-1.jpg'] , beverages: [savedBeverages[3]._id] , recipes: [savedRecipes[3]._id] },
    { name: 'Red Passion Fruit Syrup', description: 'Tart passion fruit syrup.', price: 9, category: 'Syrup',photos: ['https://www.1883.com/app/uploads/2021/12/1883-red-passion-fruit_syrup_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/12/1883-red-passion-fruit_syrup_bg.webp']  , beverages: [savedBeverages[3]._id] , beverages: [savedBeverages[4]._id] },
    { name: 'Orchid Syrup', description: 'Exotic orchid-flavored syrup with a unique floral taste.', price: 8, category: 'Syrup', photos: ['https://www.1883.com/app/uploads/2021/05/sirop_orchidee-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_orchidee-1883_bg-1.webp'], beverages: [savedBeverages[5]._id] },
    { name: 'Rose Syrup', description: 'Delicate rose-flavored syrup with floral notes.', price: 9, category: 'Syrup', photos: ['https://www.1883.com/app/uploads/2021/05/sirop_rose-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_rose-1883_bg.webp'], beverages: [savedBeverages[1]._id], recipes: [savedRecipes[1]._id] },

    {name: 'CRANBERRY Syrup', description: 'CRANBERRY', price: 10, category: 'Syrup' , photos: ['https://www.1883.com/app/uploads/2021/05/sirop_cranberry-1883_ps.png'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_cranberry-1883_bg.jpg'] , recipes: [savedRecipes[2]._id], beverages: [savedBeverages[1]._id] } ,
    { name: 'Violet Syrup', description: 'Floral violet syrup.', price: 7, category: 'Syrup',photos: ['https://www.1883.com/app/uploads/2021/05/sirop_violette-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/Sirop_Violette-1.webp'] ,  beverages: [savedBeverages[14]._id] },
    { name: 'Tarragon Syrup', description: 'Herbal tarragon syrup with a distinct, aromatic flavor.', price: 8, category: 'Syrup', photos: ['https://www.1883.com/app/uploads/2021/05/sirop_estragon-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_estragon-1883_bg.webp'], beverages: [savedBeverages[8]._id] },

    { name: 'Blackberry Syrup', description: 'Rich and sweet blackberry syrup.', price: 7, category: 'Syrup', photos: ['https://www.1883.com/app/uploads/2021/05/sirop_mure-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_mure-1883_bg-1.webp'], beverages: [savedBeverages[1]._id] },

    { name: 'Watermelon Syrup', description: 'Cool watermelon syrup.', price: 8, category: 'Syrup',photos: ['https://www.1883.com/app/uploads/2021/05/sirop_pasteque-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_pasteque-1883_bg-1.webp'] ,  beverages: [savedBeverages[7]._id] },
    { name: 'Orange Syrup', description: 'Citrus orange syrup.', price: 7, category: 'Syrup',photos: ['https://www.1883.com/app/uploads/2021/05/sirop_orange-1883-1.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_orange-1883_bg.webp'] ,  recipes: [savedRecipes[9]._id] } ,

    { name: 'Triple Sec Syrup', description: 'Citrus-flavored triple sec syrup, perfect for cocktails.', price: 9, category: 'Syrup', photos: ['https://www.1883.com/app/uploads/2021/05/sirop_triple-sec-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_triple-sec-1883_bg-1.webp'], beverages: [savedBeverages[1]._id], recipes: [savedRecipes[4]._id] },
    { name: 'Raspberry Syrup', description: 'Sweet and tangy raspberry syrup.', price: 7, category: 'Syrup', photos: ['https://www.1883.com/app/uploads/2021/05/sirop_framboise-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/Sirop_TheFramboise-1.webp'], beverages: [savedBeverages[1]._id], recipes: [savedRecipes[5]._id] },
    { name: 'Bubble Gum Syrup', description: 'Sweet bubble gum-flavored syrup, fun and nostalgic.', price: 6, category: 'Syrup', photos: ['https://www.1883.com/app/uploads/2021/05/sirop_bubble-gum-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_bubble-gum-1883_bg.webp'], beverages: [savedBeverages[8]._id] },
    
    { name: 'Iced Tea Peach Syrup', description: 'Peach-flavored iced tea syrup.', price: 6, category: 'Syrup',photos: ['https://www.1883.com/app/uploads/2021/05/sirop_the-peche-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_the-peche-1883_bg-1.webp'] ,  beverages: [savedBeverages[5]._id] },
    { name: 'Iced Tea Mango Syrup', description: 'Mango-flavored iced tea syrup.', price: 6, category: 'Syrup',photos: ['https://www.1883.com/app/uploads/2021/05/sirop_the-mangue-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_the-mangue-1883_bg-1.webp'] ,  beverages: [savedBeverages[17]._id] },
    { name: 'Iced Tea Raspberry Syrup', description: 'Raspberry-flavored iced tea syrup.', price: 6, category: 'Syrup',photos: ['https://www.1883.com/app/uploads/2021/05/sirop_the-framboise-1883_ps.webp'], bg: ['https://www.1883.com/app/uploads/2021/05/sirop_the-framboise-1883_bg-1.webp'] ,  beverages: [savedBeverages[6]._id] },

  ];

  await Product.insertMany(products);

  // Sample Reviews for Recipes and Beverages
  const reviews = [
    { userId: user1._id, recipeId: savedRecipes[0]._id, baristaId: barista1._id, rating: 5},
    { userId: user2._id, recipeId: savedRecipes[1]._id, baristaId: barista2._id, rating: 4 },
    { userId: user1._id, recipeId: savedRecipes[2]._id, baristaId: barista1._id, rating: 5},
    { userId: user2._id, beverageId: savedBeverages[0]._id, baristaId: barista1._id, rating: 5 },
    { userId: user1._id, beverageId: savedBeverages[4]._id, baristaId: barista2._id, rating: 4 }
  ];

  await Review.insertMany(reviews);

  // Sample Orders
  const orders = [
    { userId: user1._id, baristaId: barista1._id, beverageId: savedBeverages[0]._id, quantity: 2, totalPrice: 10, deliveryAddress: '123 Coffee St.' },
    { userId: user2._id, baristaId: barista2._id, beverageId: savedBeverages[1]._id, quantity: 1, totalPrice: 6, deliveryAddress: '456 Tea Ave.' }
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