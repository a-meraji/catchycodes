import React from "react";
import ServiceAnimContainer from "./ServiceAnimContainer";

export default function Services() {
  return (
    <div className="flex lg:flex-row flex-col z-20 lg:px-[10vw] px-8  mt-20 items-center justify-between">
      <div className="flex flex-col gap-8 items-start  max-w-[60rem]">
        <ServiceAnimContainer i={0}>
          <div className="text-lg text-slate-600 font-bold">services</div>
        </ServiceAnimContainer>
        <ServiceAnimContainer i={0}>
          <div className="lg:text-6xl text-3xl font-black leading-10">
            How we build beautiful products in constrained environments
          </div>
        </ServiceAnimContainer>
        <ServiceAnimContainer i={0}>
          <div className="lg:text-xl text-slate-600 text-lg">
            Think Company designs and builds digital tools that make work and
            life easier. Here’s how we work with businesses like yours.
          </div>
        </ServiceAnimContainer>
      </div>
      <ServiceAnimContainer i={1}>
        <img
          className="mt-8 lg:mt-0"
          src="https://www.thinkcompany.com/wp-content/uploads/2023/02/services-graphic-light-500x487.png"
        />
      </ServiceAnimContainer>
    </div>
  );
}
