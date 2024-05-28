import Image from "next/image";
import Hero from "./sections/1_Hero";
import About from "./sections/2_about";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
};

export default Home;
