import React from 'react';
import { ShoppingBag, Heart, Star, Image, User } from 'lucide-react';

const ProfileInf = ({ setActiveSection }) => {
  return (
    <div className="w-1/4 bg-[#6D4C41] p-4 border-r">
      <div className="flex flex-col items-center mb-6">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-xl font-bold text-white">Coffee Lover</h1>
        <p className="text-[#D7CCC8]">Member since 2023</p>
      </div>
      <nav>
        <ul className="space-y-2">
          <li><a href="#" onClick={() => setActiveSection('Orders')} className="flex items-center space-x-2 p-2 hover:bg-[#5D4037] rounded"><ShoppingBag size={20} className="text-[#8D6E63]" /><span className="text-[#EFEBE9]">Orders</span></a></li>
          <li><a href="#" onClick={() => setActiveSection('Wishlist')} className="flex items-center space-x-2 p-2 hover:bg-[#5D4037] rounded"><Heart size={20} className="text-[#D32F2F]" /><span className="text-[#EFEBE9]">Wishlist</span></a></li>
          <li><a href="#" onClick={() => setActiveSection('Reviews')} className="flex items-center space-x-2 p-2 hover:bg-[#5D4037] rounded"><Star size={20} className="text-[#FFD700]" /><span className="text-[#EFEBE9]">Reviews</span></a></li>
          <li><a href="#" onClick={() => setActiveSection('Saved Pictures')} className="flex items-center space-x-2 p-2 hover:bg-[#5D4037] rounded"><Image size={20} className="text-[#8BC34A]" /><span className="text-[#EFEBE9]">Saved Pictures</span></a></li>
          <li><a href="#" onClick={() => setActiveSection('Profile Settings')} className="flex items-center space-x-2 p-2 hover:bg-[#5D4037] rounded"><User size={20} className="text-[#29B6F6]" /><span className="text-[#EFEBE9]">Profile Settings</span></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileInf;
