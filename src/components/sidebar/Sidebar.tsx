import React, { useState } from "react";
import Logo from "../../assets/react.svg";
import { MenuList } from "../../utils/Menulist";
import Dropdown from "../Dropdown/Dropdown";
import { MerchantList } from "../../utils/Constants";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
  };
  return (
    <nav
      className={`fixed top-0 left-0 bg-[#293846] h-full transition-transform duration-300 z-40 overflow-y-auto overflow-x-hidden scroll-smooth no-scrollbar ${
        isSidebarOpen
          ? "translate-x-0 w-full md:w-60"
          : "-translate-x-full md:translate-x-0"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center py-4">
        <img
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          className="py-2 px-2"
        />
      </div>

      {/* Dropdown Example */}
      <div className="px-4">
        <Dropdown Items={MerchantList} />
      </div>

      {/* Menu List */}
      <div className="mt-4">
        <ul>
          {MenuList.map((menu, index) => (
            <li
              key={index}
              onClick={() => handleMenuClick(menu.name)}
              className={`text-sm font-medium flex items-center gap-2 px-4 py-2 cursor-pointer ${
                activeMenu === menu.name
                  ? "bg-[red] text-white"
                  : "text-white hover:bg-[#56595c]"
              }`}
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
  );
};

export default Sidebar;
