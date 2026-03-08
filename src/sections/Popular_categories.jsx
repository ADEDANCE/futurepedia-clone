import React, { useState } from "react";
import {
  FaCogs,
  FaNetworkWired,
  FaSellsy,
  FaStar,
  FaTag,
  FaTrademark,
} from "react-icons/fa";
import KevinHutsonface from "../assets/KevinHutsonface.webp";

import {
  ChatGPTImage,
  Claude,
  Perplexity,
  Gemini,
  // Grock,
} from "../assets/index";
import {
  RiArrowDropUpLine,
  RiCustomerService2Line,
  RiHomeOfficeLine,
} from "react-icons/ri";
import { CiCalculator2 } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import Home_card from "../components/Home_card";

const Popular_categories = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const icons = [
    RiCustomerService2Line,
    FaSellsy,
    RiHomeOfficeLine,
    CiCalculator2,
    GiNetworkBars,
    FaRegPenToSquare,
    GrTechnology,
    FaNetworkWired,
    FaCogs,
  ];
  const categories = [
    "Customer Service & Support",
    "Sales",
    "Back Office",
    "Operations",
    "Growth & Marketing",
    "Writing & EDiting",
    "Techology & IT",
    "Design & Creative",
    "Workflow Automation",
  ];
  return (
    <section className=" py-20">
      <div className=" max-w-7xl mx-auto px-4">
        <div className=" mb-10">
          <div className=" flex gap-16 justify-center">
            <div
              onClick={() => setActiveTab("popular")}
              className={`flex gap-4 items-center  pb-3 cursor-pointer ${
                activeTab === "popular" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <FaTrademark className="text-lg" />
              <p className=" text-lg">Popular Tools</p>
            </div>
            <div
              onClick={() => setActiveTab("Recently")}
              className={`flex gap-4 items-center pb-3 cursor-pointer ${
                activeTab === "Recently" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <FaStar className="  text-lg" />
              <p className=" text-lg">Recently Added</p>
            </div>
          </div>

          {/* Line */}
          <div className="relative  h-0.5 w-60 md:w-96 bg-gray-300 mt-3 mx-auto">
            <div
              className={`absolute top-0 h-full  bg-blue-500 transition-all duration-300 ${
                activeTab === "popular" ? "left-0 w-1/2 " : "left-1/2 w-1/2"
              }`}
            />
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:gap-9">
          <div className=" hidden md:block">
            <h2 className=" text-3xl font-bold text-black mb-4">
              Most Popular Categories
            </h2>
            {categories.map((category, index) => {
              const Icon = icons[index]; // pick corresponding icon
              return (
                <div
                  key={index}
                  className=" flex gap-4 hover:pl-5 text-gray-500 text-lg  mb-4"
                >
                  <Icon />
                  <p>{category}</p>
                </div>
              );
            })}
          </div>
          <div className=" md:col-span-2">
            {/* card */}
            <Home_card
              image={ChatGPTImage}
              title={"ChatGPT"}
              description="Research, create, and automate tasks with the leader in AI."
              stats={[
                { icon: FaTag, value: 6215 },
                {
                  icon: RiArrowDropUpLine,
                  value: 6215,
                  color: "text-green-400",
                },
              ]}
              tags={["#ai Chatbots", "#research", "#AI agents"]}
            />

            {/* card */}
            <Home_card
              image={Claude}
              title={"Claude"}
              description="Create, analyze, and debug content and code faster.."
              stats={[
                { icon: FaTag, value: 703 },
                {
                  icon: RiArrowDropUpLine,
                  value: 703,
                  color: "text-green-400",
                },
              ]}
              tags={["#ai Chatbots", "#research", "#code assistant"]}
            />

            {/* card */}
            <Home_card
              image={Perplexity}
              title={"Perplexity"}
              description="Find and summarize trusted web information instantly."
              stats={[
                { icon: FaTag, value: 6215 },
                {
                  icon: RiArrowDropUpLine,
                  value: 6215,
                  color: "text-green-400",
                },
              ]}
              tags={["#ai Chatbots", "#research", "#AI agents"]}
            />

            {/* card */}
            <Home_card
              image={Gemini}
              title={"Google Gemini"}
              description="Multimodal reasoning across text, images, audio, and video."
              stats={[
                { icon: FaTag, value: 6215 },
                {
                  icon: RiArrowDropUpLine,
                  value: 6215,
                  color: "text-green-400",
                },
              ]}
              tags={["#ai Chatbots", "#research", "#AI agents"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular_categories;
