import React from "react";
import Header from "../Components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../Components/common/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../Components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../Components/overview/CategoryDistributionChart";
import SalesChannelChart from "../Components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="Rs 1,234,567"
            color="6366F1"
          />
          <StatCard name="New Users" icon={Users} value="123" color="8B5CF6" />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="18"
            color="EC4899"
          />
          <StatCard
            name="Conversion Rates"
            icon={BarChart2}
            value="12.6%"
            color="10B981"
          />
        </motion.div>

        {/* Carts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
