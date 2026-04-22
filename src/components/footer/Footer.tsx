import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "@/assets";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <Image 
          className="w-24 lgl:w-32 h-auto object-contain" 
          src={logo} 
          alt="logo" 
          width={128} 
          height={128} 
        />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
