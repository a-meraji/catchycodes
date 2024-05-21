import { allServices } from "@/lib/data/services";
import React from "react";
import ServiceDetail from "./ServiceDetail";

export default function AllServiceDetail() {
  return (
    <div className="flex flex-col lg:gap-4 gap-8">
      {allServices.map((ele, i) => (
        <ServiceDetail {...ele} key={i} i={i} />
      ))}
    </div>
  );
}
