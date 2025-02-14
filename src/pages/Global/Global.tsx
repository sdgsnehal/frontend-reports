import Layout from "../Layout/Layout";
import GlobalTable from "../../components/Table/Global/GlobalTable";
// import Dropdown from "../../components/Dropdown/Dropdown";
// import { Linechart } from "../../components/charts/Linecharts/Linechart";
// import { MerchantList } from "../../utils/Constants";
import { useEffect, useRef, useState } from "react";
import { useGlobal } from "./service.global";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { GlobalData } from "../../store/getGlobalSlice";
import DatePicker from "react-datepicker";
import ButtonElement from "../../components/Button";
import { useLoading } from "../../components/loader/loadingContext";
import Loader from "../../components/loader/loader";

const Global = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const globalDataTable = useSelector((state: RootState) => state.globalData);
  const lastGlobalDataRef = useRef(globalDataTable);
  const { loading, setLoading } = useLoading();
  const dispatch = useDispatch();
  const {
    data: global,
    refetch,
    isLoading,
    isSuccess,
    isError,
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
  if (isLoading) {
    setLoading(isLoading);
  }
  if (isSuccess) {
    setLoading(false);
  }
  if (isError) {
    setLoading(false);
  }
  const handleDropdownChange = (dates: [Date | null, Date | null]) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end || null);
    }
  };
  const handleGetReports = () => {
    if (startDate !== null && endDate !== null) {
      refetch();
    }
  };
  return (
    <Layout>
      <div className="w-full bg-white/50  border-gray-500 rounded-xl flex flex-col p-1 mt-4">
        <div className="px-4 py-2 flex justify-items-start gap-2 items-center  ">
          <div className="text-sm text-black font-semibold py-2 px-4">
            SELECT DATE RANGE
          </div>
          <div className="py-1 px-1">
            <DatePicker
              selected={startDate}
              onChange={handleDropdownChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              showIcon
              className="p-[5px] py-2 rounded-md bg-white text-black text-sm font-semibold"
            />
          </div>
          <ButtonElement text="Get Report" onClick={handleGetReports} />
        </div>
        <GlobalTable data={globalDataTable} />
      </div>
      <div className="w-full bg-white/50  border-gray-500 rounded-xl flex flex-col p-1 mt-4">
        <div className="text-sm text-black font-semibold py-2 px-7 ">
          SELECT AN ACCOUNT
        </div>
        <div className="py-1 px-5">
          {/* <Dropdown Items={MerchantList} Light={true}  /> */}
        </div>

        <div className="w-full h-1/2 flex items-center justify-center">
          {/* <Linechart title="Last 6 Months" legend="right" /> */}
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
    </Layout>
  );
};

export default Global;
