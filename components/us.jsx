import HTMLTag from "./HTMLTag";

function Us() {
  return (
    <section data-aos="fade" data-aos-duration="1000" className="flex bg-gradient-to-b to-[#df6c0d] via-[#df6c0dee] from-[#df6c0dbe] text-white px-[8vw] h-screen items-center justify-center text-center">
    <div data-aos="zoom-out" data-aos-duration="1500">
      <div>
      <p data-aos="fade-right" className="text-4xl font-bold monoton">ABOUT</p>
        <div className="my-20 flex items-center justify-center">
          <HTMLTag />
        </div>
        <p  data-aos="fade-left" className="flex items-center text-lg">
        where innovation meets professionalism. We are a dedicated team of
        programmers specializing in web application development. Our collective
        expertise and passion for technology enable us to deliver high-quality,
        customized web solutions for businesses of all sizes.
      </p>
      </div>
    </div>
  </section>
  );
}

export default Us;
