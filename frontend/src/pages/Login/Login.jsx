// import { useState } from "react";
// import axios from "axios";
// import loginBarista from "./../../assets/images/loginBarista.jpg";
// import { useNavigate } from 'react-router-dom';

// function LoginBarista() {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });
//     const [errorMessage, setErrorMessage] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { email, password } = formData;

//         if (!email || !password) {
//             setErrorMessage("All fields are required.");
//             return;
//         }

//         try {
//             const response = await axios.post(
//                 "http://localhost:3000/api/users/login/cheif",
//                 { email, password },
//                 { withCredentials: true }
//             );

//             navigate('/ProfileAuth');
//             setErrorMessage("");
//         } catch (error) {
//             setErrorMessage(
//                 "Error logging in: " + error.response.data.message
//             );
//         }
//     };

//     return (
//         <div className="bg-[#E5E7EB]">
//             <div className="font-[sans-serif] max-w-6xl flex items-center mx-auto md:h-screen p-4">
//                 <div className="grid md:grid-cols-[2fr_3fr] items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden transition-transform duration-500 ease-in-out transform">
//                     <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-gray-900 to-gray-700">
//                         <img
//                             src={loginBarista}
//                             alt="Login Barista"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     <form
//                         className="w-full h-full bg-[#F6F2EF] py-6 px-6 sm:px-16 flex flex-col justify-center"
//                         onSubmit={handleSubmit}
//                     >
//                         <div className="mb-6">
//                             <h3 className="text-gray-800 text-2xl font-bold">
//                                 Login for Barista
//                             </h3>
//                         </div>

//                         {errorMessage && (
//                             <p className="text-red-500 mb-4">{errorMessage}</p>
//                         )}
//                         {successMessage && (
//                             <p className="text-green-500 mb-4">{successMessage}</p>
//                         )}

//                         <div className="space-y-6">
//                             <div>
//                                 <label className="text-gray-800 text-sm mb-2 block">
//                                     Email Id
//                                 </label>
//                                 <div className="relative flex items-center">
//                                     <input
//                                         name="email"
//                                         type="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         required
//                                         className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
//                                         placeholder="Enter email"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="text-gray-800 text-sm mb-2 block">
//                                     Password
//                                 </label>
//                                 <div className="relative flex items-center">
//                                     <input
//                                         name="password"
//                                         type="password"
//                                         value={formData.password}
//                                         onChange={handleChange}
//                                         required
//                                         className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
//                                         placeholder="Enter password"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="!mt-12">
//                             <button
//                                 type="submit"
//                                 className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-[#E1BB94] hover:bg-[#C8A67D] focus:outline-none"
//                             >
//                                 Login
//                             </button>
//                         </div>

//                         <p className="text-gray-800 text-sm mt-6 text-center">
//                             Don't have an account?{" "}
//                             <a
//                                 href="/RegisterBarista"
//                                 className="text-blue-600 font-semibold hover:underline ml-1"
//                             >
//                                 Register here
//                             </a>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginBarista;


import { useState } from "react";
import axios from "axios";
import loginBarista from "./../../assets/images/loginBarista.jpg";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function LoginBarista() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

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

            navigate('/ProfileAuth');
        } catch (error) {
            setErrorMessage(
                "Error logging in: " + error.response.data.message
            );
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
            <div className="font-[sans-serif] max-w-6xl flex items-center mx-auto md:h-screen p-4">
                <div className="grid md:grid-cols-[3fr_2fr] items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
                    <form
                        className="w-full h-full bg-[#F6F2EF] py-6 px-6 sm:px-16 flex flex-col justify-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-6">
                            <h3 className="text-gray-800 text-2xl font-bold">
                                Login as Barista
                            </h3>
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 mb-4">{errorMessage}</p>
                        )}

                        <div className="space-y-6">
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
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
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
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
                                className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-[#E1BB94] hover:bg-[#C8A67D] focus:outline-none"
                            >
                                Login
                            </button>
                        </div>

                        <p className="text-gray-800 text-sm mt-6 text-center">
                            Don't have an account?{" "}
                            <a
                                href="/RegisterBarista"
                                className="text-blue-600 font-semibold hover:underline ml-1"
                            >
                                Register here
                            </a>
                        </p>
                    </form>

                    <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-gray-900 to-gray-700">
                        <img
                            src={loginBarista}
                            alt="Login Barista"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default LoginBarista;
