import GlobalTable from "../../components/Table/Global/GlobalTable";
import Layout from "../Layout/Layout";
import { OrderData } from "../../components/Table/data";
import Dropdown from "../../components/Dropdown/Dropdown";
import { DateRange } from "../../utils/Constants";
import { useState } from "react";
import DatePicker from "react-datepicker";

const Order = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Layout>
      <div>
        <div>
          <div className="flex flex-row gap-2 items-center">
            <Dropdown Items={DateRange} Light={true} />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="p-[5px] rounded-md"
            />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="p-[5px] rounded-md"
            />
          </div>
        </div>
        <GlobalTable data={OrderData} />
      </div>
    </Layout>
  );
};

export default Order;
