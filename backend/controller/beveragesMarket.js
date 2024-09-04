const Beverage = require("../model/beverages");

exports.getAllBeverages = async (res, req) => {
    try {
        const beverage = await Beverage.find({});
        res.send(beverage);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};