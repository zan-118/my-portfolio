import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black/30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of XYZ (2018 - 2022)"
            result="3.90/4"
            des="Comprehensive study of computer science fundamentals, software engineering, and data structures."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (2014 - 2017)"
            result="5.00/5"
            des="Focus on science and mathematics with excellence in academic performance."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black/30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Freelance - (2022 - Present)"
            result="Remote"
            des="Developing modern web applications using React, Next.js, and Node.js for various clients."
          />
          <ResumeCard
            title="Data Analyst"
            subTitle="Project Based - (2022 - Present)"
            result="Indonesia"
            des="Analyzing datasets to extract meaningful insights and driving data-driven decision making."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
