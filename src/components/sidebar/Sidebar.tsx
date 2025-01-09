import Logo from "../../assets/react.svg";
import { MdDashboard } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { LuArrowDownUp } from "react-icons/lu";
import { FaChartPie } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { FaCamera } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

const MenuList = [
  {
    name: "Dashboard",
    Icon: MdDashboard,
    href: "/dashboard",
  },
  {
    name: "GlobalView",
    Icon: FaEarthAfrica,
    href: "/dashboard",
  },
  {
    name: "Orders",
    Icon: FaBoxOpen,
    href: "/dashboard",
  },
  {
    name: "Orders Summary",
    Icon: SlCalender,
    href: "/dashboard",
  },
  {
    name: "P&L Report",
    Icon: LuArrowDownUp,
    href: "/dashboard",
  },
  {
    name: "Profit by Product",
    Icon: FaChartPie,
    href: "/dashboard",
  },
  {
    name: "Inventory",
    Icon: FaBook,
    href: "/dashboard",
  },
  {
    name: "Refund",
    Icon: FaDollarSign,
    href: "/dashboard",
  },
  {
    name: "Inventory Planning",
    Icon: GoGraph,
    href: "/dashboard",
  },
  {
    name: "Snapshot",
    Icon: FaCamera,
    href: "/dashboard",
  },
  {
    name: "Return Orders",
    Icon: IoReload,
    href: "/dashboard",
  },
  {
    name: "Expenses",
    Icon: FaMoneyBillAlt,
    href: "/dashboard",
  },
];
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-60 bg-[#676a6c] h-full">
      <nav>
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
    </div>
  );
};

export default Sidebar;
