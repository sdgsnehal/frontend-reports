import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Global from "../pages/Global/Global";
import Order from "../pages/order/Order";
import Login from "../pages/login";
import Signup from "../pages/signup";
import useObserveQuery from "../hooks/useObserveQuery";

const AppRoutes = () => {
  const authData = useObserveQuery(["auth"]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth: any = authData?.data;
  return (
    <Routes>
      {auth?.isLoggedIn ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/global" element={<Global />} />
          <Route path="/order" element={<Order />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
