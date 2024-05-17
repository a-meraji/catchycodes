"use client";
import React from "react";
// import { motion, useScroll } from "framer-motion";
import Intro from "./intro";

export function GridBackgroundDemo() {
//   const arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
// const {scrollYProgress} = useScroll(0)
  return (<>
    <div 
    data-aos="fade-zoom-in"
    className=" h-screen w-full dark:bg-black bg-[#ffe8d3]  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
         <Intro />
       </div>
{/* <motion.div className="hidden md:block h-[200vh] ">
  <div className="fixed top-0 left-0 bottom-0 right-0">

  <div className="absolute flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0">

{arr.map((ar,i)=><motion.div key={i} style={{ scaleX: scrollYProgress }} className='h-[1px] mt-10 w-full content-[" "] bg-black' />)
}</div>
<div className="absolute flex flex-row justify-center items-center top-0 bottom-0 left-0 right-0">
<motion.div style={{ scaleY: scrollYProgress }} className='w-[1px] mr-10 h-screen content-[" "] bg-black' />
<motion.div style={{ scaleY: scrollYProgress }} className='w-[1px] mr-10 h-screen content-[" "] bg-black' />
<motion.div style={{ scaleY: scrollYProgress }} className='w-[1px] mr-10 h-screen content-[" "] bg-black' />
<motion.div style={{ scaleY: scrollYProgress }} className='w-[1px] mr-10 h-screen content-[" "] bg-black' />
<motion.div style={{ scaleY: scrollYProgress }} className='w-[1px] mr-10 h-screen content-[" "] bg-black' />
<motion.div style={{ scaleY: scrollYProgress }} className='w-[1px] mr-10 h-screen content-[" "] bg-black' />
<motion.div style={{ scaleY: scrollYProgress }} className='w-[1px] mr-10 h-screen content-[" "] bg-black' />
{arr.map((ar,i)=><motion.div key={i} style={{ scaleY: scrollYProgress }} className='w-[1px] mr-10 h-screen content-[" "] bg-black' />)
}
  </div>
  </div>
  <div className="pt-[200vh]">
  <Intro />
  </div>
</motion.div> */}
</>
  );
}
