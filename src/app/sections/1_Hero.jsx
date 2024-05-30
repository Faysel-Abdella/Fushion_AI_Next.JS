"use client";
import React from "react";

import Image from "next/image";

import icons from "../assets/icons";
import images from "../assets/images";

import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container  max-md:bg-center h-[700px] 
    "
    >
      <div className="pt-36 pl-20 max-lg:pl-0 ">
        <h1
          className="font-poppins font-bold text-6xl text-white
        lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 
        max-lg:bg-gray-800 rounded-3xl max-lg:py-3 max-lg:px-10  max-lg:w-fit max-lg:mx-auto
        "
        >
          Fushion{" "}
          <span className="text-gray-950 max-lg:text-slate-200">AI</span>
        </h1>
      </div>

      <div className="flex flex-col max-lg:hidden">
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

      <div className="flex max-[1200px]:flex-col px-14 max-lg:px-6 justify-between items-center  mx-20 max-sm:mx-7 mt-16 max-lg:mt-24 p-5 shadow-lg   shadow-slate-300 bg-white  h-[150px] max-lg:h-fit rounded-[20px]">
        <div>
          <h3 className="text-[#cb4154] text-[1rem] font-bold font-Rubik">
            Quick Service Request
          </h3>
          <p className="text-[#131d3b] text-[1.7rem] max-md:text-[1.4rem] font-bold font-Rubik">
            Schedule your first free live chat
          </p>
        </div>

        <div className="flex gap-5 max-lg:flex-col ">
          <div className="flex gap-5 max-sm:flex-col">
            <label className="input input-bordered flex items-center gap-2">
              <Image src={icons.emailIcon} />
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <Image src={icons.profile} />
              <input type="text" className="grow" placeholder="Your name" />
            </label>
          </div>

          <button className="btn btn-active btn-primary px-10 text-white text-base font-Rubik">
            send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
