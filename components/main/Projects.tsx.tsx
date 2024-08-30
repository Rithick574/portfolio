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
          description="About
This is an e-commerce application for selling smarphones. Built in monolithic MVC architecture, The stack I used is node.js with express for the backend, Mongodb as database, EJS as template engine for the frontend."
          redirect="https://www.phonebazaar.shop/"
        />
        <ProjectCard
          src="/aiinterviewmocker.png"
          title="Space Themed Website"
          description="AI Mock Interview App is a cutting-edge application built with Next.js designed to help users practice and prepare for technical interviews. Leveraging the power of the Gemini API for AI-driven responses, this app simulates real-world interview scenarios, providing users with a comprehensive and interactive mock interview experience."
          redirect="https://ai-mock-interview.vercel.app/dashboard"
        />
      </div>
    </div>
  );
};

export default Projects;
