import React from "react";
import Image from "next/image";
import images from "../assets/images";

const About = () => {
  return (
    <section id="about" className="about-section px-[90px] pt-20">
      <h2 className="text-center text-6xl font-bold font-poppins ">About Us</h2>
      <article className="flex justify-between ">
        <div className="w-[700px] ">
          <Image src={images.aboutHouse2} className="w-full  " />
        </div>
        <div className="w-1/2 pt-36">
          <h2 className="text-2xl font-semibold font-poppins">
            Transform real estate with the power of data
          </h2>
          <p className="font-Lato text-lg mt-12">
            Revolutionary Data Analysis for the Real Estate Market At Fushion
            AI, we believe in the power of data to transform the real estate
            market. Utilizing advanced artificial intelligence (AI) models, we
            provide essential insights to a wide range of clients, including
            consumers, realtors, real estate companies, and developers. Our
            services enable our clients to make informed investment decisions,
            supported by accurate and up-to-date data.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
