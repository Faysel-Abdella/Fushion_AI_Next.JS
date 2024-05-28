import Image from "next/image";
import Hero from "./sections/1_Hero";
import About from "./sections/2_about";
import Services from "./sections/3_services";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
};

export default Home;
