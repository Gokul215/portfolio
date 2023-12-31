import React from "react";
import {  FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import {  SiNodedotjs, SiHtml5, SiCss3 } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            {/* <i class=" fa-github"></i> */}
            <FaGithub />
          </span>
        
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            <SiCss3/>
          </span>
          <span className="bannerIcon">
            <SiHtml5 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
