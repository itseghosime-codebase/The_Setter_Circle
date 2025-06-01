"use client";
import React from "react";
import { FaBarsStaggered, FaTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

export default function Navbar() {
  const [clicked, setClicked] = React.useState(true);
  const changeToggle = () => {
    setClicked(!clicked);
  };
  return (
    <header className="fixed z-40 top-0 bg-[#040404] inset-x-0 flex items-center md:justify-center">
      <nav className="w-full lg:px-16 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between py-2 bg-[#040404] px-6 relative z-10">
          <Link href="/">
            <Image
              sizes="100%"
              src={Logo}
              alt="Logo"
              className="w-auto h-14 md:h-16"
            />
          </Link>
          <button className="lg:hidden text-white" onClick={changeToggle}>
            {!clicked ? (
              <IoClose className="text-2xl" />
            ) : (
              <FaBarsStaggered className="text-xl" />
            )}
          </button>
        </div>
        <ul
          className={`flex flex-col lg:flex-row fixed transition-all text-white ease-in-out duration-500 ${
            clicked ? "-translate-x-[100vh] lg:translate-x-0" : "translate-x-0"
          } top-0 left-0 -z-0 w-full max-w-sm lg:max-w-full items-start lg:items-center font-normal font-sans justify-start pt-20 md:pt-28 lg:pt-0 gap-3 px-6 lg:gap-10 h-screen bg-[#040404] lg:relative lg:bg-transparent lg:w-auto lg:h-auto`}
        >
          <li>
            <Link
              className="hover:text-primary"
              onClick={() => setClicked(true)}
              href="#about"
            >
              <span className="text-sm font-normal">About us</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary"
              onClick={() => setClicked(true)}
              href="#works"
            >
              <span className="text-sm font-normal">How it works</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary"
              onClick={() => setClicked(true)}
              href="#clients"
            >
              <span className="text-sm font-normal">Clients</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary"
              onClick={() => setClicked(true)}
              href="#why"
            >
              <span className="text-sm font-normal">Why it works</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary"
              onClick={() => setClicked(true)}
              href="#faq"
            >
              <span className="text-sm font-normal">FAQ</span>
            </Link>
          </li>
          <li className="w-full lg:w-fit">
            <Link
              href={"#bookings"}
              onClick={() => setClicked(true)}
              className="py-3 px-10 rounded-md mt-5 lg:mt-0 block text-center lg:inline-block text-base bg-primary text-black font-medium"
            >
              <span>Get started</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
