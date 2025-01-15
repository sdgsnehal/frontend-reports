import GlobalTable from "../../components/Table/Global/GlobalTable";
import Layout from "../Layout/Layout";
import { OrderData } from "../../components/Table/data";

const Order = () => {
  return (
    <Layout>
      <div>
        <GlobalTable data={OrderData} />
      </div>
    </Layout>
  );
};

export default Order;
