import { ReactNode, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { IoMenu } from "react-icons/io5";
interface LayoutProps {
  children: ReactNode; // ReactNode allows passing any valid React child elements
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  return (
    <div className="w-full h-screen flex flex-col overflow-x-hidden">
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
          className={`flex-1 p-4 bg-gray-200 overflow-x-hidden no-scrollbar  ${
            isSidebarVisible ? "ml-0 md:ml-60" : ""
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
