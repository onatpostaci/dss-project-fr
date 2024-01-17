// components/Hero.js
"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { CustomButton } from ".";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // function for handling the CustomButton click
  const handleButtonClick = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      {/* Background Image Container */}
      <div className="hero__image-container">
        {/* Optionally include an overlay */}
        <div className="hero__image-overlay" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        className="hero__content z-10"
      >
        <h1 className="hero__title text-white py-5">
          Discover your insights with one click!
        </h1>
        <p className="hero__subtitle text-white">
          Streamline your organization insights with one click and take advice
          from state-of-art Gen-AI to use your data for your benefit!
        </p>
        <div className="flex flex-row justify-evenly items-center gap-10">
          <CustomButton
            title="Pricing Details"
            containerStyles="bg-transparent border-2 border-sky-500 text-white rounded-full mt-10"
            handleClick={() => {}}
          />
          <CustomButton
            title="Try Now!"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={() => {}}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;