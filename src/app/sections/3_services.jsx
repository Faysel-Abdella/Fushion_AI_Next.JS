"use client";
import React from "react";
import ServiceCard from "../components/ServiceCard";

import images from "../assets/images";
import icons from "../assets/icons";

const Services = () => {
  return (
    <section className="bg-services bg-no-repeat bg-cover py-10">
      <h1 className="text-center text-slate-100 text-5xl font-poppins font-bold mb-6">
        Services We Offer
      </h1>
      <div className="flex flex-col gap-5 justify-center items-center">
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
      </div>
    </section>
  );
};

export default Services;
