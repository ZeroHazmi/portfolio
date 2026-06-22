"use client";

import React from "react";
import Image from "next/image";
import TopNavigationBar from "./top-navigation-bar";
import Footer from "./footer";
import {
  CloudIcon,
  ProblemSolverIcon,
  CollaborativeIcon,
  LearnerIcon,
} from "./icons";


export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0b0f19] dark:text-slate-100 font-sans flex flex-col w-full overflow-x-hidden">

      {/* Top Navigation Bar */}
      <TopNavigationBar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative w-full flex items-center py-20 lg:py-28 overflow-hidden bg-gradient-to-r from-slate-50 to-indigo-50/20 dark:from-[#0b0f19] dark:to-indigo-950/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider text-[#243ef4] dark:text-indigo-300 uppercase bg-[#243ef4]/10 dark:bg-indigo-300/10 w-fit mb-6 animate-pulse">
                AVAILABLE FOR FREELANCE PROJECTS
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight sm:leading-none">
                Hi, I'm{" "}
                <span className="text-[#243ef4] dark:text-indigo-300 relative inline-block">
                  Zal Hazmi                </span>
                .<br />
                <span className="text-slate-800 dark:text-slate-200 font-bold block mt-2 text-3xl sm:text-4xl lg:text-5xl">
                  I build scalable systems with dedication and precision.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                A final-year Software Engineering student dedicated to the craft of clean code. I bridge the gap between complex technical problems and elegant, user-centric solutions.
              </p>

              {/* Core Badges Row */}
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <div className="inline-flex items-center gap-2 bg-[#eaedff] border border-indigo-200/80 px-4 py-2 rounded-lg shadow-sm text-slate-900 font-semibold text-xs tracking-wide dark:bg-indigo-950/40 dark:border-indigo-800/50 dark:text-slate-200">
                  <ProblemSolverIcon className="text-[#243ef4] dark:text-indigo-300" />
                  <span>Problem Solver</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#eaedff] border border-indigo-200/80 px-4 py-2 rounded-lg shadow-sm text-slate-900 font-semibold text-xs tracking-wide dark:bg-indigo-950/40 dark:border-indigo-800/50 dark:text-slate-200">
                  <CollaborativeIcon className="text-[#243ef4] dark:text-indigo-300" />
                  <span>Collaborative Spirit</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#eaedff] border border-indigo-200/80 px-4 py-2 rounded-lg shadow-sm text-slate-900 font-semibold text-xs tracking-wide dark:bg-indigo-950/40 dark:border-indigo-800/50 dark:text-slate-200">
                  <LearnerIcon className="text-[#243ef4] dark:text-indigo-300" />
                  <span>Continuous Learner</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center bg-[#243ef4] text-white hover:bg-blue-700 px-8 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 dark:bg-indigo-600 dark:hover:bg-indigo-500"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:-translate-y-0.5 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:border-slate-600"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-sm aspect-[4/5]">
                {/* Visual Background Accents */}
                <div className="absolute inset-0 bg-indigo-200 rounded-2xl rotate-6 scale-95 opacity-50 dark:bg-purple-400/30 animate-pulse" />
                <div className="absolute inset-0 bg-[#243ef4]/10 rounded-2xl -rotate-6 scale-95 dark:bg-purple-300/20" />

                {/* Photo Card Wrapper */}
                <div className="relative w-full h-full bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src="/profile-pic.jpg"
                    alt="Zal Hazmi Potrait"
                    fill
                    priority
                    className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="what-i-do" className="w-full py-20 lg:py-28 bg-[#f2f3ff] transition-colors duration-300 dark:bg-[#0f1424]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <div className="border-l-4 border-[#243ef4] pl-6 mb-16 dark:border-indigo-300">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              What I Do
            </h2>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
              Specializing in modern technical ecosystems.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Backend Development */}
            <div className="bg-white border border-slate-200/60 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-slate-900 dark:border-slate-850 flex flex-col justify-start min-h-[320px]">
              <div>
                <div className="bg-blue-50 text-[#243ef4] w-12 h-12 rounded-lg flex items-center justify-center mb-6 dark:bg-indigo-950/50 dark:text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
                    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Backend Development
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm min-h-[80px]">
                  Building robust, scalable server-side systems and APIs. I focus on database management, performance optimization, and clean microservice architectures.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">C++</span>
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">C#</span>
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">JAVA</span>
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">POSTGRES</span>
              </div>
            </div>

            {/* Card 2: Frontend Development */}
            <div className="bg-white border border-slate-200/60 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-slate-900 dark:border-slate-850 flex flex-col justify-start min-h-[320px]">
              <div>
                <div className="bg-blue-50 text-[#243ef4] w-12 h-12 rounded-lg flex items-center justify-center mb-6 dark:bg-indigo-950/50 dark:text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Frontend Development
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm min-h-[80px]">
                  Crafting responsive, interactive user experiences with pixel-perfect layouts. I focus on client-side performance, accessibility, and modern framework integrations.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">REACT</span>
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">NEXT JS</span>
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">TYPESCRIPT</span>
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">TAILWIND CSS</span>
              </div>
            </div>

            {/* Card 3: Cloud Architecture */}
            <div className="bg-white border border-slate-200/60 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-slate-900 dark:border-slate-850 flex flex-col justify-start min-h-[320px]">
              <div>
                <div className="bg-blue-50 text-[#243ef4] w-12 h-12 rounded-lg flex items-center justify-center mb-6 dark:bg-indigo-950/50 dark:text-indigo-300">
                  <CloudIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Cloud Architecture
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm min-h-[80px]">
                  Designing scalable, resilient infrastructure on AWS. Passionate about serverless patterns, CI/CD automation, and infrastructure-as-code.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">AWS</span>
                <span className="bg-[#eaedff] border border-indigo-100 text-xs font-bold px-3 py-1 rounded text-slate-800 dark:bg-slate-850 dark:border-slate-750 dark:text-slate-300">DOCKER</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
