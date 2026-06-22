import React from "react";

export default function TechnicalToolbox() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#f2f3ff] transition-colors duration-300 dark:bg-[#0f1424] border-t border-b border-slate-200 dark:border-slate-850">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Card Frame */}
        <div className="bg-white border border-slate-200 text-slate-900 p-8 sm:p-12 rounded-2xl shadow-xl transition-colors duration-300 dark:bg-slate-950/60 dark:border dark:border-slate-800 dark:text-white">

          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="text-[#243ef4] dark:text-indigo-300">
              {/* Wrench/Toolbox icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Toolbox
            </h3>
          </div>

          {/* Grid Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Column 1: Backend */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#243ef4] border-b border-slate-200/85 pb-3 dark:text-indigo-200 dark:border-slate-800/80">
                BACKEND
              </h4>
              <ul className="flex flex-col gap-3 text-slate-600 text-base dark:text-slate-300">
                <li>C++</li>
                <li>C#</li>
                <li>Java</li>
                <li>ASP.Net</li>
              </ul>
            </div>

            {/* Column 2: Data & Infra */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#243ef4] border-b border-slate-200/85 pb-3 dark:text-indigo-200 dark:border-slate-800/80">
                DATA & INFRASTRUCTURE
              </h4>
              <ul className="flex flex-col gap-3 text-slate-600 text-base dark:text-slate-300">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Docker</li>
              </ul>
            </div>

            {/* Column 3: Frontend */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#243ef4] border-b border-slate-200/85 pb-3 dark:text-indigo-200 dark:border-slate-800/80">
                FRONTEND
              </h4>
              <ul className="flex flex-col gap-3 text-slate-600 text-base dark:text-slate-300">
                <li>TypeScript</li>
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
