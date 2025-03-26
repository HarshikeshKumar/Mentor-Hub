import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../helper";
import useUserStore from "../store/user";
import { FiLogOut } from "react-icons/fi";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const onButtonClick = () => {
    removeToken();
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <div className="border-b bg-gray-50">
        <div className="container py-2 mx-auto">
          <div className="flex items-center justify-between ">
            <div>
              <div className="p-2">
                <NavLink to="/">
                  <p className="px-4 py-1 text-3xl font-bold tracking-wider text-gray-800 cursor-pointer">
                    MentorHub
                  </p>
                </NavLink>
              </div>
            </div>
            <div>
              <button
                onClick={onButtonClick}
                className="flex items-center w-full px-4 py-2 text-gray-600 transition-colors duration-300 transform border border-red-200 rounded-lg hover:bg-red-200 hover:text-gray-700 "
              >
                <span className="mx-4 font-medium">Log Out</span>
                <FiLogOut className="text-xl text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
