import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function LeadsOverview({ data }) {
  const pieData = {
    labels: data.pie.labels,
    datasets: [
      {
        data: data.pie.data,
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
      },
    ],
  };

  const lineData = {
    labels: data.line.labels,
    datasets: [
      {
        label: "Leads",
        data: data.line.data,
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col md:flex-row gap-4 h-[400px]">
      {/* Pie chart takes 1/3 width on desktop */}
      <div className="md:w-1/3 w-full h-full">
        <Pie
          data={pieData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>

      {/* Line chart takes remaining space */}
      <div className="flex-1 h-full">
        <Line
          data={lineData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
}
