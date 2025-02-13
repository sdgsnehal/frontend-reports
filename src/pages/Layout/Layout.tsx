import { ReactNode, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  ArrowRightStartOnRectangleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/16/solid";
import { IoMenu } from "react-icons/io5";
import { useLogout } from "./service.logout";
interface LayoutProps {
  children: ReactNode; // ReactNode allows passing any valid React child elements
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const logoutMutation = useLogout();
  return (
    <div className="w-full h-screen flex flex-col  overflow-x-hidden">
      <header className="w-full h-16  flex items-center justify-between px-4 text-black">
        <button
          className={`fixed top-4 transition-all duration-300 z-50 bg-gray-700 text-white p-2 rounded-md hover:bg-gray-600 ${
            isSidebarVisible ? "left-2 md:left-2" : "left-2 md:left-2"
          } `}
          onClick={() => setSidebarVisible(!isSidebarVisible)}
        >
          <IoMenu />
        </button>
        <div className="w-full flex justify-end px-4 pt-6 gap-2">
          <span className="flex items-center gap-2 bg-transparent text-black/70 text-sm hover:text-blue-400">
            <QuestionMarkCircleIcon className="w-5 h-5" />
          </span>
          <span
            className="flex items-center gap-2 bg-transparent text-black/70 text-sm hover:text-blue-400"
            onClick={() => {
              logoutMutation.mutate();
            }}
          >
            <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
            Logout
          </span>
        </div>
      </header>

      <div className="flex  w-full">
        {isSidebarVisible && <Sidebar isSidebarOpen={isSidebarVisible} />}
        <main
          className={`flex-1 p-4 bg-gray-200 overflow-x-hidden no-scrollbar  ${
            isSidebarVisible ? "ml-0 md:ml-60" : ""
          }`}
        >
          {children}
          <div className="text-xs text-gray-600">
            <span className="font-semibold text-gray-600">Copyright</span> ©
            2025 AmzFein All rights reserved.
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
