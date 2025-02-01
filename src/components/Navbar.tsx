// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700 font-bold">
                Sewaroda
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="#home" className="py-5 px-3 text-gray-700">Home</Link>
              <Link href="#features" className="py-5 px-3 text-gray-700">Features</Link>
              <Link href="#pricing" className="py-5 px-3 text-gray-700">Pricing</Link>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/login" className="py-5 px-3">Login</Link>
            <Link href="/signup" className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300 transition duration-300">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
