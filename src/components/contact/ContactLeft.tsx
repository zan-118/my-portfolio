import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { contactImg } from "@/assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
        width={400}
        height={256}
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Fauzan Abdul Basith</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer || Data Analyst
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Crafting high-performance web applications and extracting meaningful insights from complex datasets. Let's connect and build something amazing together!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText hover:text-designColor duration-300 cursor-pointer">
            fauzanabdulbasith@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://facebook.com/fauzan118" target="_blank" rel="noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/Fauzan_1118" target="_blank" rel="noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/fauzan-abdul-basith-8b2a6312b/" target="_blank" rel="noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
