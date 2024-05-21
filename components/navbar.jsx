import { allNavBarIcon } from "@/lib/data/general";
import React from "react";
import NavBarIcon from "./NavBarIcon";

function Navbar() {
  return (
    <nav
      data-aos="fade-down"
      className="fixed z-10   lg:-mx-[10vw]   text-[#ffffff] flex items-center justify-center w-full text-sm lg:top-3 top-6"
    >
      <div className="flex  orange-glass items-center  justify-around rounded-2xl py-2 px-4 min-w-[75vw] md:min-w-[30vw]">
        {allNavBarIcon.map((ele) => (
          <NavBarIcon {...ele} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
