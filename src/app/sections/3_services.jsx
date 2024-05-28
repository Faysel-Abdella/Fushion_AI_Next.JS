"use client";
import React from "react";
import ServiceCard from "../components/ServiceCard";

import images from "../assets/images";

const Services = () => {
  return (
    <section className="bg-services bg-no-repeat bg-cover py-10">
      <h1 className="text-center text-slate-100 text-5xl font-poppins font-bold mb-6">
        Services We Offer
      </h1>
      <div className="flex flex-col gap-5 justify-center items-center">
        <ServiceCard
          title="Insights for Investors and Professionals"
          icon={images.aboutHouse}
          index={1}
          key={1}
        />
        <ServiceCard
          title="Insights for Investors and Professionals"
          icon={images.aboutHouse}
          index={1}
          key={1}
        />
        <ServiceCard
          title="Insights for Investors and Professionals"
          icon={images.aboutHouse}
          index={1}
          key={1}
        />
      </div>
    </section>
  );
};

export default Services;
