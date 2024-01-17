// components/LogoCarousel.tsx

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
      <div className="logo-carousel overflow-hidden padding-x padding-y">
        <div className="logo-container">
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex justify-center items-center px-5"
              style={{ minWidth: "10%" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;
