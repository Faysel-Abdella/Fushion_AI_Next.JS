import Image from "next/image";
import Hero from "./sections/1_Hero";
import About from "./sections/2_about";
import Services from "./sections/3_services";
import WhyFushion from "./sections/4_whyFushion";
import Contact from "./sections/5_contact";
import { StarsCanvas } from "./components/canvas";
import Footer from "./sections/6_footer";

const Home = () => {
  return (
    <main>
      <section id="hero" className=" bg-hero bg-no-repeat bg-cover bg-center">
        <Hero />
      </section>
      <section id="about" className="about-section">
        <About />
      </section>
      <section
        id="services"
        className="services bg-cover bg-no-repeat bg-center"
      >
        <Services />
      </section>
      <section
        id="features"
        className="bg-whybg bg-cover bg-no-repeat bg-center"
      >
        <WhyFushion />
      </section>
      <section id="contact" className="relative z-0 bg-gray-900">
        <Contact />
        <StarsCanvas />
      </section>
      <section id="footer" className="bg-gray-950">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
