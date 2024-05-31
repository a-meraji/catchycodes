"use client";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-[80vh] pt-[25vh] lg:mx-[10vw] mx-4">
      <div>
        <div className="relative mt-20 flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:translate-x-1/2 before:right-1/2 before:rounded-full before:bg-gradient-radial before:from-[#ffe6d7c2] before:to-transparent before:blur-2xl before:content-[''] z-[1]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="monoton-regular text-slate-600 lg:text-8xl text-6xl leading-[4rem]"
          >
            CATCHY CODES
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: "1rem" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="jakarta mt-20 text-2xl text-[#E74C2B]"
        >
          Harmonized Digital
        </motion.div>
        <style jsx>
          {`
            @import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
            .monoton-regular {
              font-family: "Monoton", sans-serif;
              font-weight: 400;
              font-style: normal;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Intro;
