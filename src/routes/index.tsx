import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Global from "../pages/Global/Global";
const AppRoutes = () => {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<Dashboard />} />
      <Route path="/global" element={<Global />} />
    </Routes>
  );
};

export default AppRoutes;
