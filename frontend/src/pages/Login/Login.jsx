import { useState } from "react";
import axios from "axios";
import loginBarista from "./../../assets/images/loginBarista.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import bg from "../../assets/bg-login.jpg"

function LoginBarista() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [applicationStatus, setApplicationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    if (!email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }
  
    try {
      await axios.post(
        "http://localhost:3000/api/users/login/cheif",
        { email, password },
        { withCredentials: true }
      );
  
      try {
        const statusResponse = await axios.get(
          "http://localhost:3000/api/barista-auth/status",
          { withCredentials: true }
        );
  
        const applicationStatus = statusResponse.data.applicationStatus;
        console.log("Application Status:", applicationStatus); // تأكد من القيمة هنا
  
        if (applicationStatus === "pending") {
          Swal.fire({
            title: "Your application is pending",
            text: "Your profile is under review. You will be notified once the review is complete.",
            icon: "info",
            confirmButtonText: "OK",
          });
        } else if (applicationStatus === "Accept") {
          navigate("/");
        } else if (applicationStatus === "Reject") {
          Swal.fire({
            icon: "error",
            title: "Application Rejected",
            text: "Your application has been rejected.",
          });
        } else if (applicationStatus === null || applicationStatus === undefined) {
          navigate("/ProfileAuth");
        } else {
          console.warn("Unexpected application status:", applicationStatus);
        }
      } catch (statusError) {
        navigate("/ProfileAuth"); 
      }
    } catch (loginError) {
      // التعامل مع أخطاء تسجيل الدخول
      console.error("Login Error:", loginError); 
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: "Error logging in: " + (loginError.response?.data?.message || loginError.message),
      });
    }
  };
  
  
  

  return (
    <motion.div
      className="bg-[#E5E7EB]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-[sans-serif] bg-black flex w-screen h-screen justify-center items-center mx-auto md:h-screen p-4">
        <div className="grid md:grid-cols-[3fr_2fr] w-3/5 h-2/3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`, // Replace with the direct URL to your image
          backgroundPosition: "center",
          backgroundSize: "cover", // Change to "contain" if you want the whole image to be visible
          backgroundRepeat: "no-repeat",
        }} >
        <form
  className="w-full h-full  py-6 px-6 sm:px-16 flex flex-col justify-center"

  onSubmit={handleSubmit}
>
 
            <div className="mb-6">
              <h3 className="text-2xl text-white font-bold">
                Login as Barista
              </h3>
            </div>

            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}

            <div className="space-y-6">
              <div>
                <label className="text-white text-sm mb-2 block">
                  Email Id
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter password"
                  />
                </div>
              </div>
            </div>

            <div className="!mt-12">
              <button
                type="submit"
                className="w-full py-3 px-4 tracking-wider text-white text-sm rounded-md  bg-[#73122e]  hover:bg-[#841535] focus:outline-none"
              >
                Login
              </button>
            </div>

            <p className="text-white text-sm mt-6 text-center">
              Don't have an account?{" "}
              <a
                href="/RegisterBarista"
                className="text-gray-200 font-semibold hover:underline ml-1"
              >
                Register here
              </a>
            </p>
          </form>

          <div className="relative flex justify-center items-center w-full h-full ">
            <img
              src='https://www.1883.com/app/uploads/2024/08/Cranberry_elements_1883_v2-1.webp'
              alt="Login Barista"
              className="absolute w-1/2 h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginBarista;
