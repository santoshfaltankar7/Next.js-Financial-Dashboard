export default function MarketOverview({ market }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="font-bold mb-4">Market Overview</h2>
      <div className="flex justify-around text-center">
        {/* NSE */}
        <div>
          <p className="font-semibold">NSE</p>
          <p className="text-xl">{market.nse.value}</p>
          <p
            className={
              market.nse.change > 0 ? "text-green-500" : "text-red-500"
            }
          >
            {market.nse.change}%{" "}
            {market.nse.change > 0 ? "↑" : "↓"}
          </p>
        </div>

        {/* BSE */}
        <div>
          <p className="font-semibold">BSE</p>
          <p className="text-xl">{market.bse.value}</p>
          <p
            className={
              market.bse.change > 0 ? "text-green-500" : "text-red-500"
            }
          >
            {market.bse.change}%{" "}
            {market.bse.change > 0 ? "↑" : "↓"}
          </p>
        </div>
      </div>
    </div>
  );
}
