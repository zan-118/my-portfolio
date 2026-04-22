import React from "react";
import Image from "next/image";
import { bannerImg } from "@/assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <Image
        className="w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] z-10 object-contain"
        src={bannerImg}
        alt="bannerImg"
        width={500}
        height={500}
        priority
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
