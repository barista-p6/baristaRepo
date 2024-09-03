
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OrderManagement = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/admin/orders"
//         );
//         setOrders(response.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="order-management">
//       <h2>Order Management</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>User</th>
//             <th>Barista</th>
//             <th>Beverage</th>
//             <th>Quantity</th>
//             <th>Total Price</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id}>
//               <td>{order._id}</td>
//               <td>{order.userId.username}</td>
//               <td>{order.baristaId.username}</td>
//               <td>{order.beverageId.name}</td>
//               <td>{order.quantity}</td>
//               <td>${order.totalPrice.toFixed(2)}</td>
//               <td>{order.status}</td>
//               <td>
//                 {/* <button onClick={() => handleViewDetails(order._id)}> View Details</button> */}
//                 <button > View Details</button>
//                 {/* <button onClick={() => handleUpdateStatus(order._id)}>Update Status </button> */}
//                 <button >Update Status </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderManagement;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye, FaEdit } from 'react-icons/fa';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const fetchOrders = async () => {
      try {

        setLoading(true);

        const response = await axios.get(
          "http://localhost:3000/api/admin/orders"
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);

      } finally {
        setLoading(false);

      }
    };

    fetchOrders();
  }, []);


  const handleViewDetails = (id) => {
    // Implement view details functionality
    console.log("Viewing order details for order with id:", id);
  };

  const handleUpdateStatus = (id) => {
    // Implement update status functionality
    console.log("Updating status for order with id:", id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Order Management
      </h2>
      {loading ? (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Barista
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Beverage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{order._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.userId.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.baristaId.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.beverageId.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${order.totalPrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-800 mr-2 transition duration-150 ease-in-out">
                      <FaEye className="inline mr-1" /> View
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-800 mr-2 transition duration-150 ease-in-out">
                      <FaEdit className="inline mr-1" /> Update Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
    

    


export default OrderManagement;