import Layout from "../Layout/Layout";
import GlobalTable from "../../components/Table/Global/GlobalTable";
import Dropdown from "../../components/Dropdown/Dropdown";
import { Linechart } from "../../components/charts/Linecharts/Linechart";
import { data } from "../../components/Table/data";
import { MerchantList } from "../../utils/Constants";
import { GlobalDateRange } from "../../utils/Constants";
import { useEffect, useRef, useState } from "react";
import { getDateRange } from "../../utils/dateUtils";
import { useGlobal } from "./service.global";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { GlobalData } from "../../store/getGlobalSlice";

const Global = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const globalDataTable = useSelector((state: RootState) => state.globalData);
  const lastGlobalDataRef = useRef(globalDataTable);
  const dispatch = useDispatch();
  const {
    data: global,
    refetch,
    isLoading,
  } = useGlobal({
    startDate: startDate?.toISOString() ?? "",
    endDate: endDate?.toISOString() ?? "",
  });
  useEffect(() => {
    if (
      global &&
      JSON.stringify(global) !== JSON.stringify(lastGlobalDataRef.current)
    ) {
      dispatch(GlobalData(global));
      lastGlobalDataRef.current = global;
    }
  }, [global, dispatch]);

  const handleDropdownChange = (selectedItem: {
    id: number | string;
    name: string;
  }) => {
    const { startDate, endDate } = getDateRange(selectedItem.name);
    setStartDate(startDate ? new Date(startDate) : null);
    setEndDate(endDate ? new Date(endDate) : null);
    refetch();
  };

  return (
    <Layout>
      <div className="w-full bg-white/50  border-gray-500 rounded-xl flex flex-col p-1 mt-4">
        <div className="px-4 py-2">
          <div className="text-sm text-black font-semibold py-2 px-4">
            SELECT DATE RANGE
          </div>
          <div className="py-1 px-1">
            <Dropdown
              Items={GlobalDateRange}
              Light={true}
              onChange={handleDropdownChange}
            />
          </div>
        </div>
        <GlobalTable data={globalDataTable} />
      </div>
      <div className="w-full bg-white/50  border-gray-500 rounded-xl flex flex-col p-1 mt-4">
        <div className="text-sm text-black font-semibold py-2 px-7 ">
          SELECT AN ACCOUNT
        </div>
        <div className="py-1 px-5">
          <Dropdown Items={MerchantList} Light={true} />
        </div>

        <div className="w-full h-1/2 flex items-center justify-center">
          <Linechart title="Last 6 Months" legend="right" />
        </div>
      </div>
    </Layout>
  );
};

export default Global;
