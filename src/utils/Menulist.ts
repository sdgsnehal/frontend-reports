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
