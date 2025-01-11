import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import AddUserForm from "../components/adduser/AddUserForm";

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
