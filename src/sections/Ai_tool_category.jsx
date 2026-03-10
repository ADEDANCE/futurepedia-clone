import React from "react";
import Ai_tool_card from "../components/Ai_tool_card";

const Ai_tool_category = () => {
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
      </div>
    </section>
  );
};

export default Ai_tool_category;
