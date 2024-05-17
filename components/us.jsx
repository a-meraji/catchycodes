import HTMLTag from "./HTMLTag";

function Us() {
  return (
    <section
      data-aos="fade"
      data-aos-duration="1000"
      className="flex px-[8vw] text-slate-600 h-screen items-center justify-center text-center"
    >
      <div data-aos="zoom-out" data-aos-duration="1500" className="w-full">
        <div>
          <p data-aos="fade-right" className="text-4xl font-bold monoton">
            Transforming Technology, Empowering Your Business
          </p>
         
          <p data-aos="fade-left" className="flex items-center text-lg mt-20">
            At Catchy Codes, we combine innovation with expertise to
            deliver top-tier web solutions tailored to your unique needs.
            Explore our range of services designed to help you achieve
            operational excellence, enhance user experiences, and drive business
            growth.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
            <HTMLTag />
          </div>
    </section>
  );
}

export default Us;
