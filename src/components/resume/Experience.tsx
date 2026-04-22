import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black/30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Self-Employed (2022 - Present)"
            result="Remote"
            des="Building scalable web applications using the MERN stack and Next.js. Focus on performance and user experience."
          />
          <ResumeCard
            title="Data Analyst"
            subTitle="Freelance Projects (2022 - Present)"
            result="Indonesia"
            des="Utilizing SQL, Python, and R to analyze data and provide actionable business insights."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2022</p>
          <h2 className="text-4xl font-bold">Project Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black/30 flex flex-col gap-10">
          <ResumeCard
            title="Nihongo Route Platform"
            subTitle="Lead Developer (2023)"
            result="Launched"
            des="Developed a full-featured E-learning platform with local-first sync and modern UI."
          />
          <ResumeCard
            title="Bike Sharing Analysis"
            subTitle="Data Analyst (2022)"
            result="Completed"
            des="Conducted in-depth analysis of bike sharing data to optimize fleet distribution and user engagement."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
