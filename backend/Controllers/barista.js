const Barista = require("../model/baristas");



exports.getBaristas = async (req, res) => {
  try {
    const baristas = await Barista.find(); // استرجاع جميع الباريستا
    res.json(baristas);
  } catch (error) {
    console.error("Error fetching baristas:", error); // تسجيل الخطأ
    res.status(500).json({ message: "Error fetching baristas" });
  }
};