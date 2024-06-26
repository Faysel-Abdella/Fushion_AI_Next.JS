"use client";

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import Image from "next/image";

const Footer = () => {
  return (
    <section className="">
      <div className="chat chat-start font-poppins py-10 ml-4">
        <div className="chat-bubble bg-blue-500 py-6 text-xl font-medium">
          At Fushion AI, we are dedicated to providing exceptional support and
          assistance to our clients. Whether you have a question, need more
          information about our services, or want to discuss how we can help you
          transform your real estate investments, our team is here to assist.
        </div>
      </div>
      <footer className="footer py-20 p-10 bg-neutral text-neutral-content font-Montserrat">
        <nav>
          <h6 className="footer-title text-slate-50 opacity-100 text-xl">
            Services
          </h6>
          <a className="text-base font-semibold">
            Insights for Investors and Professionals
          </a>
          <a className="text-base font-semibold">Products for Consumers</a>
          <a className="text-base font-semibold">Customized Solutions</a>
          <a className="text-base font-semibold">Consultancy</a>
        </nav>
        <nav>
          <h6 className="footer-title text-slate-50 opacity-100 text-xl">
            Pages
          </h6>
          <a className="text-base font-semibold">Home</a>
          <a className="text-base font-semibold">About Us</a>
          <a className="text-base font-semibold">Services</a>
          <a className="text-base font-semibold">Features</a>
        </nav>
        <nav>
          <h6 className="footer-title text-slate-50 opacity-100 text-xl">
            Contact
          </h6>
          <a className="text-base font-semibold">
            fushionai.business@gmail.com
          </a>
          <a className="text-base font-semibold">+31 (6) 11082835</a>
        </nav>
      </footer>

      <footer className="footer items-center pt-6 pb-8 px-10 p-4 bg-neutral text-neutral-content font-Montserrat">
        <aside className="items-center grid-flow-col">
          <h2 className="font-bold text-xl">Fushion AI </h2>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M11.9976 2.16233C15.203 2.16233 15.5793 2.17662 16.8462 2.23378C18.0179 2.28617 18.6513 2.48144 19.0752 2.64814C19.6372 2.86724 20.0373 3.12443 20.4564 3.54356C20.8756 3.96269 21.1375 4.36277 21.3519 4.92479C21.5138 5.34868 21.7138 5.98214 21.7662 7.1538C21.8234 8.42072 21.8377 8.79698 21.8377 12.0024C21.8377 15.2078 21.8234 15.584 21.7662 16.851C21.7138 18.0226 21.5186 18.6561 21.3519 19.08C21.1328 19.642 20.8756 20.0421 20.4564 20.4612C20.0373 20.8803 19.6372 21.1423 19.0752 21.3566C18.6513 21.5186 18.0179 21.7186 16.8462 21.771C15.5793 21.8281 15.203 21.8424 11.9976 21.8424C8.79222 21.8424 8.41596 21.8281 7.14904 21.771C5.97738 21.7186 5.34392 21.5233 4.92002 21.3566C4.35801 21.1375 3.95793 20.8803 3.5388 20.4612C3.11967 20.0421 2.85771 19.642 2.64338 19.08C2.48144 18.6561 2.28141 18.0226 2.22901 16.851C2.17186 15.584 2.15757 15.2078 2.15757 12.0024C2.15757 8.79698 2.17186 8.42072 2.22901 7.1538C2.28141 5.98214 2.47668 5.34868 2.64338 4.92479C2.86247 4.36277 3.11967 3.96269 3.5388 3.54356C3.95793 3.12443 4.35801 2.86247 4.92002 2.64814C5.34392 2.48621 5.97738 2.28617 7.14904 2.23378C8.41596 2.17186 8.79698 2.16233 11.9976 2.16233ZM11.9976 0C8.73983 0 8.33022 0.0142886 7.04902 0.0714428C5.77257 0.128597 4.90097 0.3334 4.13892 0.628696C3.34828 0.933519 2.68148 1.34789 2.01469 2.01469C1.34789 2.68148 0.938281 3.35305 0.628696 4.13892C0.3334 4.90097 0.128597 5.77257 0.0714428 7.05378C0.0142886 8.33022 0 8.73983 0 11.9976C0 15.2554 0.0142886 15.665 0.0714428 16.9462C0.128597 18.2227 0.3334 19.0943 0.628696 19.8611C0.933519 20.6517 1.34789 21.3185 2.01469 21.9853C2.68148 22.6521 3.35305 23.0617 4.13892 23.3713C4.90097 23.6666 5.77257 23.8714 7.05378 23.9286C8.33499 23.9857 8.73983 24 12.0024 24C15.2649 24 15.6698 23.9857 16.951 23.9286C18.2274 23.8714 19.099 23.6666 19.8658 23.3713C20.6565 23.0665 21.3233 22.6521 21.9901 21.9853C22.6569 21.3185 23.0665 20.647 23.3761 19.8611C23.6714 19.099 23.8762 18.2274 23.9333 16.9462C23.9905 15.665 24.0048 15.2602 24.0048 11.9976C24.0048 8.73507 23.9905 8.33022 23.9333 7.04902C23.8762 5.77257 23.6714 4.90097 23.3761 4.13415C23.0712 3.34352 22.6569 2.67672 21.9901 2.00992C21.3233 1.34312 20.6517 0.933519 19.8658 0.623933C19.1038 0.328637 18.2322 0.123834 16.951 0.0666799C15.665 0.0142885 15.2554 0 11.9976 0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.9976 5.84015C8.59695 5.84015 5.8345 8.59784 5.8345 12.0033C5.8345 15.4087 8.59219 18.1664 11.9976 18.1664C15.4031 18.1664 18.1608 15.4087 18.1608 12.0033C18.1608 8.59784 15.4031 5.84015 11.9976 5.84015ZM11.9976 15.9993C9.78766 15.9993 7.99683 14.2085 7.99683 11.9985C7.99683 9.78856 9.78766 7.99772 11.9976 7.99772C14.2076 7.99772 15.9984 9.78856 15.9984 11.9985C15.9984 14.2085 14.2076 15.9993 11.9976 15.9993Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M18.4034 7.02851C19.1976 7.02851 19.8415 6.38465 19.8415 5.59041C19.8415 4.79618 19.1976 4.15232 18.4034 4.15232C17.6091 4.15232 16.9653 4.79618 16.9653 5.59041C16.9653 6.38465 17.6091 7.02851 18.4034 7.02851Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="currentColor"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4.309C23.117 4.701 22.168 4.965 21.172 5.084C22.189 4.475 22.97 3.51 23.337 2.36C22.386 2.924 21.332 3.334 20.21 3.555C19.313 2.598 18.032 2 16.616 2C13.437 2 11.101 4.966 11.819 8.045C7.728 7.84 4.1 5.88 1.671 2.901C0.381 5.114 1.002 8.009 3.194 9.475C2.388 9.449 1.628 9.228 0.965 8.859C0.911 11.14 2.546 13.274 4.914 13.749C4.221 13.937 3.462 13.981 2.69 13.833C3.316 15.789 5.134 17.212 7.29 17.252C5.22 18.875 2.612 19.6 0 19.292C2.179 20.689 4.768 21.504 7.548 21.504C16.69 21.504 21.855 13.783 21.543 6.858C22.505 6.163 23.34 5.296 24 4.309Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.93796 24H0.379843V7.28691H4.93796V24ZM2.6589 5.36034C1.19119 5.36034 0 4.16004 0 2.68017C0 1.2003 1.19119 0 2.6589 0C4.12661 0 5.3178 1.2003 5.3178 2.68017C5.3178 4.16004 4.12813 5.36034 2.6589 5.36034ZM23.1704 24H18.6123V15.4854C18.6123 10.3682 12.5348 10.7556 12.5348 15.4854V24H7.9767V7.28691H12.5348V9.9686C14.6574 6.0395 23.1704 5.74931 23.1704 13.7306V24Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
