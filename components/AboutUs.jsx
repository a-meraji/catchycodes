import React from "react";

export default function AboutUs() {
  return (
    <div className="flex  flex-col md:flex-row justify-between items-center">
      <div data-aos={"fade-left"} className="text-left lg:w-1/3">
        <h1 className="text-4xl max-w-64 font-bold mb-4">
          We are built Differently & Exceptionally
        </h1>
        <p className="text-lg mb-4">
          <span className="font-bold">CatchyCodes</span> is a software
          development company specializing in innovative programming solutions
          since 2023.
        </p>
        <p className="text-base mb-4">
          Our services range from application development to advanced algorithm
          design, focusing on delivering quality results tailored to our
          clients' needs.
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
          <span className="text-lg mt-2">Software Development Expertise</span>
          <span className="text-base text-center mt-2">
            We've successfully completed over 23 projects by utilizing
            cutting-edge technologies, ensuring effective and valuable solutions
            for our clients
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">98%</span>
          <span className="text-lg mt-2">Client Satisfaction Rate</span>
          <span className="text-base text-center mt-2">
            We pride ourselves on delivering high-quality software solutions
            that result in exceptional satisfaction rates among our diverse
            client base.
          </span>
        </div>
      </div>
    </div>
  );
}
