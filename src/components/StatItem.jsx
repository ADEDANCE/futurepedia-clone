import React from "react";

const StatItem = ({ icon: Icon, value }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <Icon className="text-blue-400 text-3xl" />
      <p className="text-2xl text-black font-bold">{value}</p>
    </div>
  );
};

export default StatItem;
