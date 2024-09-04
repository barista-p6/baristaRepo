const express = require("express");
const router = express.Router();
const User = require('../model/users') 





router.get('/User', async (req, res) => {
        const users = await User.find(); 
        res.json(users);
});




module.exports = router;


