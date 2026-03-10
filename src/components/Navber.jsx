import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={` fixed top-0 left-0  w-full bg-blue-700 shadow-md ${
        isOpen ? "bg-white" : "bg-blue-700"
      }`}
    >
      <div className=" max-w-7xl mx-auto px-4">
        <div className=" flex justify-between items-center h-16">
          <img src={logo} alt="MyWebsite Logo" />

          <div className=" hidden md:flex space-x-6">
            <Link
              to="/tools"
              className="text-white hover:text-gray-200 hover:underline"
            >
              AI Tools
            </Link>

            <Link
              to="/news"
              className="text-white hover:text-gray-200 hover:underline"
            >
              Newsletter
            </Link>

            <Link
              to="/resources"
              className="text-white hover:text-gray-200 hover:underline"
            >
              Resources
            </Link>
          </div>
          <div className=" hidden md:flex space-x-6">
            <button className="text-xl">
              <FiMenu className=" text-white" />
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
            {isOpen ? (
              <FiX className="text-black text-2xl" />
            ) : (
              <FiMenu className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" md:hidden px-4 pb-4 space-y-3 bg-white">
          <Link to="/tools" className="block text-black hover:text-gray-600">
            AI Tools
          </Link>

          <Link
            to="/resources"
            className="block text-black hover:text-gray-600"
          >
            Resources
          </Link>

          <Link to="/news" className="block text-black hover:text-gray-600">
            Newsletter
          </Link>

          <Link to="/" className="block text-black hover:text-gray-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navber;
