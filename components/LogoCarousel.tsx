// components/LogoCarousel.tsx
"use client";
import React from "react";
import Image from "next/image";
import { LogoItem } from "@/types";

const LogoCarousel: React.FC<{ logos: LogoItem[] }> = ({ logos }) => {
  const extendedLogos = [...logos, ...logos]; // Duplicate the array of logos

  return (
    <>
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">References</h1>
        <p>The references and technologies that InsightAIzer</p>
      </div>
      <div className="flex overflow-hidden space-x-40">
        <div className="flex space-x-30 animate-loop-scroll">
        {extendedLogos.map((logo, index) => (
          <Image
            loading="lazy"
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            objectFit="contain"
          />

        ))}
        </div>
        <div className="flex space-x-30 animate-loop-scroll" aria-hidden="true">
        {extendedLogos.map((logo, index) => (
          <Image
            loading="lazy"
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            objectFit="contain"
          />

        ))}
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;
