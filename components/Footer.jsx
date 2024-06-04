"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaRegCopy, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useToast } from "./ui/use-toast";

export default function Footer() {

  const { toast } = useToast()

  return (
    <div className="bg-[#ffab2cb4] mt-10 lg:pt-12 lg:mt-20 text-xl font-medium">
      <div className="footer-shadow-inner flex flex-col gap-2 lg:gap-0 text-center items-center text-white">
        <div className="hidden  w-full lg:flex flex-1 justify-between items-end pb-2 lg:px-[5vw]  flex-row lg:gap-24">
        <button onClick={()=>{
          toast({
            title: "Gmail copied to clipboard.",
            className:"bg-white text-darkAccent",
            variant: "destructive"
          })
        }} className="flex items-center gap-2 px-4 py-2 bg-[#e2d9d53a] border-[#e2d9d570] border-[1px] rounded-md">gmail: <FaRegCopy className="" /> catchycodes.co@gmail.com</button>
            <div className="absolute bottom-[8vh] right-0 left-0 !text-Gray100 text-xl font-medium">
              Contact Us
            </div>
            <div className="lg:mt-3 flex gap-4 absolute bottom-1 left-0 right-0 justify-center">
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
        
          <div className=""> All right reserved  &#169; 2024 </div>

        </div>
        <div className="lg:hidden py-2 text-sm"> All right reserved  &#169; 2024 </div>
      </div>
    </div>
  );
}
