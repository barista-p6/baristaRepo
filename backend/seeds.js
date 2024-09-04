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
    await User.deleteMany({});
    await Barista.deleteMany({});
    await Beverage.deleteMany({});
    await Comment.deleteMany({});
    await Ingredient.deleteMany({});
    await Order.deleteMany({});
    await Product.deleteMany({});
    await Recipe.deleteMany({});
    await Review.deleteMany({});
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
      username: 'obada',
      email: 'obada@example.com',
      password: 'password123',
      bio: 'Loves making new recipes.',
      socialLinks: {
        facebook: 'https://facebook.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        twitter: 'https://twitter.com/johndoe'
      }
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
  category: 'coffee',
  description: 'Rich vanilla syrup for flavoring drinks.',
  price: 12.99,
  
});

const product2 = await Product.create({
  name: 'Hazelnut Syrup',
  category: 'coffee',
  description: 'Nutty hazelnut syrup for coffee and desserts.',
  price: 14.99,
  
});

const product3 = await Product.create({
  name: 'OCEAN SPRAY CRANBERRY SYRUP',
  category: 'mojito',
  description: 'Ocean Spray’s fruit savoir-faire',
  price: 14.99,
});
const product4 = await Product.create({
  name: 'Honey Syrup',
  category: 'mojito',

  description: 'Sweet honey syrup for beverages.',
  price: 13.99,
  quantityAvailable: 25
});

const product5 = await Product.create({
  name: 'Red Passion Fruit Syrup',
  category: 'mojito',

  description: 'Tropical red passion fruit syrup for beverages.',
  price: 14.99,
  quantityAvailable: 20
});

const product6 = await Product.create({
  name: 'Violet Syrup',
  category: 'mojito',

  description: 'Delicate violet syrup for beverages.',
  price: 14.99,
  quantityAvailable: 30
});

const product7 = await Product.create({
  name: 'Iced Tea Peach Syrup',
  category: 'IcedTea',
  description: 'Peach syrup for iced tea beverages.',
  price: 12.99,
  quantityAvailable: 22
});

const product8 = await Product.create({
  name: 'Iced Tea Mango Syrup',
  category: 'IcedTea',
  description: 'Mango syrup for iced tea beverages.',
  price: 12.99,
  quantityAvailable: 18
});

const product9 = await Product.create({
  name: 'Iced Tea Raspberry Syrup',
  category: 'IcedTea',
  description: 'Raspberry syrup for iced tea beverages.',
  price: 12.99,
  quantityAvailable: 25
});

const product10 = await Product.create({
  name: 'Watermelon Syrup',
  category: 'Mojito',
  description: 'Refreshing watermelon syrup for beverages.',
  price: 14.99,
  quantityAvailable: 20
});

const product11 = await Product.create({
  name: 'Orange Syrup',
  category: 'Mojito',
  description: 'Zesty orange syrup for beverages.',
  price: 14.99,
  quantityAvailable: 15
});












     // Create Recipes
     const recipe1 = await Recipe.create({
      baristaId: barista1._id,
      name: 'Vanilla Syrup Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Mix sugar and water.' },
        { stepNumber: 2, description: 'Add vanilla extract.' },
        { stepNumber: 3, description: 'Simmer until thickened.' }
      ],
      cookingTime: '2 minutes', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'American',
      dietaryRestrictions: ['Vegetarian'],
      products: [product1._id]
    });
    
    const recipe2 = await Recipe.create({
      baristaId: barista2._id,
      name: 'Hazelnut Syrup Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Roast hazelnuts.' },
        { stepNumber: 2, description: 'Blend with syrup.' },
        { stepNumber: 3, description: 'Simmer until thickened.' }
      ],
      cookingTime: '3 minutes', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'European',
      dietaryRestrictions: ['Vegan'],
      products: [product2._id]
    });
    
    const recipe3 = await Recipe.create({
      baristaId: barista2._id,
      name: 'Cranberry Tonic Drink',
      preparation: [
        { stepNumber: 1, description: 'Simmer cranberries with water and sugar.' },
        { stepNumber: 2, description: 'Blend until smooth.' },
        { stepNumber: 3, description: 'Strain and bottle.' }
      ],
      cookingTime: '2 minutes', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'European',
      dietaryRestrictions: ['Vegan'],
      products: [product3._id]
    });
    
    const recipe4 = await Recipe.create({
      baristaId: barista1._id,
      name: 'Mint Mojito Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Blend mint leaves with sugar and water.' },
        { stepNumber: 2, description: 'Simmer until the flavor is infused.' }
      ],
      cookingTime: '1 minute', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'American',
      dietaryRestrictions: ['Vegan'],
      products: [product4._id]
    });
    
    const recipe5 = await Recipe.create({
      baristaId: barista1._id,
      name: 'Caramel Syrup Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Cook sugar until caramelized.' },
        { stepNumber: 2, description: 'Blend with water until smooth.' }
      ],
      cookingTime: '3 minutes', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'American',
      dietaryRestrictions: ['Vegetarian'],
      products: [product5._id]
    });
    
    const recipe6 = await Recipe.create({
      baristaId: barista2._id,
      name: 'Almond Syrup Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Blend almonds with sugar and water.' },
        { stepNumber: 2, description: 'Simmer until thickened.' }
      ],
      cookingTime: '2 minutes', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'European',
      dietaryRestrictions: ['Vegan'],
      products: [product6._id]
    });
    
    const recipe7 = await Recipe.create({
      baristaId: barista2._id,
      name: 'Cinnamon Syrup Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Simmer cinnamon sticks in water with sugar.' }
      ],
      cookingTime: '1 minute', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'American',
      dietaryRestrictions: ['Vegetarian'],
      products: [product7._id]
    });
    
    const recipe8 = await Recipe.create({
      baristaId: barista1._id,
      name: 'Ginger Syrup Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Simmer ginger slices with sugar and water.' }
      ],
      cookingTime: '2 minutes', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'Asian',
      dietaryRestrictions: ['Vegan'],
      products: [product8._id]
    });
    
    const recipe9 = await Recipe.create({
      baristaId: barista1._id,
      name: 'Maple Syrup Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Boil maple sap until thickened.' }
      ],
      cookingTime: '3 minutes', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'American',
      dietaryRestrictions: ['Vegetarian'],
      products: [product9._id]
    });
    
    const recipe10 = await Recipe.create({
      baristaId: barista2._id,
      name: 'Orange Syrup Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Simmer orange zest with sugar and water.' }
      ],
      cookingTime: '2 minutes', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'European',
      dietaryRestrictions: ['Vegan'],
      products: [product10._id]
    });
    
    const recipe11 = await Recipe.create({
      baristaId: barista2._id,
      name: 'Lavender Syrup Drink Mix',
      preparation: [
        { stepNumber: 1, description: 'Steep lavender flowers in boiling water with sugar.' }
      ],
      cookingTime: '1 minute', // Adjusted cooking time
      categories: ['Syrup', 'Flavoring'],
      cuisine: 'French',
      dietaryRestrictions: ['Vegetarian'],
      products: [product11._id]
    });

     // Create Beverages
     const beverage1 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Vanilla Latte',
      category: 'coffee',
      description: 'Creamy latte with a hint of vanilla.',
      price: 4.99,
      quantityAvailable: 20,
      products: [product1._id]
    });

    const beverage2 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Hazelnut Mocha',
      category: 'coffee',
      description: 'Chocolate mocha with hazelnut syrup.',
      price: 5.49,
      quantityAvailable: 15,
      products: [product2._id]
    });

    const beverage3 = await Beverage.create({
      baristaId: barista2._id,
      name: 'CRANBERRY TONIC',
      category: 'mojito',
      description: 'A refreshingly fruity and tangy long drink with a faintly bitter edge. ',
      price: 5.49,
      quantityAvailable: 14,
      products: [product3._id]
    });

    const beverage4 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Honey Lemonade',
      category: 'mojito',

      description: 'Honey Syrup with lemon juice and water.',
      price: 4.99,
      quantityAvailable: 20,
      products: [product4._id]
    });
    
    const beverage5 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Passion Fruit Mojito',
      category: 'mojito',

      description: 'Red Passion Fruit Syrup with fresh mint, lemon juice, and soda.',
      price: 5.99,
      quantityAvailable: 12,
      products: [product3._id]
    });
    
    const beverage6 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Peach Iced Tea',
      
      category: 'IcedTea',
      description: 'Iced Tea Peach Syrup with iced black tea and peach slices.',
      price: 5.49,
      quantityAvailable: 14,
      products: [product6._id]
    });
    
    const beverage7 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Raspberry Iced Tea',
      category: 'IcedTea',
      description: 'Iced Tea Raspberry Syrup with iced black tea and fresh raspberries.',
      price: 5.69,
      quantityAvailable: 14,
      products: [product4._id]
    });
    
    const beverage8 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Watermelon Cooler',
      category: 'mojito',

      description: 'Watermelon Syrup with lemon juice and soda.',
      price: 5.49,
      quantityAvailable: 15,
      products: [product4._id]
    });
    
    const beverage9 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Almond Coffee',
      category: 'coffee',

      description: 'Almond Syrup with freshly brewed coffee.',
      price: 4.99,
      quantityAvailable: 20,
      products: [product5._id]
    });
    
    const beverage10 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Blueberry Lemonade',
      category: 'mojito',

      description: 'Blueberry Syrup with lemon juice and sparkling water.',
      price: 5.29,
      quantityAvailable: 14,
      products: [product5._id]
    });
    
    const beverage11 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Raspberry Cooler',
      category: 'mojito',

      description: 'Raspberry Syrup with lemon juice and soda.',
      price: 4.99,
      quantityAvailable: 20,
      products: [product6._id]
    });
    
    const beverage12 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Hot Cinnamon ',
      category: 'coffee',

      description: 'Cinnamon Syrup with rich hot coffee .',
      price: 4.99,
      quantityAvailable: 18,
      products: [product6._id]
    });
    
    const beverage13 = await Beverage.create({
      baristaId: barista1._id,
      name: 'Pear Lemonade',
      category: 'mojito',

      description: 'Pear Syrup with fresh lemon juice and sparkling water.',
      price: 5.49,
      quantityAvailable: 16,
      products: [product7._id]
    });
    
    const beverage14 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Honey Iced Tea',
      category: 'IcedTea',
      description: 'Honey Syrup with iced black tea and lemon slices.',
      price: 5.49,
      quantityAvailable: 15,
      products: [product7._id]
    });
    
    const beverage15 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Passion Fruit Iced Tea',
      category: 'IcedTea',
      description: 'Red Passion Fruit Syrup with iced black tea.',
      price: 5.29,
      quantityAvailable: 18,
      products: [product8._id]
    });
    
    const beverage16 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Violet Iced Tea',
      category: 'IcedTea',
      description: 'Violet Syrup with iced green tea.',
      price: 5.29,
      quantityAvailable: 16,
      products: [product8._id]
    });
    
    const beverage17 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Peach Mint Cooler',
      description: 'Peach Syrup with fresh mint, lemon juice, and soda.',
      price: 5.79,
      quantityAvailable: 13,
      products: [product9._id]
    });
    
    const beverage18 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Mango Lemonade',
      category: 'mojito',

      description: ' Mango & lemon juice and sparkling water.',
      price: 5.49,
      quantityAvailable: 18,
      products: [product9._id]
    });
    
    const beverage19 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Caramel Macchiato',
      category: 'coffee',

      description: 'Caramel Syrup with espresso and steamed milk.',
      price: 5.79,
      quantityAvailable: 18,
      products: [product10._id]
    });
    
    const beverage20 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Strawberry ',
      category: 'mojito',

      description: 'Strawberry Syrup mix with ice and milk.',
      price: 5.49,
      quantityAvailable: 16,
      products: [product10._id]
    });
    
    const beverage21 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Mint Julep',
      category: 'mojito',

      description: 'Mint Syrup with bourbon, fresh mint, and soda.',
      price: 6.49,
      quantityAvailable: 12,
      products: [product11._id]
    });
    
    const beverage22 = await Beverage.create({
      baristaId: barista2._id,
      name: 'Ginger Ale',
      category: 'mojito',

      description: 'Ginger Syrup with sparkling water and lime.',
      price: 5.29,
      quantityAvailable: 15,
      products: [product11._id]
    });
    
    
    // Update Products with Recipes
await Product.findByIdAndUpdate(product1._id, { recipes: [recipe1._id] });
await Product.findByIdAndUpdate(product2._id, { recipes: [recipe2._id] });
await Product.findByIdAndUpdate(product3._id, { recipes: [recipe3._id] });
await Product.findByIdAndUpdate(product4._id, { recipes: [recipe4._id] });
await Product.findByIdAndUpdate(product5._id, { recipes: [recipe5._id] });
await Product.findByIdAndUpdate(product6._id, { recipes: [recipe6._id] });
await Product.findByIdAndUpdate(product7._id, { recipes: [recipe7._id] });
await Product.findByIdAndUpdate(product8._id, { recipes: [recipe8._id] });
await Product.findByIdAndUpdate(product9._id, { recipes: [recipe9._id] });
await Product.findByIdAndUpdate(product10._id, { recipes: [recipe10._id] });
await Product.findByIdAndUpdate(product11._id, { recipes: [recipe11._id] });
       
        // Update Products with Beverages
 await Product.findByIdAndUpdate( { beverages: [beverage1._id] });
 await Product.findByIdAndUpdate( { beverages: [beverage2._id] });
 await Product.findByIdAndUpdate( { beverages: [ beverage3._id, beverage5._id, beverage6._id] });
 await Product.findByIdAndUpdate( { beverages: [ beverage4._id ,beverage7._id, beverage8._id] });
 await Product.findByIdAndUpdate({ beverages: [beverage9._id, beverage10._id] });
 await Product.findByIdAndUpdate( { beverages: [beverage11._id, beverage12._id] });
 await Product.findByIdAndUpdate( { beverages: [beverage13._id, beverage14._id] });
 await Product.findByIdAndUpdate( { beverages: [beverage15._id, beverage16._id] });
 await Product.findByIdAndUpdate( { beverages: [beverage17._id, beverage18._id] });
 await Product.findByIdAndUpdate( { beverages: [beverage19._id, beverage20._id] });
 await Product.findByIdAndUpdate( { beverages: [beverage21._id, beverage22._id] });
 
 
   
    

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