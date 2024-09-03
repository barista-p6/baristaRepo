require('dotenv').config(); 
const express = require('express');
const cors = require("cors");

const mongoose = require('mongoose');
const adminRoutes = require("./routes/adminRoutes");






const productRoutes = require('./routes/productRoutes')

const app = express();

const port = process.env.PORT || 3000;
app.use(cors());






// middleware 

app.use(express.json());






// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});






app.use("/api/admin", adminRoutes);

// Routes

const userRoutes = require('./routes/users')
app.use("/api/users", userRoutes);


// Tasneem Routes 
app.use("/api" , productRoutes )






app.use("/api/admin", adminRoutes);




// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
