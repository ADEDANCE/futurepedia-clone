import React from "react";
import { RiMenu2Line } from "react-icons/ri";

const Ai_tool_card = ({ title, subtitle }) => {
  return (
    <div className=" w-full md:w-auto hover:pb-3 bg-white  py-4 rounded-xl px-4 flex gap-5 shadow-[0_8px_20px_rgba(255,255,255,0.6)]">
      {/* icon */}
      <div className=" bg-blue-100 text-blue-400 rounded-xl flex items-center justify-center px-4 text-xl">
        <RiMenu2Line />
      </div>

      {/* About */}
      <div className=" text-start">
        <h2 className=" text-black font-bold text-2xl hover:underline">
          {title}
        </h2>
        <p className=" text-gray-500 font-light text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default Ai_tool_card;
