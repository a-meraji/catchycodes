import React from "react";
import ServiceAnimContainer from "./ServiceAnimContainer";
import Image from "next/image";

export default function ServiceDetail(props) {
  const {
    title = "Custom Web Application Development",
    subTitle = "Our team specializes in building robust, scalable, and secure web applications tailored to your unique business needs. From initial concept to final deployment, we ensure a seamless development process that aligns with your goals.",
    image = "https://www.thinkcompany.com/wp-content/uploads/2023/02/services-graphic-light-500x487.png",
    i,
  } = props;

  return (
    <div
      className={`flex mt-20 lg:flex-row flex-col gap-6 lg:gap-0 items-center ${
        i % 2 == 0 ? "lg:flex-row-reverse" : ""
      }  justify-between`}
    >
      <div className="flex flex-col gap-6 lg:w-1/2">
        <ServiceAnimContainer i={i}>
          <div className="font-black text-2xl lg:text-3xl">{title}</div>
        </ServiceAnimContainer>
        <ServiceAnimContainer i={i}>
          <div className="font-medium text-lg lg:text-xl text-slate-600">
            {subTitle}
          </div>
        </ServiceAnimContainer>
      </div>
      <ServiceAnimContainer i={i + 1}>
        <Image className="rounded-md" width={300} height={300} src={image} />
      </ServiceAnimContainer>
    </div>
  );
}
