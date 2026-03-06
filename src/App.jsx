import { useState } from "react";
import Navber from "./components/Navber";
import Hero from "./sections/Hero";
import Trending from "./sections/trending";
import Footer from "./sections/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navber />
      <Hero />
      <Trending />
      <Footer />
    </>
  );
}

export default App;
