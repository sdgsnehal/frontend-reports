import React, { useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import { IoMenu } from "react-icons/io5";
import Dashboard from "../Dashboard";

function Layout() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  return (
    <div className="w-full h-screen flex flex-col">
      <header className="w-full h-16  flex items-center justify-between px-4 text-black">
        <button
          className={`fixed top-4 transition-all duration-300 z-50 bg-gray-700 text-white p-2 rounded-md hover:bg-gray-600 ${
            isSidebarVisible ? "left-2 md:left-2" : "left-2 md:left-2"
          } `}
          onClick={() => setSidebarVisible(!isSidebarVisible)}
        >
          <IoMenu />
        </button>
      </header>

      <div className="flex  w-full">
        {isSidebarVisible && <Sidebar isSidebarOpen={isSidebarVisible} />}
        <main
          className={`flex-1 p-4 bg-gray-100 ${
            isSidebarVisible ? "ml-0 md:ml-64" : ""
          }`}
        >
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default Layout;
