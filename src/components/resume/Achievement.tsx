import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black/30 flex flex-col gap-10">
          <ResumeCard
            title="Google Data Analytics Professional"
            subTitle="Coursera / Google (2022)"
            result="Success"
            des="Comprehensive training in data analysis using SQL, R, and Tableau."
          />
          <ResumeCard
            title="Full Stack Web Development"
            subTitle="Binar Academy (2021)"
            result="A+"
            des="Intensive bootcamp covering MERN stack and software engineering principles."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black/30 flex flex-col gap-10">
          <ResumeCard
            title="Project Completion Milestone"
            subTitle="Nihongo Route Platform"
            result="Launched"
            des="Successfully developed and launched an advanced Japanese learning platform with cloud sync."
          />
          <ResumeCard
            title="Hackathon Participant"
            subTitle="Local Tech Meetup"
            result="Finalist"
            des="Collaborated with a team to build a data-driven solution for local business challenges."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
