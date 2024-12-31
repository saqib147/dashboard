import React, { useEffect, useState } from "react";

const formData = {
  fullName: "saqib",
  phoneNumber: "12312412343",
  email: "saqib@gmail.com",
  cnicNumber: "123123412412",
  permanentAddress: "asdasdfasf",
  currentAddress: "asdasdasd",
  cnicImage: null,
  // Employment Details
  jobTitle: "dasdasdasd",
  employerName: "sadasdasda",
  monthlyIncome: "123333",
  // Product Details
  selectedProduct: "asdasd",
  productVariant: "asdasdas",
  numberOfItems: "123",
  productPrice: "12123",
  installmentPeriod: "12 months",
  monthlyInstallment: "123",
  initialPayment: "1233213",
  // Guarantor Details
  guarantorName: "daswe",
  guarantorRelationship: "sadasdasd",
  guarantorPhoneNumber: "1231",
  guarantorEmail: "asdasd@gmail.com",
  guarantorAddress: "asdasdasdas",
  guarantorIdNumber: "1231234124",
  guarantorIdImage: null,
  // Additional Fields
  notes: "asdasdasd",
  agreementDate: "sadasdasd",
  employeeName: "asdasdas",
  status: "Pending", // Add a status field
};

const OrderRequestModal = ({ onClose, onStatusChange }) => {
  const [status, setStatus] = useState(formData.status);

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    onStatusChange(newStatus); // Call the prop function to update the status
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-10">
      <div className="bg-gray-800 backdrop-blur-md p-6 rounded-lg shadow-lg ring-1 ring-gray-700 w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer Details */}
          <h3 className="col-span-full text-lg font-semibold text-gray-400">
            Customer Details
          </h3>
          <p className="text-gray-400">Name: {formData.fullName}</p>
          <p className="text-gray-400">Phone Number: {formData.phoneNumber}</p>
          <p className="text-gray-400">Email: {formData.email}</p>
          <p className="text-gray-400">CNIC Number: {formData.cnicNumber}</p>
          <p className="text-gray-400">
            Permanent Address: {formData.permanentAddress}
          </p>
          <p className="text-gray-400">
            Current Address: {formData.currentAddress}
          </p>
          <p className="text-gray-400">
            CNIC Image: {formData.cnicImage?.name}
          </p>
          {/* Employment Details */}
          <h3 className="col-span-full text-lg font-semibold text-gray-400">
            Employment Details
          </h3>
          <p className="text-gray-400">Job Title: {formData.jobTitle}</p>
          <p className="text-gray-400">
            Employer Name: {formData.employerName}
          </p>
          <p className="text-gray-400">
            Monthly Income: {formData.monthlyIncome}
          </p>
          {/* Product Details */}
          <h3 className="col-span-full text-lg font-semibold text-gray-400">
            Product Details
          </h3>
          <p className="text-gray-400">
            Selected Product: {formData.selectedProduct}
          </p>
          <p className="text-gray-400">
            Product Variant: {formData.productVariant}
          </p>
          <p className="text-gray-400">
            Number of Items: {formData.numberOfItems}
          </p>
          <p className="text-gray-400">
            Product Price: {formData.productPrice}
          </p>
          <p className="text-gray-400">
            Installment Period: {formData.installmentPeriod}
          </p>
          <p className="text-gray-400">
            Monthly Installment: {formData.monthlyInstallment}
          </p>
          <p className="text-gray-400">
            Initial Payment: {formData.initialPayment}
          </p>
          {/* Guarantor Details */}
          <h3 className="col-span-full text-lg font-semibold text-gray-400">
            Guarantor Details
          </h3>
          <p className="text-gray-400">
            Guarantor Name: {formData.guarantorName}
          </p>
          <p className="text-gray-400">
            Guarantor Relationship: {formData.guarantorRelationship}
          </p>
          <p className="text-gray-400">
            Guarantor Phone Number: {formData.guarantorPhoneNumber}
          </p>
          <p className="text-gray-400">
            Guarantor Email: {formData.guarantorEmail}
          </p>
          <p className="text-gray-400">
            Guarantor Address: {formData.guarantorAddress}
          </p>
          <p className="text-gray-400">
            Guarantor ID Number: {formData.guarantorIdNumber}
          </p>
          <p className="text-gray-400">
            Guarantor ID Image: {formData.guarantorIdImage?.name}
          </p>
          {/* Additional Fields */}
          <h3 className="col-span-full text-lg font-semibold text-gray-400">
            Additional Fields
          </h3>
          <p className="text-gray-400">Notes: {formData.notes}</p>
          <p className="text-gray-400">
            Agreement Date: {formData.agreementDate}
          </p>
          <p className="text-gray-400">
            Employee Name: {formData.employeeName}
          </p>
          <p className="text-gray-400">Status: {status}</p>{" "}
          {/* Display the current status */}
        </div>
        <div className="flex justify-evenly">
          <button
            className="text-indigo-400 hover:text-indigo-300 mr-2"
            onClick={onClose}
          >
            Approve
          </button>
          <button className="text-red-400 hover:text-red-300" onClick={onClose}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderRequestModal;
