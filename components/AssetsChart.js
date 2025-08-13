import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function AssetsChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      {/* Title + Filter */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-blue-800">
          Assets Under Management
        </h2>
        <select className="border text-gray-700  rounded text-sm px-2 py-1">
          <option>Today</option>
          <option>Yesterday</option>
        </select>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Pie Chart */}
        <div className="flex justify-center">
          <div className="w-40 h-40">
            <Pie
              data={{
                labels: data.labels,
                datasets: [
                  {
                    data: data.data,
                    backgroundColor: ["#3b82f6", "#2563eb", "#06b6d4"], // Cash, Equity, Debt
                  },
                ],
              }}
              options={{
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>

        {/* Equity + Top Schemes */}
        <div>
          <h3 className="text-blue-600 font-semibold">Equity</h3>
          <p className="text-xl text-gray-700  font-bold">₹ 5.5 Crore</p>
          <h4 className="mt-2 font-semibold text-gray-800 text-sm">
            Top 5 Schemes
          </h4>
          <div className="mt-1 text-sm">
            <div className="flex justify-between text-gray-700  border-b py-1">
              <span>HDFC Equity Fund</span>
              <span className="text-blue-600">1.2%</span>
            </div>
            <div className="flex justify-between border-b text-gray-700  py-1">
              <span>HDFC Arbitrage Fund</span>
              <span className="text-blue-600">2.1%</span>
            </div>
            <div className="flex justify-between border-b text-gray-700  py-1">
              <span>HDFC Balanced Fund</span>
              <span className="text-blue-600">1.7%</span>
            </div>
            <div className="flex text-gray-700  justify-between border-b py-1">
              <span>HDFC Capital Builder Fund</span>
              <span className="text-blue-600">1.0%</span>
            </div>
            <div className="flex text-gray-700 justify-between py-1">
              <span>HDFC Core By Satellite Fund</span>
              <span className="text-blue-600">2.6%</span>
            </div>
          </div>
        </div>

        {/* Yesterday's Sales + Today's AUM */}
        <div className="text-center">
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Yesterday&apos;s Sales</p>
            <p className="text-2xl text-gray-700  font-bold">₹ 50,234</p>
            <p className="text-green-600 text-sm">(1.0%) ▲</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Today&apos;s AUM</p>
            <p className="text-xl text-gray-700  font-bold">₹ 20.45 Cr</p>
          </div>
        </div>
      </div>
    </div>
  );
}
