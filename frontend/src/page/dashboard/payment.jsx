import React from "react";
import { Table } from "antd";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Dashboard from "./dashboard"; // Assuming the Dashboard layout is used for consistent structure
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Payment = () => {
  // Hardcoded payment data (you can replace it later with real data)
  const paymentHistory = [
    {
      key: "1",
      no: "1",
      studentName: "Jane Doe",
      transactionId: "TXN12345",
      date: "2024-10-15",
      amount: "₹50",
      status: "Completed",
    },
    {
      key: "2",
      no: "2",
      studentName: "Mark Smith",
      transactionId: "TXN67890",
      date: "2024-10-10",
      amount: "₹75",
      status: "Completed",
    },
    {
      key: "3",
      no: "3",
      studentName: "Anna Johnson",
      transactionId: "TXN24680",
      date: "2024-09-30",
      amount: "₹100",
      status: "Completed",
    },
    {
      key: "4",
      no: "4",
      studentName: "Emily Davis",
      transactionId: "TXN13579",
      date: "2024-09-25",
      amount: "₹60",
      status: "Completed",
    },
    {
      key: "5",
      no: "5",
      studentName: "Michael Brown",
      transactionId: "TXN86420",
      date: "2024-09-20",
      amount: "₹85",
      status: "Completed",
    },
    // Add more records as needed...
  ];

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`status ${
            status === "Completed" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
  ];

  return (
    <Dashboard>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <MdOutlineCurrencyRupee className="mr-2 text-3xl text-blue-600" />
          <h2 className="text-2xl font-bold">Payment History</h2>
        </div>
        <Table
          columns={columns}
          dataSource={paymentHistory}
          pagination={{
            pageSize: 3, // Number of rows per page
            showSizeChanger: false, // Allows the user to change page size
            pageSizeOptions: ["3", "5", "10"], // Options for page size
          }}
          className="w-full"
        />
      </div>
    </Dashboard>
  );
};

export default Payment;
