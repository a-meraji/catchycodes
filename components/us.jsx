"use client"
import { useRef } from "react";
import HTMLTag from "./HTMLTag";
import AppearingWords from "./appearingWords";
import { motion, useInView } from "framer-motion";

function Us() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const words = ["Transforming", "Technology,", "Empowering Your ", "Business"];
  const words2String = `At Catchy Codes, we combine innovation with expertise to deliver
  top-tier web solutions tailored to your unique needs. Explore our
  range of services designed to help you achieve operational excellence,
  enhance user experiences, and drive business growth.`;
  const words2 = words2String.split(" ");

  return (
    <motion.section
    ref={ref}
    style={{
      transform: isInView
        ? "none"
        : "translateY(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    }}
      className="flex lg:mx-[10vw] -mt-16 mx-4 lg:flex-row flex-col gap-4 lg:gap-0 lg:mt-0  min-h-screen items-center justify-center text-center"
    >
      <div>
        <div className="lg:text-6xl text-3xl font-black leading-10">
          <AppearingWords words={words} hasCostumeStayles={true} />
        </div>
        <div className=" lg:text-xl text-slate-600 text-lg leading-7 mt-10 lg:mt-20">
          <AppearingWords words={words2} />
        </div>
      </div>
      {/* <div className="w-full flex items-center justify-center">
            <HTMLTag />
          </div> */}
    </motion.section>
  );
}

export default Us;
