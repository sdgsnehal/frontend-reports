import Layout from "../Layout/Layout";
import Example from "../../components/Dropdown/Dropdown";
import GlobalTable from "../../components/Table/Global/GlobalTable";

const Global = () => {
  return (
    <Layout>
      <div className=" ">
        <div>SELECT DATE RANGE</div>
        <span><Example /></span>
      </div>
      <GlobalTable/>
    </Layout>
  );
};

export default Global;
