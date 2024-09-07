import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import ProfileForm from "./ProfileForm";
import ApplicationStatus from "./ApplicationStatus";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProfileAuth = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    phone: "",
    culinarySchool: null,
    bio: "",
    portfolio: null,
    recommendations: "",
  });
  const [errors, setErrors] = useState({});
  const [applicationStatus, setApplicationStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));

    if (name === "profileImage") {
      setProfileImage(files[0]);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.culinarySchool)
      newErrors.culinarySchool = "Culinary School is required";
    if (!formData.bio) newErrors.bio = "Bio is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  if (validateForm()) {
    try {
      const formDataToSend = new FormData();
      if (profileImage) formDataToSend.append("profileImage", profileImage);
      formDataToSend.append("phone", formData.phone);
      if (formData.culinarySchool)
        formDataToSend.append("culinarySchool", formData.culinarySchool);
      formDataToSend.append("bio", formData.bio);   
      if (formData.portfolio)
        formDataToSend.append("portfolio", formData.portfolio);
      formDataToSend.append("recommendations", formData.recommendations);

      const response = await axios.post(
        "http://localhost:3000/api/barista-auth/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true 
        }
      );
      
      console.log('Response:', response.data);
      setApplicationStatus("pending");
      navigate("/Login");
      Swal.fire({
        title: "Your application is pending",
        text: "Your profile is under review. You will be notified once the review is complete.",
        icon: "info",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
};


  return (
    <div className="bg-prime-white">
      <div className="container mx-auto p-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <div className="w-full max-w-4xl mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-prim-dark py-4 px-6">
            <h1 className="text-3xl font-bold text-center">
              Complete Your Chef Profile
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="p-6">
            <ProfileImage
              profileImage={profileImage}
              handleImageUpload={handleInputChange}
            />
            <ProfileForm
              formData={formData}
              errors={errors}
              handleInputChange={handleInputChange}
            />
            <ApplicationStatus applicationStatus={applicationStatus} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileAuth;
