import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/learnwise.png"
          title="Learnwise E-Learning web app"
          description="Learn-wise is an innovative E-learning platform with user-centric features with modules containing admin,
instructors and students (users)."
          redirect="https://learnwise-client.vercel.app/"
        />
        <ProjectCard
          src="/phonebazaar.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          redirect="https://www.phonebazaar.shop/"
        />
        <ProjectCard
          src="/aiinterviewmocker.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          redirect="https://ai-mock-interview.vercel.app/dashboard"
        />
      </div>
    </div>
  );
};

export default Projects;
