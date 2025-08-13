export default function TransactionSnapshot({ transactions }) {
  const status = transactions.status || { pending: 0, expired: 0, reversed: 0 };

  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      {/* Title */}
      <h2 className="font-bold text-blue-800 text-lg mb-4">Transaction Snapshot</h2>

      {/* Inflow & Outflow */}
      <div className="grid grid-cols-2 gap-4">
        {/* Inflow */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-blue-600 text-sm flex items-center justify-center gap-1">
            <span className="text-lg">⬇</span> INFLOW
          </div>
          <p className="text-2xl font-bold">{transactions.inflow} Crore</p>
          <p className="text-gray-500 text-sm">
            {transactions.count.inflow} Transaction
          </p>
        </div>

        {/* Outflow */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-blue-600 text-sm flex items-center justify-center gap-1">
            <span className="text-lg">⬆</span> OUTFLOW
          </div>
          <p className="text-2xl font-bold">{transactions.outflow} Crore</p>
          <p className="text-gray-500 text-sm">
            {transactions.count.outflow} Transaction
          </p>
        </div>
      </div>

      {/* Status Section */}
      <div className="mt-6">
        <h3 className="text-center text-gray-500 font-semibold mb-3">STATUS</h3>
        <div className="flex justify-around text-sm font-medium">
          <span className="bg-green-50 border border-green-200 text-green-600 px-4 py-2 rounded-md">
            {status.pending} PENDING
          </span>
          <span className="bg-gray-50 border border-gray-200 text-gray-600 px-4 py-2 rounded-md">
            {status.expired} EXPIRED
          </span>
          <span className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md">
            {status.reversed} REVERSED
          </span>
        </div>
      </div>
    </div>
  );
}
