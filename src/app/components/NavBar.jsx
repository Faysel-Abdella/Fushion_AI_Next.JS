"use client";

import Image from "next/image";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import images from "../assets/images";

import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [navbar, setNavBar] = useState(false);
  return (
    <header className="max-container py-4  font-poppins xl:fixed-nav z-10 ">
      <nav className="max-container flex justify-between items-center w-[82%] mx-auto ">
        <div className="z-50">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            className="logo cursor-pointer"
          >
            <div className="flex gap-2 items-center ">
              <h2 className="text-2xl max-md:text-xl font-bold text-white z-10  font-Montserrat">
                Fushion AI
              </h2>

              <Image
                src={images.navLogo}
                alt="logo"
                className="w-[55px] h-[35px] max-md:w-[35] max-md:h-[15] rounded-3xl scale-[1.8]"
              />
            </div>
          </Link>
        </div>

        <div
          className={`xl:static   absolute xl:min-h-fit  min-h-[10vh]  left-0 w-full xl:w-auto  flex items-center px-5 max-xl:bg-gray-800
          max-xl:py-16 max-xl:justify-center z-10
          
          ${navbar ? "top-[4.3rem]" : "top-[-800%] "} duration-500`}
        >
          <ul className="flex xl:flex-row flex-col xl:items-center    xl:gap-[4vw] gap-8 pt-3 pb-1">
            <li className="">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-200}
                spy={true}
                activeClass={`active`}
                className="navLink relative font-poppins text-slate-100 text-[20px] font-semibold cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={`active`}
                className="navLink relative font-poppins text-slate-100 text-[20px] font-semibold cursor-pointer"
                onClick={() => setNavBar(!navbar)}
              >
                About Us
              </Link>
            </li>
            <li className="">
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={`active`}
                className="navLink relative font-poppins text-slate-100 text-[20px] font-semibold cursor-pointer"
                onClick={() => setNavBar(!navbar)}
              >
                Services
              </Link>
            </li>
            <li className="">
              <Link
                to="features"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={`active`}
                className="navLink relative font-poppins text-slate-100 text-[20px] font-semibold cursor-pointer"
                onClick={() => setNavBar(!navbar)}
              >
                Why Fushion AI ?
              </Link>
            </li>
            <li className="">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={`active`}
                className="navLink relative font-poppins text-slate-100 text-[20px] font-semibold cursor-pointer"
                onClick={() => setNavBar(!navbar)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          {/* <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            className="font-poppins text-white cursor-pointer h-full w-full"
          >
            <button
              onClick={() => setNavBar(!navbar)}
              className="bg-[#00c0ff] text-white px-5 py-2  hover:scale-[1.05] transition-all ease-in rounded-full text-lg font-medium relative"
            >
              Contact Us
            </button>
          </Link> */}

          {navbar ? (
            <AiOutlineClose
              onClick={() => setNavBar(!navbar)}
              className="text-white text-3xl cursor-pointer xl:hidden"
            />
          ) : (
            <AiOutlineAlignRight
              onClick={() => setNavBar(!navbar)}
              className="text-white text-3xl cursor-pointer xl:hidden"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
