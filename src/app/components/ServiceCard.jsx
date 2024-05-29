"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

const ServiceCard = ({ index, title, icon, description }) => (
  <section className="xs:w-[10px] w-[70%]  mx-20">
    <div
      // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" w-full black-gradient p-[1px] rounded-[20px] shadow-card   border-t border-t-yellow-400 border-l border-l-yellow-500 mt-5"
    >
      <div
        options={{
          max: 45,
          scale: 0.7,
          speed: 450,
        }}
        className="flex justify-between items-center gap-5 bg-tertiary rounded-[20px] py-5 px-7 min-h-[280px] "
      >
        <div className="flex gap-5 flex-col items-center  w-[300px]">
          <div className="bg-slate-300 p-3 rounded-md">
            <Image
              src={icon}
              alt="Service"
              className="w-16 h-16 text-white "
              color="white"
            />
          </div>

          <h3 className="text-yellow-50 font-Rubik text-xl font-semibold text-center tracking-wider">
            {title}
          </h3>
        </div>

        <p className="text-yellow-50 w-[800px] font-Rubik text-xl leading-8 tracking-wide">
          {description}
        </p>
      </div>
    </div>
  </section>
);

export default ServiceCard;
