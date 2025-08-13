import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Layout({ children }) {
  return (
    <div className="p-4">
      <nav className="flex justify-between items-center mb-6">
        <div className="space-x-4">
          <Link href="/">Dashboard</Link>
          <Link href="/investors">Investors</Link>
        </div>
        <DarkModeToggle />
      </nav>
      {children}
    </div>
  );
}
