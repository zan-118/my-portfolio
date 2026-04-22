import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe, FaDatabase} from "react-icons/fa";
import { SiProgress, SiGoogleanalytics } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Front-End",
    des: "HTML, CSS, JavaScript, Tailwind, Bootstrap, ReactJS",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "Back-End",
    des: "Node.js, Express.js, RestFul API",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Framework",
    des: "Next.js",
  },
  {
    id: 4,
    icon: <FaDatabase/>,
    title: "Database",
    des: "PostgreSQL, BigQuery",
  },
  {
    id: 5,
    icon: <SiGoogleanalytics />,
    title: "Data Analysis",
    des: "Rstudio, Spreadsheet, Data Visualization",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Deploying and managing web applications on various hosting platforms like Vercel, Netlify, and GitHub Pages.",
  },
];
