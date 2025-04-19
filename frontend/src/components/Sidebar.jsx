import React from "react";
import { NavLink } from "react-router-dom";
import useUserStore from "../store/user";

const Sidebar = () => {
  const { user } = useUserStore();

  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r">
      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded"
          src={user.photoUrl || `https://ui-avatars.com/api?name=${user?.name}`}
          alt={`${user?.name}'s avatar`}
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800">{user?.name}</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>

          <NavLink
            to="/dashboard/services"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 21C17.523 21 22 16.523 22 11C22 5.477 17.523 1 12 1C6.477 1 2 5.477 2 11C2 16.523 6.477 21 12 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 13.5C9.5 12.9477 9.94772 12.5 10.5 12.5C11.0523 12.5 11.5 12.9477 11.5 13.5C11.5 14.0523 11.0523 14.5 10.5 14.5C9.94772 14.5 9.5 14.0523 9.5 13.5Z"
                fill="currentColor"
              />
              <path
                d="M13.5 13.5C13.5 12.9477 13.9477 12.5 14.5 12.5C15.0523 12.5 15.5 12.9477 15.5 13.5C15.5 14.0523 15.0523 14.5 14.5 14.5C13.9477 14.5 13.5 14.0523 13.5 13.5Z"
                fill="currentColor"
              />
            </svg>

            <span className="mx-4 font-medium">Services</span>
          </NavLink>

          <NavLink
            to="/dashboard/schedule"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H21M16 2V5M8 2V5M3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9M3 9H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 13H16.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13H12.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 13H8.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-4 font-medium">Schedule</span>
          </NavLink>

          <NavLink
            to="/dashboard/payment"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21C22.1046 6 23 6.89543 23 8V16C23 17.1046 22.1046 18 21 18H3C1.89543 18 1 17.1046 1 16V8C1 6.89543 1.89543 6 3 6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 10H23"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 14H7.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-4 font-medium">Payment</span>
          </NavLink>

          <NavLink
            to="/dashboard/bookings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21C22.1046 6 23 6.89543 23 8V16C23 17.1046 22.1046 18 21 18H3C1.89543 18 1 17.1046 1 16V8C1 6.89543 1.89543 6 3 6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 10H23"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 14H7.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-4 font-medium">Bookings</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
