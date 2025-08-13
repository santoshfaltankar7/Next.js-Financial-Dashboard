export default function TransactionSnapshot({ transactions }) {
  const status = transactions.status || { pending: 0, expired: 0, reversed: 0 };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      {/* Title */}
      <h2 className="font-bold mb-4 text-lg">Transaction Snapshot</h2>

      {/* Inflow & Outflow */}
      <div className="flex justify-around text-center">
        <div>
          <p className="text-green-600 text-lg">Inflow</p>
          <p className="text-2xl font-bold">{transactions.inflow} Cr</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {transactions.count.inflow} Transactions
          </p>
        </div>
        <div>
          <p className="text-red-600 text-lg">Outflow</p>
          <p className="text-2xl font-bold">{transactions.outflow} Cr</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {transactions.count.outflow} Transactions
          </p>
        </div>
      </div>

      {/* Status Badges */}
      <div className="flex justify-around mt-4 text-sm">
        <span className="bg-yellow-100 dark:bg-yellow-800 px-3 py-1 rounded">
          Pending: {status.pending}
        </span>
        <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
          Expired: {status.expired}
        </span>
        <span className="bg-red-100 dark:bg-red-800 px-3 py-1 rounded">
          Reversed: {status.reversed}
        </span>
      </div>
    </div>
  );
}
