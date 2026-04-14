import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-[#e8dfd2] bg-[#f8f3ea]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <Link
            to="/registration"
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            הרשמה
          </Link>

          <Link
            to="/login"
            className="rounded-full border border-red-200 px-5 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
          >
            כניסה
          </Link>
        </div>

        <div className="flex items-center gap-10 text-sm font-medium">
          <Link to="/" className="transition hover:text-red-600">
            עמוד הבית
          </Link>
          <Link to="/my-items" className="transition hover:text-red-600">
            הפריטים שלי
          </Link>
          <Link to="/alerts" className="transition hover:text-red-600">
            התראות
          </Link>
        </div>

        <div className="text-2xl font-black tracking-[0.25em] text-red-600">
          TIMING
        </div>
      </div>
    </nav>
  );
}