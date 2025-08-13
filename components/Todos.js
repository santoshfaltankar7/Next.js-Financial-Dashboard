import { useState } from "react";
import toast from "react-hot-toast";

export default function Todos({ todos }) {
  const [items, setItems] = useState(todos);

  const handleWish = (id, msg) => {
    toast.success(`Wished: ${msg}`);
  };

  const handleRemind = (id) => {
    setItems(items.map(t => t.id === id ? { ...t, reminded: true } : t));
    toast.success("Reminder sent");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-blue-500 text-lg">To-Do&apos;s</h2>
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {items.length}
        </span>
      </div>

      {/* Birthday Alerts */}
      <div className="mb-4">
        <div className="flex justify-between items-center border-b pb-1 mb-2">
          <h3 className="text-blue-600 font-semibold">Birthday Alerts</h3>
          <button
            className="border border-blue-500 text-blue-500 px-2 py-1 text-xs rounded hover:bg-gray-100"
            onClick={() => items.filter(i => i.type === "wish").forEach(i => handleWish(i.id, i.message))}
          >
            Wish All
          </button>
        </div>
        {items.filter(t => t.type === "wish").map(t => (
          <div key={t.id} className="flex text-gray-500 justify-between items-center py-1 border-b last:border-0">
            <span className="text-sm">{t.message}</span>
            <button
              onClick={() => handleWish(t.id, t.message)}
              className="text-blue-500 text-xs hover:underline"
            >
              Wish Now
            </button>
          </div>
        ))}
      </div>

      {/* Pending Transactions */}
      <div>
        <div className="flex justify-between items-center border-b pb-1 mb-2">
          <h3 className="text-blue-600 font-semibold">Pending Transaction</h3>
          <button
            className="border border-blue-500 text-blue-500 px-2 py-1 text-xs rounded hover:bg-gray-100"
            onClick={() => items.filter(i => i.type === "remind").forEach(i => handleRemind(i.id))}
          >
            Remind All
          </button>
        </div>
        {items.filter(t => t.type === "remind").map(t => (
          <div key={t.id} className="flex justify-between text-gray-500 items-center py-1 border-b last:border-0">
            <span className="text-sm">{t.message}</span>
            <button
              onClick={() => handleRemind(t.id)}
              className={`text-xs ${
                t.reminded
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-green-500 hover:underline"
              }`}
              disabled={t.reminded}
            >
              {t.reminded ? "Reminded" : "Remind"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
