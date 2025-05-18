import React from "react";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#040404]">
      <div className="container pb-7 grid w-full md:flex gap-14 md:gap-0 items-center justify-center md:justify-between">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            sizes="100%"
            className="h-20 w-auto mx-auto md:mx-0"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-4 lg:gap-10 text-sm md:text-xs lg:text-sm">
          <div className="text-white shrink-0">
            <span>Privacy policy</span>
          </div>
          <div className="text-white shrink-0">
            <span>Term of service</span>
          </div>
          <div className="text-white shrink-0">
            <span> &copy; {new Date().getFullYear()} THESETTERCIRCLE</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 md:gap-4 text-2xl">
          <Link
            href={""}
            target="_blank"
            className="text-black bg-primary rounded-md inline-block"
          >
            <span className="h-10 w-10 flex items-center justify-center">
              <FaLinkedinIn />
            </span>
          </Link>
          <Link
            href={""}
            target="_blank"
            className="text-black bg-primary rounded-md inline-block"
          >
            <span className="h-10 w-10 flex items-center justify-center">
              <FaTwitter />
            </span>
          </Link>
          <Link
            href={""}
            target="_blank"
            className="text-black bg-primary rounded-md inline-block"
          >
            <span className="h-10 w-10 flex items-center justify-center">
              <RiWhatsappFill />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
