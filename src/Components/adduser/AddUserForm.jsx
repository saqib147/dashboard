import React, { useState } from "react";
import { motion } from "framer-motion";
import DetailsModal from "./DetailsModal";
import { Link } from "react-router-dom";

const AddUserForm = () => {
  // State to store form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Customer Details
    fullName: "",
    phoneNumber: "",
    email: "",
    cnicNumber: "",
    permanentAddress: "",
    currentAddress: "",
    cnicImage: null,
    // Employment Details
    jobTitle: "",
    employerName: "",
    monthlyIncome: "",
    // Product Details
    selectedProduct: "",
    productVariant: "",
    numberOfItems: "",
    productPrice: "",
    installmentPeriod: "",
    monthlyInstallment: "",
    initialPayment: "",
    // Guarantor Details
    guarantorName: "",
    guarantorRelationship: "",
    guarantorPhoneNumber: "",
    guarantorEmail: "",
    guarantorAddress: "",
    guarantorIdNumber: "",
    guarantorIdImage: null,
    // Additional Fields
    notes: "",
    agreementDate: "",
    employeeName: "",
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    console.log("Form Data:", formData);
  };

  return (
    <motion.div
      className="w-full bg-gray-800  bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Details */}
        <h2 className="text-lg font-semibold text-white mb-4">
          Customer Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Full Name
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
          <label className="block text-white">
            Phone Number
            <input
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Email Address (Optional)
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
            />
          </label>
          <label className="block text-white">
            CNIC Number
            <input
              name="cnicNumber"
              type="text"
              value={formData.cnicNumber}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <label className="block text-white">
            Permanent Address
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            ></textarea>
          </label>
          <label className="block text-white">
            Current Address (Optional)
            <textarea
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
            ></textarea>
          </label>
          <label className="block text-white">
            CNIC Image
            <input
              name="cnicImage"
              type="file"
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
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
              name="jobTitle"
              type="text"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
          <label className="block text-white">
            Employer Name
            <input
              name="employerName"
              type="text"
              value={formData.employerName}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
          <label className="block text-white">
            Monthly Income
            <input
              name="monthlyIncome"
              type="number"
              value={formData.monthlyIncome}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
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
            Selected Product
            <input
              name="selectedProduct"
              type="text"
              value={formData.selectedProduct}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
          <label className="block text-white">
            Product Variant
            <input
              name="productVariant"
              type="text"
              value={formData.productVariant}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
            />
          </label>
        </div>
        {/* Continue adding fields for Guarantor Details and Additional Fields */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Guarantor Name
            <input
              name="guarantorName"
              type="text"
              value={formData.guarantorName}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
          <label className="block text-white">
            Guarantor Relationship
            <input
              name="guarantorRelationship"
              type="text"
              value={formData.guarantorRelationship}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
          <label className="block text-white">
            Guarantor Phone Number
            <input
              name="guarantorPhoneNumber"
              type="text"
              value={formData.guarantorPhoneNumber}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
          <label className="block text-white">
            Guarantor Email
            <input
              name="guarantorEmail"
              type="email"
              value={formData.guarantorEmail}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
            />
          </label>
          <label className="block text-white">
            Guarantor Address
            <textarea
              name="guarantorAddress"
              value={formData.guarantorAddress}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
            ></textarea>
          </label>
          <label className="block text-white">
            Guarantor ID Number
            <input
              name="guarantorIdNumber"
              type="text"
              value={formData.guarantorIdNumber}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
          <label className="block text-white">
            Guarantor ID Image
            <input
              name="guarantorIdImage"
              type="file"
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-white">
            Notes
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
            ></textarea>
          </label>
          <label className="block text-white">
            Agreement Date
            <input
              name="agreementDate"
              type="date"
              value={formData.agreementDate}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
              required
            />
          </label>
          <label className="block text-white">
            Employee Name
            <input
              name="employeeName"
              type="text"
              value={formData.employeeName}
              onChange={handleInputChange}
              className="mt-1 w-full bg-gray-800 ring-1 ring-gray-700 text-gray-400 rounded-lg p-2"
            />
          </label>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md"
          >
            Submit
          </button>
          <Link to="/users">
            <button
              type="button"
              className="bg-red-600 text-white p-2 rounded-md"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>

      {isModalOpen && (
        <DetailsModal
          onClose={() => setIsModalOpen(false)}
          formData={formData}
        />
      )}
    </motion.div>
  );
};

export default AddUserForm;
