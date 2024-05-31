"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#d17921d5]  mt-10 lg:mt-20">
      <div className="footer-shadow-inner flex flex-col gap-2 lg:gap-0  items-center text-white">
        <div className="flex flex-col pb-2  text-center  lg:flex-row lg:gap-24">
          <div>
            <div className="lg:mt-10 !text-Gray100 font-14Bold">
              Contact With Us
            </div>
            <div className="lg:mt-3 flex gap-4">
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://t.me/betatik", "_blank");
                }}
              >
                <FaTelegram className="w-8 h-8"/>
              </div>
              <div className="cursor-pointer">
                <FaWhatsapp className="w-8 h-8"/>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/betatik/",
                    "_blank"
                  );
                }}
              >
                <FaLinkedin className="w-8 h-8"/>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/betatik.co/?hl=en",
                    "_blank"
                  );
                }}
              >
                <FaInstagram className="w-8 h-8"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
