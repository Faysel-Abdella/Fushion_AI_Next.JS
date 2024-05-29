import Image from "next/image";
import Hero from "./sections/1_Hero";
import About from "./sections/2_about";
import Services from "./sections/3_services";
import WhyFushion from "./sections/4_whyFushion";
import Contact from "./sections/5_contact";
import { StarsCanvas } from "./components/canvas";

const Home = () => {
  return (
    <main>
      <section className=" bg-hero bg-no-repeat bg-cover">
        <Hero />
      </section>
      <section className="about-section">
        <About />
      </section>
      <section className="bg-services bg-cover bg-no-repeat bg-center">
        <Services />
      </section>
      <section className="bg-whybg bg-cover bg-no-repeat bg-center">
        <WhyFushion />
      </section>
      <section className="relative z-0 bg-gray-900">
        <Contact />
        <StarsCanvas />
      </section>
    </main>
  );
};

export default Home;
