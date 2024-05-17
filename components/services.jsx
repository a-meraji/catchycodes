import React from "react";

export default function Services() {
  return (
    <div className="flex text-black z-20 px-[10vw] mt-20 items-center justify-between">
      <div className="flex flex-col gap-8 items-start max-w-[60rem]">
        <div data-aos="fade-right" className="text-lg font-bold">
          services
        </div>
        <div
          data-aos="fade-right"
          className="text-6xl font-black leading-[60px]"
        >
          How we build beautiful products in constrained environments
        </div>
        <div data-aos="fade-right" className="text-xl leading-[36px]">
          Think Company designs and builds digital tools that make work and life
          easier. Here’s how we work with businesses like yours.
        </div>
      </div>
      <img
        data-aos="fade-left"
        src="https://www.thinkcompany.com/wp-content/uploads/2023/02/services-graphic-light-500x487.png"
      />
    </div>
  );
}
