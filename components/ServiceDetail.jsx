"use client"
import React, { useEffect, useState } from "react";

export default function ServiceDetail(props) {
  const {
    title = "Custom Web Application Development",
    subTitle = "Our team specializes in building robust, scalable, and secure web applications tailored to your unique business needs. From initial concept to final deployment, we ensure a seamless development process that aligns with your goals.",
    image = "https://www.thinkcompany.com/wp-content/uploads/2023/02/services-graphic-light-500x487.png",
    i,
  } = props;

  return (
    <div
      className={`flex lg:flex-row flex-col gap-4 lg:gap-0 items-center ${
        i % 2 == 0 ? "lg:flex-row-reverse" : ""
      }  justify-between`}
    >
      <div className="flex flex-col gap-3 lg:w-1/2">
        <div
          data-aos={i % 2 == 0 ? "fade-right" : "fade-left"}
          className="font-black text-3xl"
        >
          {title}
        </div>
        <div
          data-aos={i % 2 == 0 ? "fade-right" : "fade-left"}
          className="font-medium text-lg leading-[28px]"
        >
          {subTitle}
        </div>
      </div>
      <img data-aos={i % 2 == 0 ? "fade-left" : "fade-right"} src={image} />
    </div>

  );
}
