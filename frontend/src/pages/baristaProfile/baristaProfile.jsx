import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Mail, Phone, Edit, FileText, User, Coffee, Camera } from 'lucide-react';

const BaristaProfile = () => {
  const [barista, setBarista] = useState(null);
  const [editing, setEditing] = useState({
    bio: false,
    phone: false,
    username: false,
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/barista-auth/profile`,
        { withCredentials: true }
      );
      setBarista(response.data.profile);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleEdit = (field) => {
    setEditing({ ...editing, [field]: true });
  };

  const handleSave = async (field) => {
    setEditing({ ...editing, [field]: false });
    try {
      let endpoint = `http://localhost:3000/api/barista-auth/profile`;
      let data = { [field]: barista[field] };

      if (field === 'username') {
        endpoint = `http://localhost:3000/api/barista-auth/update-username`;
        data = { username: barista.baristaId.username };
      }

      const response = await axios.put(endpoint, data, { withCredentials: true });
      console.log(`Saved ${field}:`, response.data);

      if (field === 'username') {
        setBarista(prevState => ({
          ...prevState,
          baristaId: {
            ...prevState.baristaId,
            username: response.data.username
          }
        }));
      } else {
        setBarista(prevState => ({
          ...prevState,
          [field]: response.data[field]
        }));
      }
    } catch (error) {
      console.error(`Error saving ${field}:`, error);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const response = await axios.put(
        'http://localhost:3000/api/barista-auth/update-profile-image',
        formData,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      );

      setBarista(prevState => ({
        ...prevState,
        profileImage: response.data.profileImage
      }));
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  if (!barista) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-amber-700 p-8 text-white relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden relative group">
                <img 
                  src={`http://localhost:3000/${barista.profileImage}`} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => fileInputRef.current.click()} className="text-white">
                    <Camera size={24} />
                  </button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center space-x-3">
                  {editing.username ? (
                    <input 
                      type="text" 
                      value={barista.baristaId.username} 
                      onChange={(e) => setBarista(prevState => ({
                        ...prevState,
                        baristaId: {
                          ...prevState.baristaId,
                          username: e.target.value
                        }
                      }))}
                      className="text-4xl font-bold bg-transparent border-b border-white"
                    />
                  ) : (
                    <h1 className="text-4xl font-bold">{barista.baristaId.username}</h1>
                  )}
                  {editing.username ? (
                    <button onClick={() => handleSave('username')} className="text-white hover:text-gray-200">Save</button>
                  ) : (
                    <button onClick={() => handleEdit('username')} className="text-white hover:text-gray-200">
                      <Edit size={18} />
                    </button>
                  )}
                </div>
                <p className="text-xl mt-2">Professional Barista</p>
              </div>
            </div>
            <Link 
              to="/BaristaADashboard" 
              className="mt-4 md:mt-0 bg-white text-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-amber-100 transition duration-300 flex items-center space-x-2"
            >
              <Coffee size={20} />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={20} />
                  <span>{barista.baristaId.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} />
                    {editing.phone ? (
                      <input 
                        type="tel" 
                        value={barista.phone} 
                        onChange={(e) => setBarista({...barista, phone: e.target.value})}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      <span>{barista.phone}</span>
                    )}
                  </div>
                  {editing.phone ? (
                    <button onClick={() => handleSave('phone')} className="text-amber-500 hover:text-amber-600">Save</button>
                  ) : (
                    <button onClick={() => handleEdit('phone')} className="text-gray-500 hover:text-gray-600">
                      <Edit size={18} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  {editing.bio ? (
                    <textarea 
                      value={barista.bio} 
                      onChange={(e) => setBarista({...barista, bio: e.target.value})}
                      className="w-full border rounded p-2"
                      rows="4"
                    />
                  ) : (
                    <p>{barista.bio}</p>
                  )}
                </div>
                <div className="ml-4">
                  {editing.bio ? (
                    <button onClick={() => handleSave('bio')} className="text-amber-500 hover:text-amber-600">Save</button>
                  ) : (
                    <button onClick={() => handleEdit('bio')} className="text-gray-500 hover:text-gray-600">
                      <Edit size={18} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Culinary School</h2>
              <div className="flex items-center space-x-3">
                <FileText size={20} />
                <a 
                  href={`http://localhost:3000/${barista.culinarySchool}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-600 underline"
                >
                  View Certificate
                </a>
              </div>
            </div>

            {barista.portfolio && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
                <div className="flex items-center space-x-3">
                  <FileText size={20} />
                  <a 
                    href={`http://localhost:3000/${barista.portfolio}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-600 underline"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Application Status</h2>
              <div className="flex items-center space-x-3">
                <User size={20} />
                <span className="capitalize">{barista.applicationStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaristaProfile;