import React from "react";
import ServiceAnimContainer from "./ServiceAnimContainer";
import Parallex from "./parallex";


export default function Services() {
  return (
    <div className="relative z-20 my-40">
     <div className="absolute -z-10 -top-10 -bottom-10 -left-10 -right-10 bg-gradient-to-b from-[#18100700] via-[#2917022c] to-[#1b0f0100]"></div>
      <div className="-mb-[75vh] mx-4 lg:px-[10vw]">
        <ServiceAnimContainer i={0}>
          <div className="lg:text-xl  text-lg">services</div>
        </ServiceAnimContainer>
        <ServiceAnimContainer i={0}>
          <div className="lg:text-6xl text-3xl font-black leading-10 mt-8">
            How we build beautiful products in constrained environments
          </div>
        </ServiceAnimContainer>
        </div>
        <Parallex />
      <div className="-mt-[75vh] mx-4 lg:px-[10vw]">

        <ServiceAnimContainer i={1}>
          <div className="lg:text-6xl text-3xl font-black leading-10">
            Think Company designs and builds digital tools that make work and
            life easier. Here’s how we work with businesses like yours.
          </div>
        </ServiceAnimContainer>
      </div>
      </div>
  );
}
