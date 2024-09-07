import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import contactImage from "../../assets/images/loginBarista.jpg";

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
             <div className="bg-[#F5E6D3] min-h-screen">
               <div className="font-[sans-serif] max-w-6xl flex items-center mx-auto md:h-screen p-4">
                 <div className="grid md:grid-cols-[3fr_2fr] items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
                   <form
                     onSubmit={handleSubmit}
                     className="w-full h-full bg-[#FFF8E7] py-6 px-6 sm:px-16 flex flex-col justify-center"
                   >
                     <div className="mb-6">
                       <h3 className="text-[#8B4513] text-2xl font-bold">
                         Contact Barista
                       </h3>
                     </div>

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

                     <div className="space-y-6">
                       <div>
                         <label className="text-[#8B4513] text-sm mb-2 block">
                           Username
                         </label>
                         <div className="relative flex items-center">
                           <input
                             type="text"
                             name="username"
                             value={formData.username}
                             onChange={handleChange}
                             required
                             className="text-[#8B4513] bg-white border border-[#D2B48C] w-full text-sm px-4 py-2.5 rounded-md focus:outline-[#CD853F]"
                             placeholder="Enter username"
                           />
                         </div>
                       </div>

                       <div>
                         <label className="text-[#8B4513] text-sm mb-2 block">
                           Email
                         </label>
                         <div className="relative flex items-center">
                           <input
                             type="email"
                             name="email"
                             value={formData.email}
                             onChange={handleChange}
                             required
                             className="text-[#8B4513] bg-white border border-[#D2B48C] w-full text-sm px-4 py-2.5 rounded-md focus:outline-[#CD853F]"
                             placeholder="Enter email"
                           />
                         </div>
                       </div>

                       <div>
                         <label className="text-[#8B4513] text-sm mb-2 block">
                           Message
                         </label>
                         <div className="relative flex items-center">
                           <textarea
                             name="message"
                             value={formData.message}
                             onChange={handleChange}
                             required
                             rows="4"
                             className="text-[#8B4513] bg-white border border-[#D2B48C] w-full text-sm px-4 py-2.5 rounded-md focus:outline-[#CD853F]"
                             placeholder="Enter your message"
                           ></textarea>
                         </div>
                       </div>
                     </div>

                     <div className="!mt-12">
                       <button
                         type="submit"
                         className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-[#8B4513] hover:bg-[#A0522D] focus:outline-none"
                       >
                         Send Message
                       </button>
                     </div>
                   </form>

                   <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-[#8B4513] to-[#D2B48C]">
                     <img
                       src={contactImage}
                       alt="Contact Barista"
                       className="w-full h-full object-cover opacity-80"
                     />
                   </div>
                 </div>
               </div>
             </div>
             <Footer />
           </>
         );   
};

export default ContactUsPage;
