"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";
import React, { useState } from "react";

const CustomButton = ({
  title,
  textColor,
  btnType,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles} text-${textColor}`}
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default CustomButton;
