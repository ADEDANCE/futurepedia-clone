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
import AuthorInfo from "../components/AuthorInfo";
import StatItem from "../components/StatItem";
import FeatureItem from "../components/FeatureItem";
import VideoCard from "../components/VideoCard";
import IconBox from "../components/IconBox";

const For_creator = () => {
  return (
    <section className=" py-20 bg-white mt-20">
      <div className=" max-w-7xl mx-auto px-4">
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-start  lg:gap-20">
          <div className=" pl-8">
            <div className=" flex justify-between">
              <div className=" flex  gap-10 items-center">
                <h2 className=" text-black text-4xl lg:text-6xl font-bold ">
                  For Creators
                </h2>
                {/* Icon */}
                <div className=" hidden lg:flex gap-6">
                  <IconBox icon={FaMusic} />
                  <IconBox icon={FaMusic} />
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

            {/* Author */}
            <AuthorInfo
              image={KevinHutsonface}
              name={"Saj Adib"}
              role={"Al Productivity Specialist"}
              hidden={"flex lg:hidden"}
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-4 lg:items-center">
            <div className="flex gap-8 lg:gap-5">
              <StatItem icon={FaYoutube} value={"333+"} />
              <StatItem icon={FaUser} value={"673+"} />
              <StatItem icon={FaEye} value={"29M+"} />
            </div>

            <Button
              className={
                "bg-blue-500 text-white font-bold md:hidden lg:block w-full lg:w-auto"
              }
              children={"Go To Channel"}
            />
          </div>
        </div>

        {/* descriptions */}
        <div className=" grid grid-cols-1  lg:grid-cols-2 items-start  md:gap-20 p-8">
          <div>
            {/* Author */}
            <AuthorInfo
              image={KevinHutsonface}
              name={"Saj Adib"}
              role={"Al Productivity Specialist"}
              hidden={"hidden lg:flex"}
            />

            <p className=" pb-5 text-xl text-gray-400 font-medium">
              Empowering creators with cutting-edge Al tools for music, audio,
              and video production
            </p>

            {/* feature items */}
            <FeatureItem text={" In-depth Al tool reviews and comparisons"} />
            <FeatureItem text={" Step-by-step Al implementation guides"} />
            <FeatureItem
              text={"Case studies on Al-driven business transformations"}
            />
          </div>
          <div>
            <p className=" text-black text-3xl font-bold">Featured Videos:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-7">
              <VideoCard image={forcreators1} />
              <VideoCard image={forcreators2} />
              <VideoCard image={forcreators3} hidden="hidden sm:block" />
              <VideoCard image={forcreators4} hidden="hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default For_creator;
