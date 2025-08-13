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
        backgroundColor: ["#2563eb", "#1e40af", "#0ea5e9"],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: data.line.labels,
    datasets: [
      {
        label: "Prospects",
        data: data.line.data,
        borderColor: "#0ea5e9",
        backgroundColor: "#bae6fd",
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: "#0ea5e9",
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow border border-gray-200">
      <h2 className="text-blue-800 font-bold mb-4">Leads Overview</h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Pie Chart */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-center text-gray-500 font-semibold mb-2">Channels</h3>
          <div className="h-48">
            <Pie
              data={pieData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: "bottom" },
                },
              }}
            />
          </div>
        </div>

        {/* Line Chart */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-center text-gray-500  font-semibold mb-2">Prospect Comparison</h3>
          <div className="bg-blue-300 text-center text-2xl font-bold py-1 mb-2 rounded">
            6,000
          </div>
          <div className="h-48">
            <Line
              data={lineData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
