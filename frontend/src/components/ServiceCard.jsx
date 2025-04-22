import React from "react";
import { FaPhone, FaEdit } from "react-icons/fa";
import serviceAPI from "../../src/apiManger/service";
// import { toast } from "react-toastify";
import { toast } from "react-hot-toast";

const ServiceCard = ({ service, onEdit, onStatusChange }) => {
  const handleToggleStatus = async () => {
    try {
      await serviceAPI.editService(service._id, { active: !service.active });
      toast.success(
        `Service ${!service.active ? "enabled" : "disabled"} successfully`
      );
      if (onStatusChange) onStatusChange(); // Optional refresh
    } catch (error) {
      toast.error("Failed to update service status");
    }
  };

  return (
    <div className="p-4 mb-4 bg-white border rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <FaPhone className="text-purple-600" size={24} />
          <h3 className="text-xl font-semibold text-gray-800">
            {service?.name}
          </h3>
        </div>

        {/* Enable/Disable Button */}
        <button
          onClick={handleToggleStatus}
          className={`${
            service?.active ? "bg-green-500" : "bg-red-500"
          } text-white px-3 py-1 rounded-md`}
        >
          {service?.active ? "Enabled" : "Disabled"}
        </button>
      </div>

      <p className="mb-3 text-gray-600">{service?.description}</p>

      <div className="flex justify-between px-3 mb-3 text-lg font-bold text-gray-800">
        <p> Price: ₹{service?.price}</p>
        <p> Duration: {service?.duration} mins.</p>
      </div>

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
