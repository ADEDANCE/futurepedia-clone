import React from "react";

const Trending = () => {
  return (
    <section className=" py-20 bg-white">
      <div className=" max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* features card */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              React apps are fast and efficient for modern web experiences.
            </p>
          </div>
          {/* features card */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              React apps are fast and efficient for modern web experiences.
            </p>
          </div>
          {/* features card */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              React apps are fast and efficient for modern web experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
