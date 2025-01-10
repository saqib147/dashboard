"use client";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import Header from "../Components/common/Header";
import OrderRequestModal from "../Components/orderRequest/OrderRequestModal";
import { useState } from "react";
// import Image from "next/image";

export default function OrderRequestDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDivClick = () => {
    setIsModalOpen(true);
  };

  const installments = [
    {
      name: "Norse Projects",
      logo: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
      monthlyAmount: 450.0,
      currentInstallment: 8,
      totalInstallments: 10,
      remaining: 900.0,
      progress: 80,
      dueDate: "Dec 12",
    },
    {
      name: "Minimum",
      logo: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
      monthlyAmount: 300.0,
      currentInstallment: 7,
      totalInstallments: 10,
      remaining: 300.0,
      progress: 70,
      dueDate: "Dec 15",
    },
    {
      name: "Faviana",
      logo: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
      monthlyAmount: 55.0,
      currentInstallment: 5,
      totalInstallments: 10,
      remaining: 900.0,
      progress: 50,
      dueDate: "Dec 20",
    },
  ];

  return (
    <div className="flex-1 w-full relative z-10 overflow-auto">
      <Header title={"User Details"} />

      <main className="w-full mx-auto py-6 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
            <div className="mx-auto max-w-7xl p-4 space-y-6">
              {/* User Profile Section */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20">
                    <img
                      src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                      alt="User avatar"
                      className="rounded-full h-20 w-20 object-cover border border-gray-700"
                    />
                    <button className="absolute bottom-0 right-0 rounded-full bg-gray-800  p-1 shadow-sm">
                      <Settings className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">John Doe</h2>
                    <p className="text-gray-400">lucas.rodgers@example.com</p>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
                  <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md border-gray-700 p-4 rounded-lg border">
                    <div className="text-sm font-medium text-gray-400">
                      Account Balance
                    </div>
                    <div className="text-2xl text-gray-300 font-bold mt-1">
                      Rs. 1,615.36
                    </div>
                  </div>
                  <div className="bg-gray-800 border-gray-700 p-4 rounded-lg border">
                    <div className="text-sm font-medium text-gray-400">
                      Due Amount
                    </div>
                    <div className="text-2xl font-bold text-red-500 mt-1">
                      Rs. 149.08
                    </div>
                  </div>
                </div>
              </div>

              {/* Installments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {installments.map((item) => (
                  <div
                    key={item.name}
                    onClick={handleDivClick}
                    className="bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-lg shadow-lg border border-gray-700 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex flex-col items-center gap-4">
                        <div className="h-20 w-20 rounded-full bg-gray-800 flex items-center justify-center">
                          <img
                            src={item.logo}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="h-20 w-20 rounded-full "
                          />
                        </div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <div className="w-full">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 transition-all duration-500"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between mt-2 text-sm text-gray-400">
                            <span>
                              {item.currentInstallment}/{item.totalInstallments}{" "}
                              Installments
                            </span>
                            <span>
                              Rs. {item.remaining.toFixed(2)} Remaining
                            </span>
                          </div>
                        </div>
                        {item.name === "Minimum" && (
                          <button className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors">
                            PAY UP
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Installments Table */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md border-gray-700 rounded-lg border shadow-lg">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Installment Details</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-medium text-gray-400">
                          Company
                        </th>
                        <th className="text-left p-4 font-medium text-gray-400">
                          Remaining
                        </th>
                        <th className="text-left p-4 font-medium text-gray-400">
                          Installments
                        </th>
                        <th className="text-left p-4 font-medium text-gray-400">
                          Amount/mon
                        </th>
                        <th className="text-left p-4 font-medium text-gray-400">
                          Due Date
                        </th>
                        <th className="text-left p-4 font-medium text-gray-400">
                          Progress
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {installments.map((item) => (
                        <tr
                          key={item.name}
                          className="border-b border-gray-700 last:border-b-0"
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full  flex items-center justify-center">
                                <img
                                  src={item.logo}
                                  alt={item.name}
                                  width={20}
                                  height={20}
                                  className="h-7 w-7 rounded-full"
                                />
                              </div>
                              <span className="font-medium">{item.name}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            Rs. {item.remaining.toFixed(2)}
                          </td>
                          <td className="p-4">
                            {item.currentInstallment} out of{" "}
                            {item.totalInstallments}
                          </td>
                          <td className="p-4">
                            Rs. {item.monthlyAmount.toFixed(2)}
                          </td>
                          <td className="p-4">{item.dueDate}</td>
                          <td className="p-4">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-500 transition-all duration-500"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {isModalOpen && (
          <OrderRequestModal onClose={() => setIsModalOpen(false)} />
        )}
      </main>
    </div>
  );
}
