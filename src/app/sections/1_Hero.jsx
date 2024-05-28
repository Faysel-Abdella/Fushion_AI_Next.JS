"use client";
import React from "react";

import Image from "next/image";

import icons from "../assets/icons";
import images from "../assets/images";

import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section
      className="bg-hero bg-no-repeat bg-cover max-md:bg-center h-[700px] 
    "
    >
      <div className="pt-36 pl-20">
        <h1
          className="font-poppins font-bold text-6xl text-white
        lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 
        "
        >
          Fushion <span className="text-[#915EFF]">AI</span>
        </h1>
      </div>

      <div className="flex flex-col">
        <Fade
          cascade
          duration={200}
          className="pl-20 font-poppins font-bold text-2xl w-[400px] mt-10"
        >
          Transform real estate
        </Fade>
        <Fade
          cascade
          duration={200}
          className="mt-0 pl-20 font-poppins font-bold text-2xl w-[400px]"
        >
          with the power of data
        </Fade>
      </div>

      <div className="flex px-14 justify-between items-center  mx-20 mt-16 p-5 shadow-lg   shadow-slate-300 bg-white  h-[150px] rounded-[20px]">
        <div>
          <h3 className="text-[#cb4154] text-[1rem] font-bold font-Rubik">
            Quick Service Request
          </h3>
          <p className="text-[#131d3b] text-[1.7rem] font-bold font-Rubik">
            Schedule your first free live chat
          </p>
        </div>

        <div className="flex gap-5">
          <label className="input input-bordered flex items-center gap-2">
            <Image src={icons.emailIcon} />
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <Image src={icons.profile} />
            <input type="text" className="grow" placeholder="Your name" />
          </label>

          <button className="btn btn-active btn-primary px-10 text-white text-base font-Rubik">
            send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
