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
      <div className="">
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
        <div className="w-60% h-96 chart-container mt-4">
          <div className="text-lg font-semibold py-2 px-7">
            SELECT AN ACCOUNT
          </div>
          <div className="py-1 px-5">
            <Dropdown Items={people} Light={true} />
          </div>

          <Linechart title="Last 6 Months" legend="right" />
        </div>
      </div>
    </Layout>
  );
};

export default Global;
