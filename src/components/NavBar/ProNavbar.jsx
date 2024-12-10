import React, { useState } from "react";

const ProNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Full Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact
          </a>
          <a
            href="#skills"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Skills
          </a>
        </div>
      )}
    </nav>
  );
};

export default ProNavBar;
