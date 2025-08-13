import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function MarketOverview({ market }) {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded shadow-sm">
      {/* NSE Card */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
           
            <span className="text-gray-500 font-semibold">NSE</span>
          </div>
          <div className="text-right">
            <p className="text-xl text-gray-500 font-bold">{market.nse.value}</p>
            <p
              className={`flex items-center gap-1 text-sm ${
                market.nse.change > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {market.nse.change > 0 ? (
                <FaArrowUp className="inline" />
              ) : (
                <FaArrowDown className="inline" />
              )}
              {market.nse.change} ({market.nse.percentChange}%)
            </p>
          </div>
        </div>
      </div>

      {/* BSE Card */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
           
            <span className="text-gray-500 font-semibold">BSE</span>
          </div>
          <div className="text-right">
            <p className="text-xl text-gray-500 font-bold">{market.bse.value}</p>
            <p
              className={`flex items-center gap-1 text-sm ${
                market.bse.change > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {market.bse.change > 0 ? (
                <FaArrowUp className="inline" />
              ) : (
                <FaArrowDown className="inline" />
              )}
              {market.bse.change} ({market.bse.percentChange}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
