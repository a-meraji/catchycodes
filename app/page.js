"use client";
import AboutUs from "@/components/AboutUs";
import AllServiceDetail from "@/components/AllServiceDetail";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import AutomateCarousel from "@/components/aoutomateCarousel";
import Intro from "@/components/intro";
// import CatchyHead from "@/components/layout/CatchyHead";
import Services from "@/components/services";
import Us from "@/components/us";

export default function Home() {
  return (
    <main className="relative text-primary overflow-hidden">
      <Intro />
      <Us />
      <AutomateCarousel />
      <Services/>
      <AllServiceDetail />
      <AboutUs/>
      <Footer />
      <ContactUs /> 
    </main>
  );
}
