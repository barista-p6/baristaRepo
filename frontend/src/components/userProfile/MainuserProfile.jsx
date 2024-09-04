import React, { useState } from 'react';
import { Coffee, Heart, Star, ShoppingBag, Image, User, CheckCircle, Gift, Clock } from 'lucide-react';
import ProfileInf from './ProfileInf';
import ProfileSettings from './ProfileSetting';

const BaristaUserProfile = () => {
  const [activeSection, setActiveSection] = useState('Orders');

  const renderSection = () => {
    switch (activeSection) {
      case 'Orders':
        return (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-white"><Clock size={24} className="mr-2 text-[#8D6E63]" />Recent Orders</h2>
            {/* Orders Table */}
            {/* ... */}
          </section>
        );
      case 'Wishlist':
        return (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-white"><Heart size={24} className="mr-2 text-[#D32F2F]" />Wishlist</h2>
            {/* Wishlist */}
            {/* ... */}
          </section>
        );
      case 'Profile Settings':
        return <ProfileSettings />;
      // Add more cases for other sections like Reviews, Saved Pictures, etc.
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F1E3D3] min-h-screen p-8">
      <div className="mx-auto bg-[#3E2723] rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <ProfileInf setActiveSection={setActiveSection} />

          {/* Main Content */}
          <div className="w-3/4 p-6">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaristaUserProfile;
