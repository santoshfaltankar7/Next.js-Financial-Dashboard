import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-200">
      {/* Navbar */}
      <nav className="bg-blue-300 text-white px-6 py-3 shadow flex justify-between items-center">
        <div className="space-x-6 font-medium">
          <Link href="/" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link href="/investors" className="hover:text-gray-200">
            Investors
          </Link>
        </div>
       
      </nav>

      {/* Page Content */}
      <main className="p-6">{children}</main>
    </div>
  );
}
