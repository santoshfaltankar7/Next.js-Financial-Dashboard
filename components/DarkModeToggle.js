import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      className="px-3 py-1 border rounded"
      onClick={() => setDark(!dark)}
    >
      {dark ? "Light" : "Dark"} Mode
    </button>
  );
}
