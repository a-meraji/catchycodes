import { allServices } from "@/lib/data/services";
import React from "react";
import ServiceDetail from "./ServiceDetail";

export default function AllServiceDetail() {
  return (
    <section
     className="lg:mx-[10vw] mx-4">
      {allServices.map((ele, i) => (
        <ServiceDetail {...ele} key={i} i={i} />
      ))}
    </section>
  );
}
