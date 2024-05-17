import React from "react";

export default function ServiceDetail(props) {
  const {
    title = "Custom Web Application Development",
    subTitle = "Our team specializes in building robust, scalable, and secure web applications tailored to your unique business needs. From initial concept to final deployment, we ensure a seamless development process that aligns with your goals.",
    image = "https://www.thinkcompany.com/wp-content/uploads/2023/02/services-graphic-light-500x487.png",
    i,
  } = props;
  const isOdd = i % 2 == 0;
  return (
    <div
      className={`flex items-center ${
        isOdd ? "flex-row-reverse" : ""
      }  justify-between`}
    >
      <div className="flex flex-col gap-3 w-1/2">
        <div
          data-aos={isOdd ? "fade-right" : "fade-left"}
          className="font-black text-3xl"
        >
          {title}
        </div>
        <div
          data-aos={isOdd ? "fade-right" : "fade-left"}
          className="font-medium text-lg leading-[28px]"
        >
          {subTitle}
        </div>
      </div>
      <img data-aos={isOdd ? "fade-left" : "fade-right"} src={image} />
    </div>
  );
}