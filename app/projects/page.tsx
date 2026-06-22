import React from "react";
import type { Metadata } from "next";
import TopNavigationBar from "@/components/top-navigation-bar";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects | Zal Hazmi | Portfolio",
  description: "A showcase of engineering projects created by Zal Hazmi, specializing in high-performance computing, distributed cloud systems, and smart contracts.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Police Reporting System",
      description: "A secure digital reporting platform for police departments, facilitating incident logging, case management, and real-time status updates.",
      technologies: ["NEXT JS", "TYPESCRIPT", "POSTGRESQL", "ASP.NET API", "C#"],
      imageUrl: "/police-reporting-system.png"
    },
    {
      title: "Clothing Rental System",
      description: "An terminal command-prompt based e-commerce rental for apparel, featuring interactive catalog browsing, booking, rental return tracking with graphical reports.",
      technologies: ["C++", "MySQL"],
      imageUrl: "/clothing-rental-system.png"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0b0f19] dark:text-slate-100 font-sans flex flex-col w-full overflow-x-hidden">

      {/* Navbar */}
      <TopNavigationBar />

      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 bg-gradient-to-r from-slate-50 to-indigo-50/20 dark:from-[#0b0f19] dark:to-indigo-950/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-3xl flex flex-col justify-center text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider text-[#243ef4] dark:text-indigo-300 uppercase bg-indigo-50 dark:bg-indigo-950/30 w-fit mb-6 border border-indigo-100 dark:border-indigo-900/30">
              SHOWCASE OF WORK
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              My Engineering<br />
              <span className="text-[#243ef4] dark:text-indigo-300">
                Projects Showcase.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              A collection of software engineering projects that was created by myself. Designed with performance, scalability, and clean architecture in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="w-full py-20 lg:py-28 bg-white transition-colors duration-300 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-850">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
