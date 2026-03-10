import React from "react";
import Hero from "../sections/Hero";
import Popular_categories from "../sections/popular_categories";
import Trending from "../sections/trending";
import For_creator from "../sections/For_creator";
import For_Productivity from "../sections/For_Productivity";
import Ai_tool_category from "../sections/Ai_tool_category";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <div className=" bg-gray-200 min-h-screen">
      <Hero />

      <Popular_categories />
      <Trending />
      <For_creator />
      <For_Productivity />
      <Ai_tool_category />
      <Footer />
    </div>
  );
};

export default Home;
