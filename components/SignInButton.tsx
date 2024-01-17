// SignInButton.js

"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="flex items-center gap-2 shadow-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="bg-white p-2 rounded-full">
        <Image
          src="/google-logo.png"
          alt="google-logo"
          height={30}
          width={30}
        />
      </div>
      <span className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-r-full">
        Log In with Google
      </span>
    </button>
  );
};

export default SignInButton;
