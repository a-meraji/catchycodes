"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function ServiceAnimContainer({ children, i }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const odd = i % 2 == 0;

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView
          ? "none"
          : odd
          ? "translateX(200px)"
          : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </motion.div>
  );
}

export default ServiceAnimContainer;
