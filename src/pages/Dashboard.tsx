import { Linechart } from "../components/charts/Linecharts/Linechart";
import TransposedTable from "../components/Table/Table";
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

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
