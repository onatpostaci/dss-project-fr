// LoginModal.js

import React from "react";
import { LoginModalProps } from "@/types"; // Ensure this path is correct
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Ensure you have Heroicons installed
import SignInButton from "./SignInButton";

const LoginModal = ({
  open,
  modalRef,
  handleOverlayClick,
  handleClose,
}: LoginModalProps) => {
  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <>
      {open && (
        <div onClick={handleOverlayClick} className="modal">
          <div
            onClick={handleModalClick}
            ref={modalRef}
            className="modal__container relative" // Ensure the container is relative for absolute positioning of children
          >
            {/* Close Button */}
            <div className="absolute top-3 right-3">
              <button onClick={handleClose}>
                <XMarkIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
              </button>
            </div>

            <Image
              src={"/LogIn.png"}
              alt="brandify logo"
              width={118}
              height={20}
              className="object-contain"
            />

            <form className="mt-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 mb-4 border rounded border-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-4 border rounded border-gray-300"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-200 ease-in-out"
              >
                Log In
              </button>
            </form>

            <div className="mt-4">
              <p className="text-center text-gray-600 mb-4">
                or use Google Credentials
              </p>
              <SignInButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
