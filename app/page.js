"use client";
import AboutUs from "@/components/AboutUs";
import AllServiceDetail from "@/components/AllServiceDetail";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import AutomateCarousel from "@/components/aoutomateCarousel";
import Intro from "@/components/intro";
import Services from "@/components/services";
import Us from "@/components/us";
import { Transition } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  return (
    <main className="relative">
      <Intro />
      <Us />
      <AutomateCarousel />
      <Services />
      <AllServiceDetail />
      <AboutUs />
      <Footer />
      <ContactUs />
    </main>
  );
}
