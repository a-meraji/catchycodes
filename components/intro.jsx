"use client";
function Intro() {
  return (
    <div className="text-center flex flex-col justify-center items-center mt-[25vh] lg:mx-[10vw] mx-4">
      <div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="relative mt-20 flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:translate-x-1/2 before:right-1/2 before:rounded-full before:bg-gradient-radial before:from-[#ffe6d7c2] before:to-transparent before:blur-2xl before:content-[''] z-[1]"
      >
        <h1 className="monoton-regular text-slate-600 lg:text-8xl text-6xl leading-[4rem]">
          CATCHY CODES
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="jakarta mt-20 text-2xl text-[#E74C2B]"
      >
        Harmonized Digital
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
          .monoton-regular {
            font-family: "Monoton", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        `}
      </style>
      </div>

    </div>
  );
}

export default Intro;
