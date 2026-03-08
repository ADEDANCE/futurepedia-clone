import React from "react";
import {
  FaBolt,
  FaEye,
  FaFireAlt,
  FaMusic,
  FaUser,
  FaVideo,
  FaYoutube,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import Button from "../components/Button";
import KevinHutsonface from "../assets/KevinHutsonface.webp";
import forcreators1 from "../assets/forcreators1.webp";
import forcreators2 from "../assets/forcreators2.webp";
import forcreators3 from "../assets/forcreators3.webp";
import forcreators4 from "../assets/forcreators4.webp";
import { HiLightningBolt } from "react-icons/hi";

const For_creator = () => {
  return (
    <section className="py-20 bg-white mt-20">
      <div className=" max-w-7xl mx-auto px-4">
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-start  lg:gap-20">
          <div className=" pl-8">
            <div className=" flex justify-between">
              <div className=" flex  gap-10 items-center">
                <h2 className=" text-black text-4xl lg:text-6xl font-bold ">
                  For Creators
                </h2>
                <div className=" hidden lg:flex gap-6">
                  <div className="bg-blue-200 p-3 rounded-lg w-fit">
                    <FaMusic className=" text-blue-500" />
                  </div>

                  <div className="bg-blue-200 p-3 rounded-lg w-fit">
                    <FaVideo className=" text-blue-500" />
                  </div>
                </div>
              </div>
              <Button
                className={
                  "bg-blue-500 text-white font-bold hidden lg:hidden md:block  w-full md:w-auto"
                }
              >
                Go To Channel
              </Button>
            </div>

            {/* autour */}
            <div className=" flex lg:hidden gap-6 py-7 ">
              <img
                src={KevinHutsonface}
                alt="KevinHutsonface"
                className="w-24 rounded-4xl"
              />
              <div>
                <p className=" text-black text-3xl font-bold">Kevin Hutson</p>
                <p className=" text-gray-600 font-medium">
                  Al Music & Video Expert
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 lg:items-center">
            <div className="flex gap-8 lg:gap-5">
              <div className=" flex flex-col md:flex-row items-center gap-4">
                <FaYoutube className=" text-blue-400 text-3xl" />
                <p className=" text-2xl text-black font-bold">164+ </p>
              </div>
              <div className=" flex flex-col md:flex-row items-center gap-4">
                <FaUser className=" text-blue-400 text-3xl" />
                <p className=" text-2xl text-black font-bold">665K+ </p>
              </div>

              <div className=" flex flex-col md:flex-row items-center gap-4">
                <FaEye className=" text-blue-400 text-3xl" />
                <p className=" text-2xl text-black font-bold">38M+ </p>
              </div>
            </div>
            <Button
              className={
                "bg-blue-500 text-white font-bold md:hidden lg:block w-full lg:w-auto"
              }
            >
              Go To Channel
            </Button>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1  lg:grid-cols-2 items-start  md:gap-20 p-8">
        {/* descriptions */}

        <div>
          <div className=" hidden lg:flex items-center gap-6 py-7 ">
            <img
              src={KevinHutsonface}
              alt="KevinHutsonface"
              className="w-24 rounded-4xl"
            />
            <div>
              <p className=" text-black text-3xl font-bold">Kevin Hutson</p>
              <p className=" text-gray-600 font-medium">
                Al Music & Video Expert
              </p>
            </div>
          </div>
          <p className=" pb-5 text-xl text-gray-400 font-medium">
            Empowering creators with cutting-edge Al tools for music, audio, and
            video production
          </p>
          <div className=" flex pb-5 items-center text-center gap-6 ">
            <div className="hidden lg:block bg-blue-200  rounded-full px-2 py-2">
              <HiLightningBolt className=" text-blue-500" />
            </div>
            <p className="  text-xl text-gray-400 font-medium text-start">
              Weekly tutorials on Al-powered creative tools
            </p>
          </div>
          <div className=" flex pb-5 items-center text-center gap-6">
            <div className="hidden lg:block bg-blue-200  rounded-full px-2 py-2">
              <HiLightningBolt className=" text-blue-500" />
            </div>
            <p className="  text-xl text-gray-400 font-medium text-start">
              Weekly tutorials on Al-powered creative tools
            </p>
          </div>
          <div className="flex pb-5 items-center text-center gap-6">
            <div className=" hidden lg:block bg-blue-200  rounded-full px-2 py-2">
              <HiLightningBolt className=" text-blue-500" />
            </div>
            <p className="  text-xl text-gray-400 font-medium text-start">
              Weekly tutorials on Al-powered creative tools
            </p>
          </div>
        </div>
        <div>
          <p className=" text-black text-3xl font-bold">Featured Videos:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-7">
            <div className="cursor-pointer">
              <img
                src={forcreators1}
                className="rounded-4xl w-full h-38 object-cover"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src={forcreators2}
                className="rounded-4xl w-full h-38 object-cover"
              />
            </div>
            <div className="cursor-pointer hidden sm:block">
              <img
                src={forcreators3}
                className="rounded-4xl w-full h-38 object-cover"
              />
            </div>
            <div className="cursor-pointer hidden sm:block **:">
              <img
                src={forcreators4}
                className=" rounded-4xl w-full h-38 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default For_creator;
