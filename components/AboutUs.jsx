import React from "react";

export default function AboutUs() {
  return (
    <div className="flex mt-20 lg:mx-[10vw] mx-4 flex-col gap-8 md:gap-0 md:flex-row justify-between items-center">
      <div data-aos={"fade-left"} className="text-left lg:w-1/3">
        <h1 className="lg:text-6xl text-3xl font-black leading-10 max-w-64 mb-4">
          We are built Differently & Exceptionally
        </h1>
        <p className="font-medium text-lg lg:text-xl text-slate-600 mt-4 lg:mt-10">
          <span className="font-bold">CatchyCodes</span> is a software
          development company specializing in innovative programming solutions
          since 2023.
        </p>
        <p className="font-medium text-lg lg:text-xl text-slate-600 mt-4">
         {"Our services range from application development to advanced algorithmdesign, focusing on delivering quality results tailored to ourclients' needs."}
        </p>
      </div>
      <img
        data-aos={"fade-up"}
        className="lg:w-1/3"
        src="https://www.thinkcompany.com/wp-content/uploads/2023/02/services-graphic-light-500x487.png"
      />
      <div
        data-aos={"fade-right"}
        className="flex lg:w-1/3 flex-col gap-6 justify-between items-center mt-8 md:mt-0"
      >
        <div className="flex flex-col items-center mb-8 md:mb-0 lg:mr-8">
          <span className="text-5xl font-bold">23+</span>
          <span className="font-medium text-xl lg:text-2xl text-slate-600 mt-2">Software Development Expertise</span>
          <span className="font-medium text-lg lg:text-xl text-slate-600 text-center mt-2">
            {"We've successfully completed over 23 projects by utilizingcutting-edge technologies, ensuring effective and valuable solutions for our clients"}
          </span>
        </div>
        <div className="flex flex-col items-center lg:mt-10">
          <span className="text-5xl font-bold">98%</span>
          <span className="font-medium text-xl lg:text-2xl text-slate-600 mt-2">Client Satisfaction Rate</span>
          <span className="font-medium text-lg lg:text-xl text-slate-600 text-center mt-2">
            We pride ourselves on delivering high-quality software solutions
            that result in exceptional satisfaction rates among our diverse
            client base.
          </span>
        </div>
      </div>
    </div>
  );
}
