import Layout from "../Layout/Layout";
import GlobalTable from "../../components/Table/Global/GlobalTable";
import Dropdown from "../../components/Dropdown/Dropdown";
import { Linechart } from "../../components/charts/Linecharts/Linechart";
import { data } from "../../components/Table/data";
const people = [
  { id: 1, name: "Last 30 Days" },
  { id: 2, name: "This Month" },
  { id: 3, name: "Last Month" },
];

const Global = () => {
  return (
    <Layout>
      <div className="chart-container">
        <div className="px-4 py-2">
          <div className="text-lg font-semibold py-2 px-4">
            SELECT DATE RANGE
          </div>
          <div className="py-1 px-1">
            <Dropdown Items={people} Light={true} />
          </div>
        </div>
        <GlobalTable data={data} />
      </div>
      <div className="w-full bg-white/50  border-gray-500 rounded-xl flex flex-col p-1 mt-4">
        <div className="text-lg font-semibold py-2 px-7 ">
          SELECT AN ACCOUNT
        </div>

        <Dropdown Items={people} Light={true} />

        <div className="w-full h-1/2 flex items-center justify-center">
          <Linechart title="Last 6 Months" legend="right" />
        </div>
      </div>
    </Layout>
  );
};

export default Global;
