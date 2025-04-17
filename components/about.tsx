"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "./burst-bload";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex justify-center">
        <SectionHeading>🚀 About Me</SectionHeading>
        <BurstBload />
      </div>
      <p>
        Hello!, My Name is Muhammad Azam Naqib, But You Can Call Me Naqib😎. I Come From Demak City, Central Java, Indonesia. I Am One Of The Self-Taught JavaScript Learners, I'm Interested In JavaScript Because It Doesn't Look Too Complex And I Think JavaScript Is Not Too Difficult If There Is A Will To Learn. My Message For You Guys Keep The Spirit Up!
      </p>
    </motion.section>
  );
}
