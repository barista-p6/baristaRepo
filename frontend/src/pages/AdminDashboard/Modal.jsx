import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />
      <div className="bg-white p-6 rounded shadow-lg z-10 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div>
          <h3 className="text-lg font-semibold">Order Details</h3>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
