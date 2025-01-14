import Layout from "../Layout/Layout";
import GlobalTable from "../../components/Table/Global/GlobalTable";
import Dropdown from "../../components/Dropdown/Dropdown";
const people = [
  { id: 1, name: "Last 30 Days" },
  { id: 2, name: "This Month" },
  { id: 3, name: "Last Month" },
];

const Global = () => {
  return (
    <Layout>
      <div>
        <div className=" ">
          <div>SELECT DATE RANGE</div>
          <span>
            <Dropdown Items={people} Light={true} />
          </span>
        </div>
        <GlobalTable />
      </div>
    </Layout>
  );
};

export default Global;
