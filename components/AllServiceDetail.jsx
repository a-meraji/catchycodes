import { allServices } from "@/lib/data/services";
import React from "react";
import ServiceDetail from "./ServiceDetail";

export default function AllServiceDetail() {
  return (
    <div className="flex flex-col gap-4 px-[10vw]">
      {allServices.map((ele, i) => (
        <ServiceDetail {...ele} key={i} i={i} />
      ))}
    </div>
  );
}
