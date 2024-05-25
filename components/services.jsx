import React from "react";

export default function Services() {
  return (
    <div className="flex lg:flex-row flex-col text-black z-20 lg:px-[10vw] px-8  mt-20 items-center justify-between">
      <div className="flex flex-col gap-8 lg:items-start items-center max-w-[60rem]">
        <div data-aos="fade-right" className="text-lg text-slate-600 font-bold">
          services
        </div>
        <div
          data-aos="fade-right"
          className="lg:text-6xl text-3xl font-black leading-10"
        >
          How we build beautiful products in constrained environments
        </div>
        <div data-aos="fade-right" className="lg:text-xl text-slate-600 text-lg">
          Think Company designs and builds digital tools that make work and life
          easier. Here’s how we work with businesses like yours.
        </div>
      </div>
      <img
        data-aos="fade-left"
        className="mt-8 lg:mt-0"
        src="https://www.thinkcompany.com/wp-content/uploads/2023/02/services-graphic-light-500x487.png"
      />
    </div>
  );
}
