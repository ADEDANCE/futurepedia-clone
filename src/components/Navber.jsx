import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" bg-blue-700 shadow-md">
      <div className=" max-w-7xl mx-auto px-4">
        <div className=" flex justify-between items-center h-16">
          <img src={logo} alt="MyWebsite Logo" />

          <div className=" hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-200 hover:underline"
            >
              AI Tools
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-200 hover:underline"
            >
              Newsletter
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-200 hover:underline"
            >
              Resources
            </a>
          </div>
          <div className=" hidden md:flex space-x-6">
            <button className="text-white text-xl">
              <FiSearch />
            </button>
            <button className=" text-white hover:bg-white hover:text-black py-2 px-3 rounded-full">
              Login
            </button>
            <button className=" bg-white text-black hover:bg-gray-300 py-2 px-3 rounded-full">
              Join For Free
            </button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" md:hidden text-white"
          >
            <FiMenu className=" text-white" />
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
