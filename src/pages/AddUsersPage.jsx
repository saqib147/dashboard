import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/common/Header";
import AddUserForm from "../Components/adduser/AddUserForm";

const AddUsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Add Users" />
      <main className="flex flex-col items-center justify-center py-6 px-4 lg:px-8">
        <AddUserForm />
      </main>
    </div>
  );
};

export default AddUsersPage;
