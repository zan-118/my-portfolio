import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  
  FaInstagram,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/fauzan118/"
            target="_blank"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/fauzan_1118/"
            target="_blank"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/Fauzan_1118"
            target="_blank"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/zan-118/"
            target="_blank"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://gitlab.com/fauzan118"
            target="_blank"
            className="bannerIcon"
          >
            <FaGitlab />
          </a>
          <a
            href="https://www.linkedin.com/in/fauzan-abdul-basith-8b2a6312b/"
            target="_blank"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Media;
