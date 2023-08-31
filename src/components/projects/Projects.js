import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gaming Website"
          des=" A Final Project when I took Full Stack Web at Binar Academy about gaming website which is developed by a Alfa Centaury Team."
          src={projectOne}
          sourceCode="https://gitlab.com/fauzan118/challenge-11-team-1-fe"
          websiteLink="https://challenge-11-team-1-fe.vercel.app/"
        />
        <ProjectsCard
          title="Bike Sharing Analysis"
          des=" This analytics case study is related to the Capstone project requirements for Google Data Analytics Professional Certificate. The case study contains data for a bike sharing company oon customer trip details over a 12-month period (July 2021 to June 2022). "
          src={projectTwo}
          sourceCode="https://www.kaggle.com/code/fauzanabdulbasith/case-study-bike-sharing-for-dts-proa"
          websiteLink="https://zan-118.github.io/portofolio/"
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="Gaming Website"
          des=" A Final Project when I took Full Stack Web at Binar Academy about gaming website which is developed by a Alfa Centaury Team."
          src={projectOne}
          sourceCode="https://gitlab.com/fauzan118/challenge-11-team-1-fe"
          websiteLink="https://challenge-11-team-1-fe.vercel.app/"
        />
        <ProjectsCard
          title="Bike Sharing Analysis"
          des=" This analytics case study is related to the Capstone project requirements for Google Data Analytics Professional Certificate. The case study contains data for a bike sharing company oon customer trip details over a 12-month period (July 2021 to June 2022). "
          src={projectTwo}
          sourceCode="https://www.kaggle.com/code/fauzanabdulbasith/case-study-bike-sharing-for-dts-proa"
          websiteLink="https://zan-118.github.io/portofolio/"
        />
      </div>
    </section>
  );
};

export default Projects;
