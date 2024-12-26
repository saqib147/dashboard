import React from "react";
import StatCard from "../Components/common/StatCard";
import { motion } from "framer-motion";
import Header from "../Components/common/Header";
import {
  AlertTriangle,
  BarChart2,
  DollarSign,
  Package,
  ShoppingBag,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import ProductTable from "../Components/products/ProductTable";
import SalesOverviewChart from "../Components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../Components/overview/CategoryDistributionChart";
import SalesTrendChart from "../Components/products/SalesTrendChart";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value={123}
            color="6366F1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={28}
            color="8B5CF6"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value={21}
            color="EC4899"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={"Rs 1,234,567"}
            color="10B981"
          />
        </motion.div>

        <ProductTable />

        {/* Carts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
