import Image from "next/image";
import Hero from "./sections/1_Hero";
import About from "./sections/2_about";
import Services from "./sections/3_services";
import WhyFushion from "./sections/4_whyFushion";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <div className="bg-whybg bg-cover bg-no-repeat bg-center">
        <WhyFushion />
      </div>
    </main>
  );
};

export default Home;
