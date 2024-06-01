"use client"
import { allNavBarIcon } from "@/lib/data/general";
import React from "react";
import NavBarIcon from "./NavBarIcon";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="z-10 text-[#ffffff] flex items-center fixed  justify-center right-0 left-0 text-sm lg:top-3 top-6">
      <motion.div
        initial={{ opacity: 0, translateY:"-1rem" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex orange-glass items-center justify-around rounded-2xl
       py-2 px-4 w-[75vw] sm:w-[65] md:w-[55] lg:w-[45vw] 2xl:[30vw]`}
      >
        {allNavBarIcon.map((ele, i) => (
          <NavBarIcon {...ele} key={i} />
        ))}
      </motion.div>
    </nav>
  );
}

export default Navbar;
