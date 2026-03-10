import { useState } from "react";
import Navber from "./components/Navber";
import Hero from "./sections/Hero";
import Trending from "./sections/trending";
import Footer from "./sections/Footer";
import For_creator from "./sections/For_creator";
import Popular_categories from "./sections/popular_categories";
import Ai_tool_category from "./sections/Ai_tool_category";
import For_Productivity from "./sections/For_Productivity";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
