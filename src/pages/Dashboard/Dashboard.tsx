import { Linechart } from "../../components/charts/Linecharts/Linechart";
import TransposedTable from "../../components/Table/Table";
import Layout from "../Layout/Layout";
import { useQuery } from "@tanstack/react-query";
interface ChartheadingProps {
  ChartName: string;
  Value: string;
}

const Chartheading = ({ ChartName, Value }: ChartheadingProps) => {
  return (
    <div className="flex flex-row gap-2 items-start justify-start font-semibold">
      <h3>{ChartName}</h3> <h3>{Value}</h3>
    </div>
  );
};
const fetchDashboard = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ENDPOINT}/api/v1/sales/dashboard?startDate=2024-12-25&endDate=2024-12-30`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response;
};
const Dashboard = () => {
  const info = useQuery({ queryKey: ["todos"], queryFn: fetchDashboard });
  console.log(info);
  return (
    <Layout>
      <div className="w-full  h-full overflow-x-hidden p-4 mx-auto">
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="chart-container">
            <Chartheading ChartName="Total Sales" Value="200" />
            <Linechart title="Total Sales" />
          </div>
          <div className="chart-container ">
            <Chartheading ChartName="Total Profit" Value="300" />
            <Linechart title="Total Profit" />
          </div>
          <div className="chart-container ">
            <Chartheading ChartName="Total Order" Value="500" />
            <Linechart title="Total Order" />
          </div>
          <div className="chart-container ">
            <Chartheading ChartName="Average Order" Value="900" />
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
