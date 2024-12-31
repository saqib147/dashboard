import React from "react";
import { motion } from "framer-motion";

const AddUserForm = () => {
  return (
    <motion.div
      className="w-full bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <form className="space-y-6">
        {/* Customer Details */}
        <h2 className="text-lg font-semibold text-white mb-4">
          Customer Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Full Name
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block text-white">
            Phone Number
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Email Address (Optional)
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block text-white">
            CNIC Number
            <input
              type="number"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <label className="block text-white">
            Permanent Address
            <textarea
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </label>
          <label className="block text-white">
            Current Address (Optional)
            <textarea className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <label className="block text-white">
            CNIC Image
            <input
              type="file"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>

        {/* Employment Details */}
        <h2 className="text-lg font-semibold text-white mt-8 mb-4">
          Employment Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Job Title
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block text-white">
            Employer Name
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray- 400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Monthly Income
            <input
              type="number"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>

        {/* Product Details */}
        <h2 className="text-lg font-semibold text-white mt-8 mb-4">
          Product Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Select Product
            <select
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Product</option>
              {/* Add product options here */}
            </select>
          </label>
          <label className="block text-white">
            Select Model/Variant
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Number of Items
            <input
              type="number"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block text-white">
            Product Price
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Total Installment Period
            <select
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Period</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
            </select>
          </label>
          <label className="block text-white">
            Monthly Installment Amount
            <input
              type="number"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Initial Payment Amount
            <input
              type="number"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>

        {/* Guarantor Details */}
        <h2 className="text-lg font-semibold text-white mt-8 mb-4">
          Guarantor Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Guarantor Full Name
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg ```javascriptreact
              gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block text-white">
            Relationship to Customer
            <select
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Relationship</option>
              {/* Add relationship options here */}
            </select>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Guarantor Phone Number
            <input
              type="number"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block text-white">
            Guarantor Email Address (Optional)
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <label className="block text-white">
            Guarantor Permanent Address
            <textarea
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Guarantor ID Number
            <input
              type="number"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block text-white">
            Upload Guarantor National ID Image
            <input
              type="file"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>

        {/* Additional Fields */}
        <h2 className="text-lg font-semibold text-white mt-8 mb-4">
          Additional Fields
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <label className="block text-white">
            Notes
            <textarea className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Date of Agreement
            <input
              type="date"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block text-white">
            Employee Name
            <input
              type="text"
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md"
          >
            Save/Submit
          </button>
          <button
            type="button"
            className="bg-red-600 text-white p-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddUserForm;
