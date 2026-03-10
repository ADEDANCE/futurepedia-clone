import React from "react";
import Ai_tool_card from "../components/Ai_tool_card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  ChatGPTImage,
  Claude,
  Perplexity,
  Gemini,
  // Grock,
} from "../assets/index";
import { FaIdBadge } from "react-icons/fa6";

const Ai_tool_category = () => {
  const tools = [
    {
      name: " ChatGPT",
      image: ChatGPTImage,
      description: "",
      visits: "6219",
      tags: ["ai chatbots", "research", "ai agents"],
      editorpack: true,
    },
    {
      name: "Gemin",
      image: Gemini,
      description: "",
      visits: "6219",
      tags: ["ai chatbots", "research", "ai agents"],
    },
  ];
  return (
    <section className=" py-20">
      <div className=" mx-auto max-w-7xl px-5 md:px-3">
        <div className="text-center">
          <h2 className=" text-black font-bold text-2xl ">
            AI Tool Categories
          </h2>

          <p className=" font-light text-lg">
            We've categorized 2651 AI tools into 10 categories.
          </p>

          <div className=" flex flex-wrap justify-center gap-2 max-w-7xl mx-auto py-10 ">
            <Ai_tool_card title={"AI Image Tools"} subtitle={"313 Tools"} />
            <Ai_tool_card title={"AI Business Tools"} subtitle={"1611 Tools"} />
            <Ai_tool_card title={"Automation Tools"} subtitle={"490 Tools"} />
            <Ai_tool_card
              title={"AI Productivity Tools"}
              subtitle={"648 Tools"}
            />
            <Ai_tool_card title={"AI Video Tools"} subtitle={"198 Tools"} />
            <Ai_tool_card title={"Misc AI Tools"} subtitle={"613 Tools"} />
            <Ai_tool_card title={"AI Art Generators"} subtitle={"613 Tools"} />
            <Ai_tool_card title={"AI Code Tools"} subtitle={"613 Tools"} />
            <Ai_tool_card
              title={"AI Audio Generators"}
              subtitle={"613 Tools"}
            />
          </div>
        </div>
        {/* details */}
        <h4 className=" text-black text-3xl font-bold">
          The World’s Leading Independent AI Education & Discovery Platform
        </h4>
        <p className=" my-4 text-xl">
          Futurepedia is the largest independent ecosystem for AI discovery,
          education, and professional adoption. Across Futurepedia, Skill Leap,
          and the Howfinity YouTube network,
          <span className=" font-bold">
            {" "}
            we serve millions of professionals, founders, and operators
            navigating the shift to AI-powered work.
          </span>
        </p>
        <p className=" my-4 text-xl">
          We operate the world’s first AI tool directory, featuring 4,000+
          curated tools and 500,000 plus accounts, alongside a rapidly growing
          AI education platform with 29 courses and over 1,000 lessons focused
          on real-world AI skills for business and productivity, including our
          14-Day AI Boot Camp, a practical, step-by-step course designed to help
          you master essential AI skills in just two weeks.
        </p>

        <p className=" my-4 text-xl">
          Futurepedia has become the default onramp for anyone serious about
          understanding, evaluating, and applying AI in their work.
        </p>

        {/* Slider */}
        <div className="max-w-3xl mx-auto  ">
          {/* slider  arrows */}
          <div className="flex items-center gap-4">
            {/* left arrow */}
            <button className="prev-btn  text-2xl  text-white font-light rounded-full bg-gray-400 hover:bg-gray-700 px-2 py-2">
              <FaArrowLeft />
            </button>

            {/* swiper */}

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
              }}
              spaceBetween={20}
              slidesPerView={1}
            >
              {tools.map((tool, index) => (
                <SwiperSlide>
                  <div
                    key={index}
                    className="p-6  bg-white shadow-lg rounded-xl text-start"
                  >
                    <div className=" flex gap-0.5  md:gap-2 mb-2 items-center">
                      <img
                        src={tool.image}
                        alt=""
                        className=" rounded-xl w-24"
                      />
                      <h4 className=" text-2xl text-black font-medium">
                        {tool.name}
                      </h4>
                    </div>

                    <div className=" flex justify-between">
                      <h4 className=" font-mono text-2xl">Freemium</h4>
                      <p className=" text-gray-600 ">6219</p>
                    </div>

                    <p className=" text-gray-600">
                      Amazing AI tools for creators!
                    </p>

                    <div className=" flex flex-col md:flex-row gap-2.5">
                      {tool.tags.map((tag, index) => (
                        <a key={index} href="" className=" text-blue-400">
                          #{tag}
                        </a>
                      ))}
                    </div>

                    <div className=" mt-16 md:mt-32 flex justify-between">
                      {tool.editorpack && (
                        <p className="text-gray-500 flex items-center gap-2">
                          <span>
                            <FaIdBadge />
                          </span>
                          Editor's Pick
                        </p>
                      )}

                      <p className=" flex items-center gap-2 text-blue-400 border-2 border-blue-400 rounded-sm py-1 px-4">
                        Visit
                        <span>
                          <FaIdBadge />
                        </span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* right arrow */}
            <button className="next-btn text-2xl  text-white font-light rounded-full bg-gray-400 hover:bg-gray-700 px-2 py-2">
              <FaArrowRight />
            </button>
          </div>

          {/* dots below */}
          <div className="custom-pagination flex justify-center mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Ai_tool_category;
