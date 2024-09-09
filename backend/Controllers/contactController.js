const Contact = require("../model/Contact");

exports.createContact = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    // Create a new contact
    const contact = new Contact({
      username,
      email,
      message,
    });

    // Save the contact to the database
    await contact.save();

    res.status(201).json({
      success: true,
      data: contact,
      message: "Contact information saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving contact information",
      error: error.message,
    });
  }
};

exports.getContactMessages = async (req, res) => {
  try {
    // Get the page number and limit from query parameters
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 9;

    // Calculate the number of messages to skip
    const skip = (page - 1) * limit;

    // Get the total number of messages
    const totalMessages = await Contact.countDocuments();

    // Find the messages for the current page
    const messages = await Contact.find()
      .skip(skip)
      .limit(limit);

    // Calculate total pages
    const totalPages = Math.ceil(totalMessages / limit);

    res.status(200).json({
      success: true,
      data: messages,
      totalPages, // Include totalPages in the response
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching contact messages",
      error: error.message,
    });
  }
};
