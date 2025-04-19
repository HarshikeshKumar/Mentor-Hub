import React from "react";
import Sidebar from "../../components/Sidebar";
import DashboardNavbar from "../../components/DashboardNavbar";

const Dashboard = ({ children }) => {
  return (
    <div>
      <DashboardNavbar />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
