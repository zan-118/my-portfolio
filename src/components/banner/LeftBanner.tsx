"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Data Analyst."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10 lgl:gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal uppercase tracking-widest text-designColor">
          Welcome to my digital space
        </h4>
        <h1 className="text-5xl lgl:text-6xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Fauzan Abdul Basith
          </span>
        </h1>
        <h2 className="text-3xl lgl:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorStyle="|"
            cursorColor="#0ef"
          />
        </h2>
        <p className="text-base font-bodyFont leading-7 tracking-wide text-lightText/80 max-w-[600px]">
          I bridge the gap between complex data analysis and intuitive web experiences. 
          As a Full Stack Developer, I build robust applications, while as a Data Analyst, 
          I uncover the stories hidden within the numbers to drive strategic growth.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
