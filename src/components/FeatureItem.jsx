import React from "react";
import { HiLightningBolt } from "react-icons/hi";

const FeatureItem = ({ text }) => {
  return (
    <div className="flex pb-5 items-center gap-6">
      <div className="hidden lg:block bg-blue-200 rounded-full px-2 py-2">
        <HiLightningBolt className="text-blue-500" />
      </div>

      <p className="text-xl text-gray-400 font-medium">{text}</p>
    </div>
  );
};

export default FeatureItem;
