import React from "react";

const ApplicationStatus = ({ applicationStatus }) => {
  const getStatusColor = () => {
    switch (applicationStatus) {
      case "approved":
        return "text-green-500";
      case "rejected":
        return "text-red-500";
      case "pending":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  if (!applicationStatus) return null;

  return (
    <div className="flex items-center mt-4">
      <span className="mr-2 text-lg font-semibold">Application Status:</span>
      <span className={`font-medium ${getStatusColor()}`}>
        {applicationStatus.charAt(0).toUpperCase() + applicationStatus.slice(1)}
      </span>
    </div>
  );
};

export default ApplicationStatus;
