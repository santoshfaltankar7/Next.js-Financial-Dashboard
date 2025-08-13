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
    <div className="bg-white dark:bg-gray-800 text-white p-4 rounded-lg shadow">
      <h2 className="font-bold mb-4">To-Do&apos;s</h2>
      {items.map(t => (
        <div
          key={t.id}
          className="flex justify-between items-center mb-2 border-b pb-2"
        >
          <span className="text-gray-100">{t.message}</span>

          {t.type === "wish" ? (
            <button
              onClick={() => handleWish(t.id, t.message)}
              className="text-blue-500 hover:underline"
            >
              Wish
            </button>
          ) : (
            <button
              onClick={() => handleRemind(t.id)}
              className={`${
                t.reminded
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-green-500 hover:underline"
              }`}
              disabled={t.reminded}
            >
              {t.reminded ? "Reminded" : "Remind"}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
