import HTMLTag from "./HTMLTag";

function Us() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex lg:mx-[10vw] -mt-16 mx-4 lg:flex-row flex-col gap-4 lg:gap-0 lg:mt-0  min-h-screen items-center justify-center text-center"
    >
      <div data-aos-duration="1500" className="w-full">
        <div>
          <p data-aos="fade-right" className="lg:text-6xl text-3xl font-black leading-10">
            Transforming Technology, Empowering Your Business
          </p>
         
          <p data-aos="fade-left" className="flex items-center lg:text-xl text-slate-600 text-lg mt-10 lg:mt-20">
            At Catchy Codes, we combine innovation with expertise to
            deliver top-tier web solutions tailored to your unique needs.
            Explore our range of services designed to help you achieve
            operational excellence, enhance user experiences, and drive business
            growth.
          </p>
        </div>
      </div>
      {/* <div className="w-full flex items-center justify-center">
            <HTMLTag />
          </div> */}
    </section>
  );
}

export default Us;
