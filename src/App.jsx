import { useState } from "react";
import Navber from "./components/Navber";
import Hero from "./sections/Hero";
import Trending from "./sections/trending";
import Footer from "./sections/Footer";
import For_creator from "./sections/For_creator";
import Popular_categories from "./sections/popular_categories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-gray-200 min-h-screen">
      <Navber />
      <Hero />
      <Popular_categories />
      <Trending />
      <For_creator />
      <Footer />
    </div>
  );
}

export default App;
