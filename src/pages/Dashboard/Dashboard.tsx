import { useState } from "react";
import { Linechart } from "../../components/charts/Linecharts/Linechart";
import DashboardDropdown from "../../components/Dropdown/Dashboard/DashboardDropdown";
import TransposedTable from "../../components/Table/Table";

import Layout from "../Layout/Layout";
interface DashboardData {
  totalSales: number;
  totalProfit: number;
  totalOrder: number;
  averageOrderValue: number;
}

interface ChartheadingProps {
  ChartName: string;
  Value: number;
}

const Chartheading = ({ ChartName, Value }: ChartheadingProps) => {
  return (
    <div className="flex flex-row gap-2 items-start justify-start font-semibold">
      <h3>{ChartName}</h3> <h3>{Value}</h3>
    </div>
  );
};

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>(null);
  const handleFetchedData = (data: any) => {
    console.log("Fetched data from modal:", data);
    setDashboardData(data); // Store the data or trigger further actions
  };
  console.log(dashboardData);
  return (
    <Layout>
      <div className="w-full  h-full overflow-x-hidden p-4 mx-auto">
        <div className="pb-4">
          <DashboardDropdown onDataFetched={handleFetchedData} />
        </div>

        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="chart-container">
            <Chartheading
              ChartName="Total Sales"
              Value={dashboardData?.totalSales}
            />
            <Linechart title="Total Sales" />
          </div>
          <div className="chart-container ">
            <Chartheading
              ChartName="Total Profit"
              Value={dashboardData?.totalSales}
            />
            <Linechart title="Total Profit" />
          </div>
          <div className="chart-container ">
            <Chartheading
              ChartName="Total Order"
              Value={dashboardData?.quantity}
            />
            <Linechart title="Total Order" />
          </div>
          <div className="chart-container ">
            <Chartheading
              ChartName="Average Order"
              Value={dashboardData?.totalAvgOrderValue}
            />
            <Linechart title="Average Order Value" />
          </div>
        </div>
        <div className="mt-6  bg-white/50 border-1 border-gray-500 rounded-xl flex items-center justify-center flex-col">
          <div>Last 6 month summary</div>
          <TransposedTable />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
