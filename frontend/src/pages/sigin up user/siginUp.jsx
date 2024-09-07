import { useState } from "react";
import axios from "axios";
import siginUser from "./../../assets/images/siginUser.jpg";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function RegisterUser() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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
        const { username, email, password, confirmPassword } = formData;

        if (!username || !email || !password || !confirmPassword) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        try {
            await axios.post(
                "http://localhost:3000/api/users/register/user",
                {
                    username,
                    email,
                    password,
                    confirmPassword,
                },
                { withCredentials: true }
            );

            navigate('/');
        } catch (error) {
            setErrorMessage(
                "Error registering barista: " + error.response.data.message
            );
        }
    };

    return (
        <motion.div 
            className="min-h-screen flex items-center justify-center bg-cover bg-center" 
            style={{ backgroundImage: `url(${siginUser})` }} // تعيين الصورة كخلفية
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative w-full max-w-md bg-[#F6F2EF]/30 backdrop-blur-lg py-6 px-6 sm:px-16 shadow-lg rounded-xl">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="mb-6">
                        <h3 className="text-gray-800 text-2xl font-bold text-center">
                            Create an account for User
                        </h3>
                    </div>

                    {errorMessage && (
                        <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
                    )}

                    <div className="space-y-6">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Name</label>
                            <input
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                placeholder="Enter name"
                            />
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
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

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
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

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                placeholder="Confirm password"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-[#E1BB94] hover:bg-[#C8A67D] focus:outline-none"
                        >
                            Create an account
                        </button>
                    </div>

                    <p className="text-gray-800 text-sm mt-6 text-center">
                        Already have an account?{" "}
                        <a
                            href="/LoginUser"
                            className="text-blue-600 font-semibold hover:underline ml-1"
                        >
                            Login here
                        </a>
                    </p>
                </form>
            </div>
        </motion.div>
    );
}

export default RegisterUser;
