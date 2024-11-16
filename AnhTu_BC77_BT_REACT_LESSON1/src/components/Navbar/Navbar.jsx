// src/components/Navbar.js
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle.jsx";
import { useTheme } from "../../contexts/ThemeContext.jsx";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-md dark:bg-gray-900 dark:text-white bg-white text-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">
            Helicopter World
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Contact
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-colors dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4 dark:bg-gray-900 bg-white">
              <a
                href="#"
                className="hover:text-blue-500 transition-colors px-4"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors px-4"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors px-4"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors px-4"
              >
                Contact
              </a>
              <div className="px-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
