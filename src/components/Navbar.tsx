"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ikon dari Lucide

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Menutup menu saat link diklik

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-gray-700 font-bold text-xl">
            Sewa Roda
          </Link>

          {/* Primary Nav (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-700 hover:text-primary">Home</Link>
            <Link href="#features" className="text-gray-700 hover:text-primary">Features</Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary">Pricing</Link>
          </div>

          {/* Secondary Nav (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link href="/signup" className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded hover:bg-yellow-300 transition">
              Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 py-4 px-6 space-y-4">
          <Link href="#home" className="block text-gray-700" onClick={closeMenu}>Home</Link>
          <Link href="#features" className="block text-gray-700" onClick={closeMenu}>Features</Link>
          <Link href="#pricing" className="block text-gray-700" onClick={closeMenu}>Pricing</Link>
          <hr />
          <Link href="/signup" className="block bg-yellow-400 text-yellow-900 px-4 py-2 rounded hover:bg-yellow-300 transition" onClick={closeMenu}>
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
