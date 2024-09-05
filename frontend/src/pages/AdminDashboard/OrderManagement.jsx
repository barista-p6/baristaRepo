
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaEdit,
  FaTrash,
  FaHome,
  FaUsers,
  FaCoffee,
  FaBook,
  FaGlassWhiskey,
  FaShoppingCart,
  FaComments,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingOrder, setEditingOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

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

  const handleEdit = (order) => {
    setEditingOrder(order);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/admin/order/${editingOrder._id}`,
        {
          quantity: editingOrder.quantity,
          totalPrice: editingOrder.totalPrice,
        }
      );
      setOrders(
        orders.map((order) =>
          order._id === editingOrder._id ? response.data : order
        )
      );
      setEditingOrder(null);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/admin/order/${id}`);
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleInputChange = (e) => {
    setEditingOrder({
      ...editingOrder,
      [e.target.name]: e.target.value,
    });
  };
  
  const NavItem = ({ to, icon, text }) => (
    <li>
      <Link
        to={to}
        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
      >
        <span className="mr-3 text-lg">{icon}</span>
        {text}
      </Link>
    </li>
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <nav className="w-64 bg-white shadow-lg fixed h-screen">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
          <ul className="mt-5">
            <NavItem to="/admin" icon={<FaHome />} text="Dashboard" />
            <NavItem to="/admin/users" icon={<FaUsers />} text="Users" />
            <NavItem to="/admin/baristas" icon={<FaCoffee />} text="Baristas" />
            <NavItem to="/admin/recipes" icon={<FaBook />} text="Recipes" />
            <NavItem
              to="/admin/beverages"
              icon={<FaGlassWhiskey />}
              text="Beverages"
            />
            <NavItem
              to="/admin/orders"
              icon={<FaShoppingCart />}
              text="Orders"
            />
            <NavItem to="/admin/reviews" icon={<FaComments />} text="Reviews" />
            <NavItem
              to="/admin/contact-messages"
              icon={<FaEnvelope />}
              text="Contact Messages"
            />
          </ul>
        </div>
      </nav>

      <main className="flex-1 ml-64 p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Order Management
          </h2>
          {loading ? (
            <div className="flex justify-center items-center py-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        {order._id}
                      </td>
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
                        {editingOrder && editingOrder._id === order._id ? (
                          <input
                            type="number"
                            name="quantity"
                            value={editingOrder.quantity}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1 w-20"
                          />
                        ) : (
                          order.quantity
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingOrder && editingOrder._id === order._id ? (
                          <input
                            type="number"
                            name="totalPrice"
                            value={editingOrder.totalPrice}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1 w-20"
                          />
                        ) : (
                          `$${order.totalPrice.toFixed(2)}`
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {order.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {editingOrder && editingOrder._id === order._id ? (
                          <button
                            onClick={handleSave}
                            className="text-green-600 hover:text-green-900 mr-2 transition duration-150 ease-in-out"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEdit(order)}
                            className="text-yellow-600 hover:text-yellow-800 mr-2 transition duration-150 ease-in-out"
                          >
                            <FaEdit className="inline mr-1" /> Edit
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                        >
                          <FaTrash className="inline mr-1" /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );

};

export default OrderManagement;