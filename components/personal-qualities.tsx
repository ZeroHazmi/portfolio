import React from "react";

export default function PersonalQualities() {
  const qualities = [
    {
      title: "Detail-Oriented",
      description: "Consistent attention to spacing, alignment, and responsive behavior across every screen size.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#243ef4] dark:text-indigo-300">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      title: "Clear Communicator",
      description: "Translates design decisions into plain language for teammates, lecturers, and clients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#243ef4] dark:text-indigo-300">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      )
    },
    {
      title: "Creative Problem-Solver",
      description: "Approaches user pain points with iterative thinking — testing, observing, and refining.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#243ef4] dark:text-indigo-300">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6M10 22h4" />
        </svg>
      )
    },
    {
      title: "Platform-Minded Developer",
      description: "Builds reusable components and consistent visuals instead of one-off styles that can support future expansion",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#243ef4] dark:text-indigo-300">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      )
    },
    {
      title: "Fast Learner",
      description: "Quickly picks up new frameworks, tools, and workflows through hands-on experimentation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#243ef4] dark:text-indigo-300">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: "Collaborative Team Player",
      description: "Comfortable working in group projects, distributing responsibilities and meeting deadlines.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#243ef4] dark:text-indigo-300">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50 transition-colors duration-300 dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-850">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col text-left mb-16">
          <span className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#243ef4] dark:text-indigo-300 uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#243ef4] dark:bg-indigo-300" />
            Personal Qualities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Strengths I bring to every project
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            The soft skills and work habits that shape how I design, build, and collaborate.
          </p>
        </div>

        {/* Grid of Qualities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {qualities.map((quality, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm transition-all duration-300 dark:bg-[#131b2e]/40 dark:border-slate-800/80 flex flex-col gap-5 hover:shadow-md hover:-translate-y-0.5 group"
            >
              {/* Icon Container with subtle glow */}
              <div className="w-12 h-12 rounded-full border border-indigo-500/25 dark:border-indigo-400/20 bg-indigo-50/50 dark:bg-indigo-950/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(36,62,244,0.04)]">
                {quality.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                {quality.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                {quality.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
