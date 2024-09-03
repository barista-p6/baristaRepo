import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/orders"
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Barista</th>
            <th>Beverage</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.userId.username}</td>
              <td>{order.baristaId.username}</td>
              <td>{order.beverageId.name}</td>
              <td>{order.quantity}</td>
              <td>${order.totalPrice.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                {/* <button onClick={() => handleViewDetails(order._id)}> View Details</button> */}
                <button > View Details</button>
                {/* <button onClick={() => handleUpdateStatus(order._id)}>Update Status </button> */}
                <button >Update Status </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;