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
    <header className="max-container py-2  font-poppins md:fixed-nav z-10 ">
      <nav className="max-container flex justify-between items-center w-[82%] mx-auto ">
        <div className="z-50">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="cursor-pointer"
          >
            <Image
              src={images.navLogo}
              alt="logo"
              className="w-[50px] h-[30px] rounded-3xl scale-[1.7]"
            />
          </Link>
        </div>

        <div
          className={`md:static   absolute md:min-h-fit  min-h-[40vh]  left-0 w-full md:w-auto  flex items-center px-5 ${
            navbar ? "top-[9%]" : "top-[-100%]"
          } duration-500`}
        >
          <ul className="flex md:flex-row flex-col md:items-center  md:gap-[4vw] gap-8 pt-3 pb-1">
            <li className="">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="navLink relative font-poppins text-gray-800 text-xl font-semibold cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="navLink relative font-poppins text-gray-800 text-xl font-semibold cursor-pointer"
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
                className="navLink relative font-poppins text-gray-800 text-xl font-semibold cursor-pointer"
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
                className="navLink relative font-poppins text-gray-800 text-xl font-semibold cursor-pointer"
                onClick={() => setNavBar(!navbar)}
              >
                Why Fushion AI ?
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <Link
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
          </Link>

          {navbar ? (
            <AiOutlineClose
              onClick={() => setNavBar(!navbar)}
              className="text-white text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <AiOutlineAlignRight
              onClick={() => setNavBar(!navbar)}
              className="text-white text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
