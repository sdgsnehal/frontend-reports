import Layout from "../Layout/Layout";
import GlobalTable from "../../components/Table/Global/GlobalTable";
import Dropdown from "../../components/Dropdown/Dropdown";
const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

const Global = () => {
  return (
    <Layout>
      <div>
        <div className=" ">
          <div>SELECT DATE RANGE</div>
          <span>
            <Dropdown Items={people} />
          </span>
        </div>
        <GlobalTable />
      </div>
    </Layout>
  );
};

export default Global;
