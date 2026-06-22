import React from "react";
import type { Metadata } from "next";
import TopNavigationBar from "@/components/top-navigation-bar";
import Footer from "@/components/footer";
import { ProblemSolverIcon, FullStackIcon, CloudIcon } from "@/components/icons";
import PersonalQualities from "@/components/personal-qualities";
import TechnicalToolbox from "@/components/technical-toolbox";

export const metadata: Metadata = {
  title: "About | Zal Hazmi | Portfolio",
  description: "Learn more about Zal Hazmi, a software engineer bridging academic rigor with modern system design and engineering practices.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0b0f19] dark:text-slate-100 font-sans flex flex-col w-full overflow-x-hidden">

      {/* Navbar */}
      <TopNavigationBar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Bio Section */}
      <section className="relative w-full py-20 lg:py-28 bg-gradient-to-r from-slate-50 to-indigo-50/20 dark:from-[#0b0f19] dark:to-indigo-950/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider text-[#243ef4] dark:text-indigo-300 uppercase bg-[#f2f3ff] dark:bg-indigo-950/30 w-fit mb-6 border border-[#c5c5d9]/60 dark:border-slate-800">
                THE ARCHITECT BEHIND THE CODE
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Bridging Academic Rigor<br />
                <span className="text-[#243ef4] dark:text-indigo-300">
                  with Modern Engineering.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                I am a software engineer focused on building robust, scalable systems that solve complex problems. My approach merges the methodical precision with the fast-paced innovation of modern software development. I believe in clean code, rigorous testing, and the pursuit of technical excellence in every commit.
              </p>

              {/* Three Badges */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 flex gap-2.5 items-center px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-[#243ef4] dark:text-indigo-300">
                    <CloudIcon size={18} />
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Analytical Thinker</span>
                </div>

                <div className="border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 flex gap-2.5 items-center px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-[#243ef4] dark:text-indigo-300">
                    <FullStackIcon size={18} />
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">System Designer</span>
                </div>

                <div className="border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 flex gap-2.5 items-center px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-[#243ef4] dark:text-indigo-300">
                    <ProblemSolverIcon size={18} />
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Problem Solver</span>
                </div>
              </div>
            </div>

            {/* Right Profile Photo Column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-sm aspect-[4/5]">
                {/* Visual Background Accents */}
                <div className="absolute inset-0 bg-indigo-200 rounded-2xl rotate-6 scale-95 opacity-50 dark:bg-purple-400/30 animate-pulse" />
                <div className="absolute inset-0 bg-[#243ef4]/10 rounded-2xl -rotate-6 scale-95 dark:bg-purple-300/20" />

                {/* Photo Card Wrapper */}
                <div className="relative w-full h-full bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src="/profile-pic.jpg"
                    alt="Zal Hazmi Potrait"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Personal Qualities Section */}
      <PersonalQualities />

      {/* Technical Toolbox Section */}
      <TechnicalToolbox />

      {/* Quote / CV Banner Section */}
      <section className="w-full py-20 bg-[#243ef4] relative overflow-hidden transition-colors duration-300 dark:bg-indigo-950/80">
        <div className="absolute inset-0 bg-[#0022ce]/20 dark:bg-slate-950/40 pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 flex flex-col items-center gap-8 text-center">
          {/* Quote Mark SVG */}
          <div className="w-12 h-10 text-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.161v3.377c-3.037.697-4.312 2.83-4.402 5.76h3v8.415h-7.619zm-14 0v-7.391c0-5.704 3.748-9.762 9-10.161v3.377c-3.037.697-4.312 2.83-4.402 5.76h3v8.415h-7.619z" />
            </svg>
          </div>

          {/* Blockquote */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold italic tracking-tight text-white max-w-3xl leading-relaxed">
            "Precision is not about being right the first time; it is about building systems that stay right as they evolve."
          </blockquote>

          <div className="text-xs sm:text-sm font-bold tracking-wider text-indigo-200 uppercase bg-indigo-900/40 px-4 py-1.5 rounded-full border border-indigo-850/50">
            — ENGINEERING PHILOSOPHY
          </div>

          {/* CV Button */}
          <div className="mt-4">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#0022ce] dark:text-indigo-900 font-bold text-sm tracking-wide px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Download Full Technical CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
