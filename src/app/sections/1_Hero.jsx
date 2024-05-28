"use client";
import React from "react";

import Image from "next/image";

import images from "../assets/images";
// after:bg-gradient-to-t  after:from-sky-900 after:h-full after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0  after:opacity-45
//
//

const Hero = () => {
  return (
    <section
      className="bg-hero bg-no-repeat bg-cover max-md:bg-center h-[700px] 
    "
    >
      <div className="pt-36 pl-20">
        <h1 className="font-poppins font-bold text-6xl text-gray-950">
          Fushion <span>AI</span>
        </h1>
        <h2 className="font-poppins font-bold text-2xl w-[300px] mt-10">
          Transform real estate with the power of data
        </h2>
      </div>

      <div className="flex  mx-20 mt-16 p-5 drop-shadow-md bg-slate-200 border border-gray-400 h-[150px] rounded-[40px]">
        <div>
          <h3>Quick Service Request</h3>
          <p>Send a fast Request</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
