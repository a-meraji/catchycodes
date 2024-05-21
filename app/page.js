import AboutUs from "@/components/AboutUs";
import AllServiceDetail from "@/components/AllServiceDetail";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
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
      <AllServiceDetail />
      <AboutUs />
      <Footer />
    </main>
  );
}
