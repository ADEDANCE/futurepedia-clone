import React from "react";

const Home_card = ({
  image,
  title,
  description,
  stats, //array of {icon, value, color}
  tags, // array of strings
}) => {
  return (
    <div className="bg-white py-5 px-4 rounded-3xl mb-3">
      <div>
        <div className="flex justify-between pb-2 border-b border-gray-300">
          {/* Left side: Image + Title + Description */}
          <div className="flex gap-3">
            <img src={image} alt={title} className="w-16 h-16 rounded-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-black">{title}</h2>
              <p className="text-gray-500 text-sm">{description}</p>
            </div>
          </div>

          {/* Right side: Stats */}
          <div className="flex gap-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl h-16 px-3 pt-2.5 border-gray-300 flex flex-col items-center ${stat.color || ""}`}
                >
                  <Icon className="text-lg md:text-2xl" />
                  <p>{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 pt-2">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home_card;
