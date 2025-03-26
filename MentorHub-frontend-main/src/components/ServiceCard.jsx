import React from "react";
import { FaPhone, FaEdit } from "react-icons/fa"; // Example icons

const ServiceCard = ({ service, onEdit }) => {
  return (
    <div className="p-4 mb-4 bg-white border rounded-lg shadow-lg">
      {/* Service Icon */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <FaPhone className="text-purple-600" size={24} /> {/* Example icon */}
          <h3 className="text-xl font-semibold text-gray-800">
            {service?.name}
          </h3>
        </div>
        {/* Enable/Disable Button */}
        <button
          // onClick={}
          className={`${
            service?.active ? "bg-green-500" : "bg-red-500"
          } text-white px-3 py-1 rounded-md`}
        >
          {service?.active ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* Service Description */}
      <p className="mb-3 text-gray-600">{service?.description}</p>

      {/* Service Price */}
      <div className="flex justify-between px-3 mb-3 text-lg font-bold text-gray-800">
        <p> Price: ₹{service?.price}</p>
        <p> Duration: {service?.duration} mins.</p>
      </div>

      {/* Action Buttons: Edits */}
      <div className="flex items-center justify-end gap-4">
        <button
          onClick={onEdit}
          className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
        >
          <FaEdit size={16} />
          Edit
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
