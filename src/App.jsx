import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import Sidebar from "./Components/Sidebar";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AddUsersPage from "./pages/AddUsersPage";
import OrderRequestPage from "./pages/OrderRequestPage";
import OrderRequestDetails from "./pages/OrderRequestDetails";
import { SpeedInsights } from "@vercel/speed-insights/next"
function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="inset-0 absolute bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80 " />
        <div className="absolute inset-0 backdrop-blur-sm " />
      </div>
      <SpeedInsights />

      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/add" element={<AddUsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/requests" element={<OrderRequestPage />} />
        <Route
          path="/orders/requests/details"
          element={<OrderRequestDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
