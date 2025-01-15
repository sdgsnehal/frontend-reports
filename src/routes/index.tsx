import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Global from "../pages/Global/Global";
import Order from "../pages/order/Order";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/global" element={<Global />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};

export default AppRoutes;
