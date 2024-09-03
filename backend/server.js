require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});





// Middleware
app.use(express.json());


app.use("/api/admin", adminRoutes);




// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
