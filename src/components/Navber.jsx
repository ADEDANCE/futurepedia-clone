import React, { useState } from "react";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" bg-white shadow-md">
      <div className=" max-w-7xl mx-auto px-4">
        <div className=" flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-blue-600">MyWebsite</h1>
          <div className=" hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>

            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>

            <a href="#" className="text-gray-700 hover:text-blue-600">
              Services
            </a>

            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" md:hidden px-4 pb-4 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="block text-gray-700 hover:text-blue-600">
            About
          </a>

          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Services
          </a>

          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navber;
