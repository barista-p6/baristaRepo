// import React, { useState } from 'react';

// const BaristaHeader = ({ name, avatar }) => (
//   <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
//     <img src={avatar || "/api/placeholder/100/100"} alt="Barista Avatar" className="w-16 h-16 rounded-full" />
//     <div>
//       <h1 className="text-2xl font-bold">{name || "Barista Name"}</h1>
//       <p className="text-gray-600">Professional Barista</p>
//     </div>
//   </div>
// );

// const TabButton = ({ icon: Icon, label, isActive, onClick }) => (
//   <button 
//     className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
//       isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//     }`}
//     onClick={onClick}
//   >
//     <Icon className="w-5 h-5" />
//     <span>{label}</span>
//   </button>
// );

// const SalesOverview = () => (
//   <div className="bg-white p-6 rounded-lg shadow-md">
//     <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
//     <div className="grid grid-cols-2 gap-4">
//       <div className="flex items-center space-x-2">
//         <span className="text-2xl">☕</span>
//         <div>
//           <p className="text-sm font-medium">Total Beverages Sold</p>
//           <p className="text-2xl font-bold">1,234</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <span className="text-2xl">👥</span>
//         <div>
//           <p className="text-sm font-medium">Number of Customers</p>
//           <p className="text-2xl font-bold">567</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <span className="text-2xl">🍽️</span>
//         <div>
//           <p className="text-sm font-medium">Shared Recipes</p>
//           <p className="text-2xl font-bold">89</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <span className="text-2xl">💰</span>
//         <div>
//           <p className="text-sm font-medium">Total Sales</p>
//           <p className="text-2xl font-bold">$9,876</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const RecentOrders = () => (
//   <div className="bg-white p-6 rounded-lg shadow-md">
//     <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
//     <table className="w-full">
//       <thead>
//         <tr className="bg-gray-100">
//           <th className="p-2 text-left">Order ID</th>
//           <th className="p-2 text-left">Customer</th>
//           <th className="p-2 text-left">Beverage</th>
//           <th className="p-2 text-left">Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="p-2">001</td>
//           <td className="p-2">John Doe</td>
//           <td className="p-2">Latte</td>
//           <td className="p-2">$4.50</td>
//         </tr>
//         <tr className="bg-gray-50">
//           <td className="p-2">002</td>
//           <td className="p-2">Jane Smith</td>
//           <td className="p-2">Cappuccino</td>
//           <td className="p-2">$3.75</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// const ProductPopup = ({ products, onSelect, onClose }) => (
//   <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
//     <div className="bg-white p-5 rounded-lg shadow-xl">
//       <h3 className="text-lg font-semibold mb-2">Select Product</h3>
//       <ul>
//         {products.map(product => (
//           <li key={product.id} className="mb-2">
//             <button 
//               onClick={() => onSelect(product)}
//               className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
//             >
//               {product.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button 
//         onClick={onClose}
//         className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// const AddBeverageForm = () => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [image, setImage] = useState(null);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [showProductPopup, setShowProductPopup] = useState(false);

//   const products = [
//     { id: 1, name: 'Vanilla Syrup' },
//     { id: 2, name: 'Caramel Syrup' },
//     { id: 3, name: 'Hazelnut Syrup' },
//     { id: 4, name: 'Chocolate Syrup' },
//   ];

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleProductSelect = (product) => {
//     setSelectedProducts([...selectedProducts, product]);
//     setShowProductPopup(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ name, price, description, category, image, selectedProducts });
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Add New Beverage</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Beverage Name</label>
//             <input 
//               type="text" 
//               id="name" 
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
//               placeholder="Enter beverage name" 
//             />
//           </div>
//           <div>
//             <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
//             <input 
//               type="number" 
//               id="price" 
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
//               placeholder="Enter price" 
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea 
//             id="description" 
//             rows="3" 
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
//             placeholder="Enter beverage description"
//           ></textarea>
//         </div>
//         <div>
//           <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
//           <select 
//             id="category" 
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//           >
//             <option value="">Select a category</option>
//             <option value="coffee">Coffee</option>
//             <option value="tea">Tea</option>
//             <option value="smoothie">Smoothie</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
//           <input 
//             type="file" 
//             id="image" 
//             onChange={handleImageUpload}
//             className="mt-1 block w-full" 
//           />
//           {image && <img src={image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md" />}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Products (Syrups)</label>
//           <div className="mt-1 flex flex-wrap gap-2">
//             {selectedProducts.map(product => (
//               <span key={product.id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{product.name}</span>
//             ))}
//           </div>
//           <button 
//             type="button" 
//             onClick={() => setShowProductPopup(true)}
//             className="mt-2 bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
//           >
//             Add Syrup
//           </button>
//         </div>
//         {showProductPopup && (
//           <ProductPopup 
//             products={products} 
//             onSelect={handleProductSelect}
//             onClose={() => setShowProductPopup(false)} 
//           />
//         )}
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Add Beverage</button>
//       </form>
//     </div>
//   );
// };


// const BaristaDashboard = () => {
//   const [activeTab, setActiveTab] = useState('sales');

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <BaristaHeader name="John Barista" avatar="/path/to/avatar.jpg" />
//       <div className="flex space-x-4 mt-4">
//         <TabButton 
//           icon={() => <span>📊</span>} 
//           label="Sales Overview" 
//           isActive={activeTab === 'sales'} 
//           onClick={() => setActiveTab('sales')} 
//         />
//         <TabButton 
//           icon={() => <span>🍽️</span>} 
//           label="Add Beverage" 
//           isActive={activeTab === 'add-beverage'} 
//           onClick={() => setActiveTab('add-beverage')} 
//         />
//         <TabButton 
//           icon={() => <span>📝</span>} 
//           label="Recent Orders" 
//           isActive={activeTab === 'recent-orders'} 
//           onClick={() => setActiveTab('recent-orders')} 
//         />
//       </div>
//       <div className="mt-6">
//         {activeTab === 'sales' && <SalesOverview />}
//         {activeTab === 'add-beverage' && <AddBeverageForm />}
//         {activeTab === 'recent-orders' && <RecentOrders />}
//       </div>
//     </div>
//   );
// };

// export default BaristaDashboard;
import React, { useState } from 'react';
import BaristaHeader from './BaristaHeader';
import TabButton from './TabButton';
import SalesOverview from './SalesOverview';
import RecentOrders from './RecentOrders';
import AddBeverageForm from './AddBeverageForm';
import { FaChartBar, FaShoppingCart, FaPlus ,FaCoffee } from 'react-icons/fa'; // Importing icons
import AddRecipeForm from './AddRecipeForm';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('sales');

  return (
    <div className="p-6 space-y-4">
      <BaristaHeader 
        name="John Doe" 
        avatar="https://example.com/avatar.jpg"
      />
      <div className="flex space-x-4">
        <TabButton 
          label="Sales Overview" 
          icon={() => <FaChartBar className="text-2xl" />} 
          isActive={activeTab === 'sales'}
          onClick={() => setActiveTab('sales')}
        />
        <TabButton 
          label="Recent Orders" 
          icon={() => <FaShoppingCart className="text-2xl" />} 
          isActive={activeTab === 'orders'}
          onClick={() => setActiveTab('orders')}
        />
        <TabButton 
          label="Add Beverage" // Tab for Add Beverage
          icon={() => <FaCoffee className="text-2xl" />} 
          isActive={activeTab === 'addBeverage'}
          onClick={() => setActiveTab('addBeverage')}
        />
        <TabButton 
          label="Add Recipe" // Tab for Add Recipe
          icon={() => <FaPlus className="text-2xl" />} 
          isActive={activeTab === 'addRecipe'}
          onClick={() => setActiveTab('addRecipe')}
        />
      </div>
      <div>
        {activeTab === 'sales' && <SalesOverview />}
        {activeTab === 'orders' && <RecentOrders />}
        {activeTab === 'addBeverage' && <AddBeverageForm />} {/* Show AddBeverageForm */}
        {activeTab === 'addRecipe' && <AddRecipeForm />} {/* Show AddRecipeForm */}
      </div>
    </div>
  );
};

export default Dashboard;
