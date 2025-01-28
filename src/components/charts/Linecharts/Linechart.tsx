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

import { DailySales } from "../../../store/interfaces/interface";
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
  chartData: DailySales[];
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
  legend = "top",
  chartData,
}: LinechartProps) {
  const labels = chartData?.map((item) => item._id);
  const dailySalesData = chartData?.map((item) => item.dailySales);
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
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dailySalesData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: dailySalesData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
