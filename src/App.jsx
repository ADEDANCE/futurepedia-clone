import { useState } from "react";
import Navber from "./components/Navber";
import Hero from "./sections/Hero";
import Trending from "./sections/trending";
import Footer from "./sections/Footer";
import For_creator from "./sections/For_creator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navber />
      <Hero />
      <Trending />
      <For_creator />
      <Footer />
    </>
  );
}

export default App;
