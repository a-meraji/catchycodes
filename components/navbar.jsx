import React from "react";

function Navbar() {
  return (
    <nav
      data-aos="fade-down"
      className="fixed z-10 text-[#ffffff] flex items-center justify-center w-full text-sm top-3"
    >
      <div className="flex orange-glass items-center justify-around rounded-2xl py-2 px-4 min-w-[75vw] md:min-w-[30vw] ">
        <div>ABOUT</div>
        <div>SERVICES</div>

        <div>WORKS</div>
        <div>CONTACT</div>
      </div>
    </nav>
  );
}

export default Navbar;
