import React from "react";
import Button from "../components/Button";

const Trending = () => {
  const categories = [
    "Marketing",
    "Productivity",
    "Design",
    "Video",
    "Research",
    "Text-To-Image",
    "Design Generator",
    "Email Assistant",
  ];
  return (
    <section className=" py-20 bg-blue-950">
      <div className=" max-w-7xl mx-auto px-4">
        <h1 className="text-white text-7xl font-bold  text-center mb-5">
          Trending Categories
        </h1>
        <p className=" text-center text-white">
          Explore our editorial favorites and popular AI tools in these trending
          categories
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-16 max-w-2xl mx-auto">
          {categories.map((category, index) => (
            <Button
              className={`bg-white hover:text-blue-400 text-black text-sm `}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
