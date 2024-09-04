require('dotenv').config(); 
const express = require('express');

const mongoose = require('mongoose');
const userProfileRoutes = require('./routes/userProfile')

const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());

const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require('./routes/productRoutes')
const wishListRoute = require('./routes/wishListRoute')


// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true 
}));
// ---------------------------------------------------------------
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// -----------------------------------------------------------





const userRoutes = require('./routes/users')
app.use("/api/users", userRoutes);

const baristaAuthRoutes= require('./routes/baristaAuthRoutes')
app.use('/api/barista-auth', baristaAuthRoutes);


// Tasneem Routes 
app.use("/api" , productRoutes )
app.use("/api" , userProfileRoutes )
app.use('/api' ,wishListRoute )




app.use("/api/admin", adminRoutes);




// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
