import React from 'react'
import { motion } from 'framer-motion';

interface SkillProps {
  title: string;
  percentage: string;
}

const SkillBar = ({ title, percentage }: SkillProps) => {
  return (
    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">{title}</p>
      <span className="w-full h-2 bg-black/25 rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ width: percentage }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">{percentage}</span>
        </motion.span>
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <SkillBar title="Figma" percentage="90%" />
          <SkillBar title="Adobe Photoshop" percentage="85%" />
          <SkillBar title="Adobe Illustrator" percentage="70%" />
          <SkillBar title="Canva" percentage="95%" />
          <SkillBar title="UI/UX Design" percentage="80%" />
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar title="React / Next.js" percentage="95%" />
          <SkillBar title="JavaScript / TypeScript" percentage="90%" />
          <SkillBar title="Tailwind CSS" percentage="95%" />
          <SkillBar title="Node.js / Express" percentage="80%" />
          <SkillBar title="PostgreSQL / BigQuery" percentage="85%" />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills
