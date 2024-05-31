"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

function AppearingWords({words,hasCostumeStayles=false}) {
 
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "0.3 0.3"],
  });
  return (
    <div className="w-full">
      <div>
        <motion.p
          ref={element}
          className=" paragraph"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} range={[start,end]} progress={scrollYProgress} otherStyles={hasCostumeStayles?i==1?"text-[#e69d4a] mx-1"
            :i==3&&"text-[#4565ac] mx-1":""}>{word}</Word>;
          })}
         
        </motion.p>
      </div>
    </div>
  );
}

const Word = ({ children, range, progress, otherStyles }) => {
    const opacity = useTransform(progress, range, [0.2,1]);
  return <span  className={`word ${otherStyles}`}>
      <motion.span style={{opacity}}>{children}</motion.span>
  </span>
};

export default AppearingWords;
