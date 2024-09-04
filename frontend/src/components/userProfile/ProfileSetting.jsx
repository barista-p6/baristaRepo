import React, { useState } from 'react';

const ProfileSettings = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: 'Coffee Lover', // Initial value can be fetched from a user context or API
    email: 'coffeelover@example.com', // Initial value
    password: '', // Don't populate passwords for security reasons
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated data to your backend
    console.log('Updated Profile:', formData);
  };

  return (
    <div className="bg-[#5D4037] p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#EFEBE9] text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#EFEBE9] text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#EFEBE9] text-black"
            placeholder="Enter new password"
          />
        </div>
        <button
          type="submit"
          className="bg-[#8D6E63] hover:bg-[#795548] text-white py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
