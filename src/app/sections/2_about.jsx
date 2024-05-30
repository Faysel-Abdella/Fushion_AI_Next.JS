"use client";

import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import images from "../assets/images";
import icons from "../assets/icons";

const About = () => {
  return (
    <section className="max-container  px-[90px] max-[1200px]:px-[30px]  pt-20 pb-14">
      <h2 className="text-center text-6xl max-md:text-5xl font-bold font-poppins ">
        About Us
      </h2>
      <article className="flex max-lg:flex-col-reverse max-lg:items-center justify-between gap-2 ">
        <div className="max-lg:hidden w-[700px] max-[1200px]:w-[600px] ">
          <Image src={images.aboutHouse2} className="w-full  " />
        </div>
        <div className="lg:w-1/2 pt-28 max-sm:pt-20">
          <h2 className="text-2xl font-semibold font-poppins">
            Transform real estate with the power of data
          </h2>
          <p className="font-Lato text-xl font-semibold mt-12 text-slate-900 leading-7 tracking-wide ">
            Revolutionary Data Analysis for the Real Estate Market At Fushion
            AI, we believe in the power of data to transform the real estate
            market. Utilizing advanced artificial intelligence (AI) models, we
            provide essential insights to a wide range of clients, including
            consumers, realtors, real estate companies, and developers. Our
            services enable our clients to make informed investment decisions,
            supported by accurate and up-to-date data.
          </p>

          <div className="flex flex-col justify-center items-center mt-14 max-sm:mt-10">
            <h2 className="text-2xl max-sm:text-[20px] max-sm:text-center font-Montserrat font-extrabold text-[#2B1B12]">
              Do You Have Any Questions?{" "}
            </h2>
            <h2 className="text-2xl max-sm:text-[20px] font-Montserrat font-extrabold mt-2 text-[#2B1B12]">
              Get Help From Us
            </h2>

            <div className="flex max-sm:flex-col items-center gap-5 mt-10 max-sm:mt-5 font-Montserrat text-[#543E32] text-xl font-semibold">
              <div className="flex items-center gap-2">
                <Image
                  src={icons.verified}
                  alt="verified icon"
                  className="w-[26px] h-[26px]"
                />
                <p className="text-slate-50 max-[1200px]:text-[16px]">
                  Chat live with our support team
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={icons.verified}
                  alt="verified icon"
                  className="w-[26px] h-[26px]"
                />
                <p className="text-slate-50 max-[1200px]:text-[16px]">
                  Schedule a call
                </p>
              </div>
            </div>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
              className="cursor-pointer"
            >
              <button
                className="mt-6 bg-[#915EFF] px-4 py-3  text-lg text-white rounded-lg animate-scale-up-down font-Montserrat font-semibold
              hover:animate-none hover:scale-[1.05] transform ease-in
            "
              >
                Contact Now
              </button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
