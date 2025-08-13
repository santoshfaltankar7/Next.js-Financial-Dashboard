import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function AssetsChart({ data }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-lg font-bold mb-2">Assets Under Management</h2>
      <Pie
        data={{
          labels: data.labels,
          datasets: [
            {
              data: data.data,
              backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
            },
          ],
        }}
      />
    </div>
  );
}
