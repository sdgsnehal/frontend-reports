import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Label,
} from "@headlessui/react";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { DateRange } from "../../../utils/Constants";
import DatePicker from "react-datepicker";
import CheckboxComponent from "../../checkbox/Checkbox";
import {
  ChevronDownIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/20/solid";
import { useQuery, useQueryClient } from "@tanstack/react-query";
type MyModalProps = {
  onDataFetched: (data: any) => void;
};

export default function MyModal({ onDataFetched }: MyModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const queryClient = useQueryClient();

  const fetchDashboard = async ({
    queryKey,
  }: {
    queryKey: [string, { startDate: Date | null; endDate: Date | null }];
  }) => {
    const [_key, { startDate, endDate }] = queryKey;

    if (!startDate || !endDate) {
      throw new Error("Start and end dates are required");
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/sales/dashboard?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };
  const { data, isSuccess } = useQuery({
    queryKey: ["dashboard", { startDate, endDate }],
    queryFn: fetchDashboard,
    enabled: Boolean(startDate && endDate),
  });
  if (isSuccess) {
    onDataFetched(data.data);
  }
  function apply() {
    if (startDate && endDate) {
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
      close();
    } else {
      console.error("Please select valid start and end dates");
    }
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-white flex flex-row gap-1 items-center py-2 px-4 text-sm font-medium text-black  focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        <CalendarDateRangeIcon className="w-6 h-6" />
        Select Date Range
        <ChevronDownIcon className="w-6 h-6" />
      </Button>

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
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out border border-gray-300 data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="p-2">
                <p className="text-sm font-medium">Date Range</p>
                <Dropdown Light={true} Items={DateRange} />
              </div>
              <div className="flex gap-2 justify-evenly p-2">
                <div>
                  <p className="text-sm font-medium">Starting</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="p-[5px] rounded-md"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium">Ending</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setEndDate(date)}
                    className="p-[5px] rounded-md"
                  />
                </div>
              </div>
              <div className="flex p-2 gap-2">
                <CheckboxComponent />
                <p className="text-sm font-medium">
                  Compare to previous Period
                </p>
              </div>

              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={apply}
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
