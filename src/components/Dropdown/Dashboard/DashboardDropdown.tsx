import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import Dropdown from "../Dropdown";
import { DateRange, CompareDateRange } from "../../../utils/Constants";
import DatePicker from "react-datepicker";
import CheckboxComponent from "../../checkbox/Checkbox";
import { useSalesDashboard } from "../../../pages/Dashboard/service.dashboard";
import {
  ChevronDownIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useDispatch } from "react-redux";
import { DashboardData } from "../../../store/getDashboardSlice";
import { getDateRange, getPreviousDateRange } from "../../../utils/dateUtils";
import { useLoading } from "../../loader/loadingContext";

export default function MyModal() {
  const dispatch = useDispatch();
  const { setLoading } = useLoading();
  const dashboardData = useSelector((state: RootState) => state.dashboardData);
  const lastGlobalDataRef = useRef(dashboardData);
  const [enableDatepicker, setEnableDatePicker] = useState<boolean>(true);
  const merchantId = useSelector((state: RootState) => state.merchant.id);
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [enableCheckbox, setEnableCheckbox] = useState<boolean>(true);
  const [previousDateRange, setPreviousDateRange] = useState<{
    startDate: string | null;
    endDate: string | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const { data, refetch, isLoading, error } = useSalesDashboard({
    startDate: startDate?.toISOString() ?? "",
    endDate: endDate?.toISOString() ?? "",
    merchantId,
    isCompare: enableCheckbox,
    startCompareDate: previousDateRange.startDate ?? "",
    endCompareDate: previousDateRange.endDate ?? "",
  });
  if (isLoading) {
    setLoading(isLoading);
  }
  if (error) {
    setLoading(false);
  }

  useEffect(() => {
    if (
      data &&
      JSON.stringify(data) !== JSON.stringify(lastGlobalDataRef.current)
    ) {
      dispatch(DashboardData(data));
      lastGlobalDataRef.current = data;
      setLoading(false);
    }
  }, [data, dispatch]);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const handleDropdownChange = (selectedItem: {
    id: number | string;
    name: string;
  }) => {
    if (selectedItem.name === "Custom") {
      setEnableDatePicker(false);
    }
    const { startDate, endDate } = getDateRange(selectedItem.name);
    setStartDate(startDate ? new Date(startDate) : null);
    setEndDate(endDate ? new Date(endDate) : null);
  };
  const handleCompareDateChange = (selectedItem: {
    id: number | string;
    name: string;
  }) => {
    if (!enableCheckbox) return; // Ensure the checkbox is enabled before setting values

    const prevRange = getPreviousDateRange(
      startDate ? startDate.toISOString() : null,
      endDate ? endDate.toISOString() : null,
      selectedItem.name === "Previous Year"
        ? "previous_year"
        : "previous_period"
    );

    setPreviousDateRange(prevRange);
  };
  const CheckboxChange = (enable: boolean) => {
    setEnableCheckbox(enable);
  };
  return (
    <>
      <div className="flex flex-row gap-2">
        <Button
          onClick={open}
          className="rounded-md bg-white flex flex-row gap-1 items-center py-2 px-4 text-sm font-medium text-black  focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white"
        >
          <CalendarDateRangeIcon className="w-6 h-6" />
          Select Date Range
          <ChevronDownIcon className="w-6 h-6" />
        </Button>
        <div className="rounded-md min-w-max bg-white flex flex-row gap-1 items-center py-2 px-4 text-sm font-medium text-black  focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white">
          compare to {previousDateRange.startDate} - {previousDateRange.endDate}
        </div>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-20 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-20 w-screen h-full overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out border border-gray-300 data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="p-2">
                <p className="text-sm text-black font-medium">Date Range</p>
                <Dropdown
                  Light={true}
                  Items={DateRange}
                  onChange={handleDropdownChange}
                />
              </div>
              <div className="flex gap-2 justify-evenly p-2">
                <div>
                  <p className="text-smt text-black font-medium">Starting</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="p-[5px] rounded-md bg-white text-black"
                    showIcon
                    disabled={enableDatepicker}
                  />
                </div>

                <div>
                  <p className="text-sm text-black font-medium">Ending</p>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="p-[5px] rounded-md bg-white text-black"
                    showIcon
                    disabled={enableDatepicker}
                  />
                </div>
              </div>
              <div className="flex p-2 gap-2">
                <CheckboxComponent onChange={CheckboxChange} />
                <p className="text-sm text-black font-medium">
                  Compare to Previous Date
                </p>
              </div>
              <div className="p-2">
                <p className="text-sm text-black font-medium">Compare to</p>
                <Dropdown
                  Light={true}
                  Items={CompareDateRange}
                  onChange={handleCompareDateChange}
                  disabled={!enableCheckbox}
                />
              </div>

              <div className="mt-4 flex justify-center">
                <Button
                  className="w-52 inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => {
                    refetch();
                    close();
                  }}
                >
                  Apply
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
