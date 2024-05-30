import React from "react";

import { styles } from "@/styles";

const WhyFushion = () => {
  return (
    <section
      id="features"
      className="max-container px-36 max-lg:px-24 max-md:px-14 max-sm:px-8  py-32 max-md:py-28 max-sm:py-16"
    >
      <h1 className="font-bold lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] max-md:text-3xl max-md:leading-[70px] max-sm:leading-[40px] lg:leading-[98px] mt-2 text-white">
        Why Choose <span className="text-[#915EFF]">Fushion AI</span> ?
      </h1>
      <article className="mt-10 flex gap-5 ">
        <div className="flex max-sm:hidden flex-col justify-center items-center ">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[16px] xs:text-[12px] text-[16px] lg:leading-[40px]">
          At Fushion AI, we harness the power of data to transform the real
          estate market. Our advanced AI models provide essential insights,
          enabling clients to make informed investment decisions with accurate,
          up-to-date information. Our team combines deep expertise in AI and
          real estate to create tailored solutions for consumers, agents,
          property companies, and developers. We analyze vast amounts of data to
          offer comprehensive market views, from price trends to neighborhood
          dynamics. Our AI models deliver real-time insights, helping clients
          stay competitive and confident in their decisions. We offer
          customizable solutions to meet diverse client needs, ensuring
          relevance and actionability. Partner with Fushion AI for innovative,
          data-driven success in real estate.
        </p>
      </article>
    </section>
  );
};

export default WhyFushion;
