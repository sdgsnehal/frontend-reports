import GlobalTable from "../../components/Table/Global/GlobalTable";
import Layout from "../Layout/Layout";
import { OrderData } from "../../components/Table/data";
import Dropdown from "../../components/Dropdown/Dropdown";
import { DateRange } from "../../utils/Constants";
import { useState } from "react";
import DatePicker from "react-datepicker";

const Order = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <Layout>
      <div className="chart-container">
        <div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
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
            <button className="bg-blue-400 p-2">Get Reports</button>
            <div className="md:ml-10">
              <div className="font-medium">Total Revenue</div>
              <div className="font-medium">Total Cost</div>
              <div className="font-medium">Total Profit</div>
              <div className="font-medium">Sales Count</div>
            </div>
          </div>
        </div>
        <GlobalTable data={OrderData} />
      </div>
    </Layout>
  );
};

export default Order;
