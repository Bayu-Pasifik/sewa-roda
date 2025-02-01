// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <p className="flex items-center py-5 px-2 text-gray-700">
                  <a href="/" className="font-bold">Sewaroda</a>
              </p>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/">
                <p className="py-5 px-3 text-gray-700">Home</p>
              </Link>
              <Link href="/features">
                <p className="py-5 px-3 text-gray-700">Features</p>
              </Link>
              <Link href="/pricing">
                <p className="py-5 px-3 text-gray-700">Pricing</p>
              </Link>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/login">
              <p className="py-5 px-3">Login</p>
            </Link>
            <Link href="/signup">
              <p className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300 transition duration-300">
                Signup
              </p>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="mobile-menu hidden md:hidden">
        <Link href="/">
          <p className="block py-2 px-4 text-sm">Home</p>
        </Link>
        <Link href="/features">
          <p className="block py-2 px-4 text-sm">Features</p>
        </Link>
        <Link href="/pricing">
          <p className="block py-2 px-4 text-sm">Pricing</p>
        </Link>
      </div>
    </nav>
  );
}
