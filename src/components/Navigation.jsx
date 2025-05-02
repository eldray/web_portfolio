import React from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <nav className="bg-dark border-b border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold gradient-text">
              Kwame Asante
            </span>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition"
              >
                About
              </a>
              <a
                href="#skills"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition"
              >
                Contact
              </a>

              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-dark border-t border-gray-800 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
