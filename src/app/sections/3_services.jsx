"use client";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Fade } from "react-awesome-reveal";

import images from "../assets/images";
import icons from "../assets/icons";

const Services = () => {
  return (
    <section id="services" className="max-container   py-20 pt-36">
      <h1 className="text-center text-slate-100 text-5xl font-poppins font-bold mb-10">
        Services We Offer
      </h1>

      <Fade
        cascade
        childStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
        direction="left"
        triggerOnce
        damping={0.1}
        duration={2000}
        className="flex flex-col gap-5 justify-center items-center"
        style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
      >
        <ServiceCard
          title="Insights for Investors and Professionals"
          description=" We provide detailed analyses essential for making strategic decisions in real estate investments. This includes market trends, real estate price forecasts, and a thorough evaluation of risks related to the housing market."
          icon={icons.document}
          index={1}
          key={1}
        />
        <ServiceCard
          title="Products for Consumers"
          description=" For individual homebuyers or sellers, we offer user-friendly products that provide insights into property values, ownership information, purchase prices, mortgages, and cadastral maps. Our AI-driven analyses help determine the optimal time to buy or sell, enabling our clients to approach the market with confidence."
          icon={icons.handshake}
          index={1}
          key={1}
        />
        <ServiceCard
          title="Customized Solutions"
          description="Every project is unique. That's why we work closely with our clients to provide tailored solutions that meet their specific needs and goals."
          icon={icons.customized}
          index={1}
          key={1}
        />
      </Fade>
    </section>
  );
};

export default Services;
