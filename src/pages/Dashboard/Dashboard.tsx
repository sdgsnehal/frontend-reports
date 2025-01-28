import { Linechart } from "../../components/charts/Linecharts/Linechart";
import DashboardDropdown from "../../components/Dropdown/Dashboard/DashboardDropdown";
import TransposedTable from "../../components/Table/Table";
import { data12, data6 } from "../../utils/Constants";
import Layout from "../Layout/Layout";
import Dailysummary from "../../components/Table/DailySummary/Dailysummary";
import CheckboxComponent from "../../components/checkbox/Checkbox";
import CardComponent from "../../components/card";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
interface ChartheadingProps {
  ChartName: string;
  Value: string | number;
}

const Chartheading = ({ ChartName, Value }: ChartheadingProps) => {
  return (
    <div className="flex flex-row gap-2 items-start justify-start font-semibold">
      <h3>{ChartName}</h3> <h3>{Value}</h3>
    </div>
  );
};

const Dashboard = () => {
  const data = useSelector((state: RootState) => state.dashboardData);

  return (
    <Layout>
      <div className="w-full  h-full overflow-x-hidden p-4 mx-auto">
        <div className="pb-4">
          <DashboardDropdown />
        </div>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="chart-container">
            <Chartheading
              ChartName="Total Sales"
              Value={data?.data?.totalSales}
            />
            <Linechart title="Total Sales" />
          </div>
          <div className="chart-container ">
            <Chartheading ChartName="Total Profit" Value={25} />
            <Linechart title="Total Profit" />
          </div>
          <div className="chart-container ">
            <Chartheading ChartName="Total Order" Value={data.data.quantity} />
            <Linechart title="Total Order" />
          </div>
          <div className="chart-container ">
            <Chartheading
              ChartName="Average Order"
              Value={data?.data?.totalAvgOrderValue.toFixed(2)}
            />
            <Linechart title="Average Order Value" />
          </div>
        </div>
        <div className="mt-6  bg-white/50 border-1 border-gray-500 rounded-xl flex items-center justify-center flex-col">
          <div>Last 6 month summary</div>
          <TransposedTable data={data12} />
        </div>
        <div className="mt-6  bg-white/50 border-1 border-gray-500 rounded-xl flex items-center justify-center flex-col">
          <div>Last 6 Days summary</div>
          <Dailysummary data={data6} />
        </div>
        <div className="flex items-center text-sm text-black font-medium">
          <p>Total Inventory turnout if sold at current | </p>
          <p> Full filled By:</p>
          <div className="flex p-2 gap-2">
            <CheckboxComponent />
            <p className="text-sm font-medium">ALL</p>
          </div>
          <div className="flex p-2 gap-2">
            <CheckboxComponent />
            <p className="text-sm font-medium">AFN</p>
          </div>
          <div className="flex p-2 gap-2">
            <CheckboxComponent />
            <p className="text-sm font-medium">MFN</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-2">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
