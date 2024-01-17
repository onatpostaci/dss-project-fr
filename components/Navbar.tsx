"use client";
import React, { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton, LoginModal } from ".";
import { useSession } from "next-auth/react";

interface IProps {
  action: string;
}

const Navbar = ({ action }: IProps) => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleOverlayClick = (e: MouseEvent) => {
    if (modalRef.current && modalRef.current.contains(e.target as Node)) {
      handleModalClose();
    }
  };
  const modalRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <header className="w-full absolute z-10 ">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link href={"/"} className="flex justify-center items-center">
            <Image
              src={"/logo-insightaizer.png"}
              alt="brandify logo"
              width={150}
              height={100}
              className="object-contain"
            />
          </Link>

          <CustomButton
            title="Sign In"
            textColor="white"
            btnType="button"
            containerStyles="rounded-full bg-[#4ca89f] min-w-[130px]"
            handleClick={handleModalOpen}
          />
        </nav>
      </header>
      <LoginModal
        modalRef={modalRef}
        handleOverlayClick={handleOverlayClick}
        open={open}
        handleClose={handleModalClose}
      />
    </>
  );
};

export default Navbar;
