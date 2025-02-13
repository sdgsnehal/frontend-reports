import { Linechart } from "../../components/charts/Linecharts/Linechart";
import DashboardDropdown from "../../components/Dropdown/Dashboard/DashboardDropdown";
import TransposedTable from "../../components/Table/Table";

import Layout from "../Layout/Layout";
import Dailysummary from "../../components/Table/DailySummary/Dailysummary";
import CardComponent from "../../components/card";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useLoading } from "../../components/loader/loadingContext";
import Loader from "../../components/loader/loader";
import { useForm, Controller } from "react-hook-form";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/16/solid";
interface ChartheadingProps {
  ChartName: string;
  Value: string | number;
}
type FormValues = {
  selectedOption: string;
};

const Chartheading = ({ ChartName, Value }: ChartheadingProps) => {
  return (
    <div className="flex flex-row text-black gap-2 items-start justify-start font-semibold">
      <h3>{ChartName}</h3> <h3>{Value}</h3>
    </div>
  );
};

const Dashboard = () => {
  const data = useSelector((state: RootState) => state.dashboardData);
  const { loading } = useLoading();
  const { control, setValue } = useForm<FormValues>({
    defaultValues: {
      selectedOption: "",
    },
  });

  return (
    <Layout>
      <div className="w-full  h-full overflow-x-hidden p-4 mx-auto">
        <div className="pb-4 flex items-center justify-between">
          <DashboardDropdown />
          <span className="bg-blue-400 p-2 text-black flex items-center justify-center gap-1 cursor-pointer rounded-full hover:cursor-pointer">
            <ArrowPathRoundedSquareIcon className="w-4 h-4" />
          </span>
        </div>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="chart-container">
            <Chartheading
              ChartName="Total Sales"
              Value={data?.data?.totalSales}
            />
            <Linechart
              title="Total Sales"
              chartData={data?.data?.dailySales}
              compareChartData={data?.data?.dailySalesCompare}
            />
          </div>
          <div className="chart-container ">
            <Chartheading
              ChartName="Total Spend"
              Value={data?.data?.totalSpend?.toFixed(2)}
            />
            <Linechart
              title="Total Spend"
              chartData={data?.data?.dailySpend}
              compareChartData={data?.data?.compareDailySpend}
            />
          </div>
          <div className="chart-container ">
            <Chartheading ChartName="Total Order" Value={data.data.quantity} />
            <Linechart
              title="Total Order"
              chartData={data?.data?.dailyOrders}
              compareChartData={data?.data?.dailyOrdersCompare}

            />
          </div>
          <div className="chart-container ">
            <Chartheading
              ChartName="Average Order"
              Value={data?.data?.totalAvgOrderValue.toFixed(2)}
            />
            <Linechart
              title="Average Order Value"
              chartData={data?.data?.dailyAvgOrderValue}
              compareChartData={data?.data?.dailyAvgOrderValueCompare}
            />
          </div>
        </div>
        <div className="mt-6  bg-white/50 border-1 border-gray-500 rounded-xl flex items-center justify-center flex-col">
          <div className="text-black">Last 6 month summary</div>
          <TransposedTable data={data.data?.last6MonthsSummary} />
        </div>
        <div className="mt-6  bg-white/50 border-1 border-gray-500 rounded-xl flex items-center justify-center flex-col">
          <div className="text-black">Last 6 Days summary</div>
          <Dailysummary data={data.data?.last7DaysSummary} />
        </div>
        <div className="flex items-center text-sm text-black font-medium">
          <p>Total Inventory turnout if sold at current | </p>
          <p> Full filled By:</p>
          <div className="flex flex-row gap-2">
            {["ALL", "AFN", "MFN"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Controller
                  name="selectedOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="radio"
                      checked={field.value === option}
                      onChange={() => setValue("selectedOption", option)}
                    />
                  )}
                />
                {option}
              </label>
            ))}
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
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
