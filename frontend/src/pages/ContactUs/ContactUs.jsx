import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact",
        formData
      );
      setSuccessMessage("Your message has been sent successfully!");
      setErrorMessage("");
      setFormData({
        username: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage("Failed to send your message. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-brown-100 to-brown-200">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md transform hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-3xl font-bold mb-6 text-brown-800 text-center">
            Contact Barista
          </h2>
          {successMessage && (
            <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {errorMessage}
            </div>
          )}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-brown-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-brown-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-brown-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-brown-600 text-black py-2 px-4 rounded-md hover:bg-brown-700 transition-colors duration-300 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
