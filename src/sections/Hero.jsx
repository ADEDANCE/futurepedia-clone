import React from "react";

const Hero = () => {
  return (
    <section className=" bg-purple-400 py-20">
      <div className=" max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Build Modern Websites With React
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Learn how to build fast, responsive and modern websites using React
          and Tailwind CSS.
        </p>
        <button className=" mt-8 px-6 py-3 bg-blue-600 text-white  rounded-lg hover:bg-blue-800">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
