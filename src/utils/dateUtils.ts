import dayjs from "dayjs";

export const getDateRange = (selectedRange: string) => {
  const today = dayjs();
  let startDate, endDate;

  switch (selectedRange) {
    case "Today":
      startDate = endDate = today;
      break;

    case "Yesterday":
      startDate = endDate = today.subtract(1, "day");
      break;

    case "Last 7 Days":
      startDate = today.subtract(7, "day");
      endDate = today;
      break;

    case "Last 30 Days":
      startDate = today.subtract(30, "day");
      endDate = today;
      break;

    case "Last 90 Days":
      startDate = today.subtract(90, "day");
      endDate = today;
      break;

    case "Last Month":
      startDate = today.subtract(1, "month").startOf("month");
      endDate = today.subtract(1, "month").endOf("month");
      break;

    case "Last Year":
      startDate = today.subtract(1, "year").startOf("year");
      endDate = today.subtract(1, "year").endOf("year");
      break;

    case "Last 12 Months":
      startDate = today.subtract(12, "month");
      endDate = today;
      break;

    case "Week To Date":
      startDate = today.startOf("week");
      endDate = today;
      break;

    case "Month To Date":
      startDate = today.startOf("month");
      endDate = today;
      break;

    case "Quarter To Date":
      startDate = today.startOf("quarter");
      endDate = today;
      break;

    case "Year To Date":
      startDate = today.startOf("year");
      endDate = today;
      break;

    case "4th Quarter":
      startDate = today.year(today.year()).month(9).startOf("month"); // October
      endDate = today.year(today.year()).month(11).endOf("month"); // December
      break;

    case "3rd Quarter":
      startDate = today.year(today.year()).month(6).startOf("month"); // July
      endDate = today.year(today.year()).month(8).endOf("month"); // September
      break;

    case "2nd Quarter":
      startDate = today.year(today.year()).month(3).startOf("month"); // April
      endDate = today.year(today.year()).month(5).endOf("month"); // June
      break;

    case "1st Quarter":
      startDate = today.year(today.year()).month(0).startOf("month"); // January
      endDate = today.year(today.year()).month(2).endOf("month"); // March
      break;

    case "Custom":
      startDate = today;
      endDate = today;
      break;

    default:
      startDate = endDate = today;
      break;
  }

  return {
    startDate: startDate ? startDate.format("YYYY-MM-DD") : null,
    endDate: endDate ? endDate.format("YYYY-MM-DD") : null,
  };
};
