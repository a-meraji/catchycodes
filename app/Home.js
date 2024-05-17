import AutomateCarousel from "@/components/aoutomateCarousel";
import Intro from "@/components/intro";
import Services from "@/components/services";
import Us from "@/components/us";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Us />
      <AutomateCarousel />
      <Services />
      <div className="flex items-center px-[10vw] justify-between">
        <div className="flex flex-col gap-3 w-2/3">
          <div className="font-black text-3xl">
            Custom Web Application Development
          </div>
          <div className="font-medium text-lg leading-[28px]">
            Our team specializes in building robust, scalable, and secure web
            applications tailored to your unique business needs. From initial
            concept to final deployment, we ensure a seamless development
            process that aligns with your goals.
          </div>
        </div>
        <img src="https://www.thinkcompany.com/wp-content/uploads/2023/02/services-graphic-light-500x487.png" />
      </div>
    </main>
  );
}
