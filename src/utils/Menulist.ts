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

export const MenuList = [
  {
    name: "Dashboard",
    Icon: MdDashboard,
    href: "/dashboard",
  },
  {
    name: "GlobalView",
    Icon: FaEarthAfrica,
    href: "/global",
  },
  {
    name: "Orders",
    Icon: FaBoxOpen,
    href: "/order",
  },
  {
    name: "Orders Summary",
    Icon: SlCalender,
    href: "/summary",
  },
  {
    name: "P&L Report",
    Icon: LuArrowDownUp,
    href: "/report",
  },
  {
    name: "Profit by Product",
    Icon: FaChartPie,
    href: "/product",
  },
  {
    name: "Inventory",
    Icon: FaBook,
    href: "/inventory",
  },
  {
    name: "Refund",
    Icon: FaDollarSign,
    href: "/refund",
  },
  {
    name: "Inventory Planning",
    Icon: GoGraph,
    href: "/planning",
  },
  {
    name: "Snapshot",
    Icon: FaCamera,
    href: "/snapshot",
  },
  {
    name: "Return Orders",
    Icon: IoReload,
    href: "/return",
  },
  {
    name: "Expenses",
    Icon: FaMoneyBillAlt,
    href: "/expenses",
  },
];
