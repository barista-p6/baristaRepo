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
    // Users
    const user1 = await User.findOneAndUpdate(
      { email: 'john@example.com' },
      {
        username: 'john_doe',
        bio: 'Coffee enthusiast.',
        socialLinks: {
          facebook: 'https://facebook.com/johndoe',
          instagram: 'https://instagram.com/johndoe',
          twitter: 'https://twitter.com/johndoe'
        }
      },
      { upsert: true, new: true, strict: false } // Allow additional paths to be set
    );

    const user2 = await User.findOneAndUpdate(
      { email: 'jane@example.com' },
      {
        username: 'jane_doe',
        bio: 'Loves making new recipes.'
      },
      { upsert: true, new: true, strict: false }
    );

    // Baristas
    const barista1 = await Barista.findOneAndUpdate(
      { email: 'barista_john@example.com' },
      {
        username: 'barista_john',
        bio: 'Expert in brewing and mixing flavors.'
      },
      { upsert: true, new: true, strict: false }
    );

    const barista2 = await Barista.findOneAndUpdate(
      { email: 'barista_jane@example.com' },
      {
        username: 'barista_jane',
        bio: 'Passionate about crafting beverages.'
      },
      { upsert: true, new: true, strict: false }
    );

    // Products
    const product1 = await Product.findOneAndUpdate(
      { name: 'Vanilla Syrup' },
      {
        description: 'Rich vanilla syrup for flavoring drinks.',
        price: 12.99,
        category: 'Syrup'
      },
      { upsert: true, new: true, strict: false }
    );

    const product2 = await Product.findOneAndUpdate(
      { name: 'Hazelnut Syrup' },
      {
        description: 'Nutty hazelnut syrup for coffee and desserts.',
        price: 14.99,
        category: 'Syrup'
      },
      { upsert: true, new: true, strict: false }
    );

    // Beverages
    const beverage1 = await Beverage.findOneAndUpdate(
      { name: 'Vanilla Latte' },
      {
        baristaId: barista1._id,
        description: 'Creamy latte with a hint of vanilla.',
        price: 4.99,
        quantityAvailable: 20,
        products: [product1._id]
      },
      { upsert: true, new: true, strict: false }
    );

    const beverage2 = await Beverage.findOneAndUpdate(
      { name: 'Hazelnut Mocha' },
      {
        baristaId: barista2._id,
        description: 'Chocolate mocha with hazelnut syrup.',
        price: 5.49,
        quantityAvailable: 15,
        products: [product2._id]
      },
      { upsert: true, new: true, strict: false }
    );

    // The rest of your seed logic goes here

    console.log('Data successfully seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
}

seed();
