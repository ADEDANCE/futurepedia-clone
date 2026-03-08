import React from "react";
import { FaStar, FaTrademark } from "react-icons/fa";
import KevinHutsonface from "../assets/KevinHutsonface.webp";
const Popular_categories = () => {
  const categories = [
    "Customer Service & Support",
    "Sales",
    "Back Office",
    "Operations",
    "Growth & Marketing",
    "Writing & EDiting",
    "Techology & IT",
    "Design & Creative",
    "Workflow Automation",
  ];
  return (
    <section className=" py-20">
      <div className=" max-w-7xl mx-auto px-4">
        <div className=" flex gap-16 justify-center mb-10">
          <div className=" flex gap-4 items-center">
            <FaTrademark className=" text-gray-500 text-lg" />
            <p className=" text-gray-500 text-lg">Popular Tools</p>
          </div>
          <div className=" flex gap-4 items-center ">
            <FaStar className=" text-gray-500 text-lg" />
            <p className=" text-gray-500 text-lg">Popular Tools</p>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:gap-9">
          <div>
            <h2 className=" text-3xl font-bold text-black mb-4">
              Most Popular Categories
            </h2>
            {categories.map((category, index) => (
              <p className="text-gray-500 text-lg hover:pl-5 mb-4">
                {" "}
                {category}
              </p>
            ))}
          </div>
          <div className=" md:col-span-2">
            {/* card */}
            <div className=" bg-white py-5 px-4 rounded-3xl">
              <div className=" flex justify-between">
                <div className=" flex gap-3">
                  <img
                    src={KevinHutsonface}
                    alt=""
                    className=" w-16 h-16 rounded-3xl"
                  />
                  <div>
                    <h2 className=" text-3xl font-bold text-black ">ChatGPT</h2>
                    <p className="text-gray-500 text-sm">
                      Research, create, and automate tasks with the leader in
                      AI.
                    </p>
                  </div>
                </div>
                <div className=" flex gap-3">
                  <img
                    src={KevinHutsonface}
                    alt=""
                    className=" w-16 h-16 rounded-3xl"
                  />
                  <img
                    src={KevinHutsonface}
                    alt=""
                    className=" w-16 h-16 rounded-3xl"
                  />
                </div>
              </div>
              <div className=" bg-gray-300 h-0.5 w-full mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular_categories;
