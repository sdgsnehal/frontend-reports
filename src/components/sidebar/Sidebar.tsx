import { useState } from "react";
import Logo from "../../assets/react.svg";
import { MenuList } from "../../utils/Menulist";
import { IoMenu } from "react-icons/io5";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(isSidebarOpen);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="">
      <nav
        className={`fixed top-0 left-0 bg-[#676a6c] h-full transition-transform duration-300 z-40 ${
          isSidebarOpen ? "w-0" : "w-60"
        } md:translate-x-0 md:block`}
      >
        <div className="flex  items-center justify-center">
          <img
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            className="py-2 px-2"
          />
        </div>
        <div className="">
          <ul>
            {MenuList.map((menu, index) => (
              <li
                key={index}
                className="text-white text-sm font-medium flex  justify-start gap-2 px-4 py-2 hover:bg-[#56595c] cursor-pointer"
              >
                <menu.Icon className="h-4 w-4" />
                <a href={menu.href} className="text-white">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <button
        className={`fixed top-4 transition-all duration-300 z-50 bg-gray-700 text-white p-2 rounded-md hover:bg-gray-600 ${
          isSidebarOpen ? "left-0" : "left-2"
        } md:left-60`}
        onClick={toggleSidebar}
      >
        <IoMenu />
      </button>
    </div>
  );
};

export default Sidebar;
