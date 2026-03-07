import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className=" bg-blue-400 py-20">
      <div className=" max-w-7xl mx-auto px-4 text-center">
        <h3 className=" text-xl font-bold text-white mb-8">
          Join 350,000+ AI Adopters
        </h3>
        <h1 className="text-4xl md:text-7xl font-bold text-white">
          Everything your business needs to master AI, all in one place.
        </h1>
        <h2 className="mt-6 text-2xl text-gray-100">
          Explore top AI tools and learn how to use them effectively.
        </h2>
        <div className=" flex justify-center  gap-6 py-14">
          <Button className={`bg-white text-black  hover:bg-gray-300`}>
            Join For Free
          </Button>
          <Button
            className={`text-white hover:text-black hover:bg-white border border-white `}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
