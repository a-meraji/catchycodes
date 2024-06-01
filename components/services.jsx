import React from "react";
import ServiceAnimContainer from "./ServiceAnimContainer";
import Parallex from "./parallex";

export default function Services() {
  return (
    <div className="my-20">
      <div className="-mb-[92vh] mx-4 lg:px-[10vw]">
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
      <div className="-mt-[92vh] mx-4 lg:px-[10vw]">
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
