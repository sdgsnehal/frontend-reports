import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import {
  DailySales,
  DailyOrders,
  DailyAvgOrderValue,
  DailySpend,
} from "../../../store/interfaces/interface";
type LegendPosition =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "center"
  | "chartArea";
interface LinechartProps {
  title: string;
  legend?: LegendPosition;
  chartData: DailySales[] | DailyOrders[] | DailyAvgOrderValue[] | DailySpend[];
  compareChartData:
    | DailySales[]
    | DailySpend[]
    | DailyOrders[]
    | DailyAvgOrderValue[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Linechart({
  title,
  legend = "bottom",
  chartData,
  compareChartData,
}: LinechartProps) {
  const labels = chartData?.map((item) => Object.values(item)?.[0]);
  const dailySalesData = chartData?.map((item) => Object.values(item)?.[1]);
  const dailySalesLabels = chartData?.map(
    (item) => `${Object.values(item)?.[0]}`
  );
  const compareData = compareChartData?.map((item) => Object.values(item)?.[1]);
  const compareLabels = compareChartData?.map(
    (item) => ` ${Object.values(item)?.[0]}`
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: legend,
      },
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const index = context.dataIndex;
            const dailyLabel = dailySalesLabels[index] ?? "-";
            const compareLabel = compareLabels[index] ?? "-";
            const dailyValue = dailySalesData[index] ?? "-";
            const compareValue = compareData[index] ?? "-";

            return `${dailyLabel}:${dailyValue}, ${compareLabel}:${compareValue}`;
          },
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dailySalesData,
        borderColor: "rgb(39, 68, 93)",
        backgroundColor: "rgba(39, 68, 93,0.5)",
      },
      {
        label: "Dataset 2",
        data: compareData,
        borderColor: "rgb(113, 187, 178)",
        backgroundColor: "rgba(113, 187, 178,0.5)",
        borderWidth: 1,
      },
    ],
  };
  return <Line options={options} data={data} />;
}
