import { Linechart } from "../components/charts/Linecharts/Linechart";
import TransposedTable from "../components/Table/Table";

const Dashboard = () => {
  return (
    <div className="w-full  h-full overflow-x-hidden p-4 mx-auto">
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto">
        <div className="w-full  bg-white/50 border-1 border-gray-500 rounded-xl">
          <Linechart title="Total Sales" />
        </div>
        <div className="w-full ">
          <Linechart title="Total Profit" />
        </div>
        <div className="w-full ">
          <Linechart title="Total Order" />
        </div>
        <div className="w-full ">
          <Linechart title="Average Order Value" />
        </div>
      </div>
      <div className="mt-6">

          <TransposedTable />
     
      </div>
    </div>
  );
};

export default Dashboard;
