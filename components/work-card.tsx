import React from "react";

export interface WorkCardProps {
  company: string;
  role: string;
  duration: string;
  tag: string;
  bulletPoints: string[];
  companyIcon?: string;
}

export default function WorkCard({
  company,
  role,
  duration,
  tag,
  bulletPoints,
  companyIcon,
}: WorkCardProps) {
  return (
    <div className="bg-white border border-slate-200/80 p-8 rounded-xl shadow-md transition-all duration-300 dark:bg-slate-900 dark:border-slate-800 flex flex-col md:flex-row md:items-start justify-between gap-6 relative w-full overflow-hidden group hover:shadow-lg">
      
      {/* Left Details Info */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-5 flex-1">
        
        {/* Company Icon Placeholder/Art */}
        <div className="w-16 h-16 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-850 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
          {companyIcon ? (
            <img
              src={companyIcon}
              alt={`${company} Logo`}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#243ef4] dark:text-indigo-400"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          )}
        </div>

        {/* Company & Role Texts */}
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              {company}
            </h3>
            {/* Tag (Mobile view / Inline tag) */}
            <span className="md:hidden bg-[#0022ce] text-white dark:bg-indigo-500 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              {tag}
            </span>
          </div>

          <p className="text-base font-semibold text-[#0022ce] dark:text-indigo-300 transition-colors duration-300">
            {role} • {duration}
          </p>

          {/* Bullet accomplishments */}
          <ul className="mt-6 flex flex-col gap-4">
            {bulletPoints.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Indigo/Blue Checkmark Icon */}
                <div className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-100 dark:border-indigo-900/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#243ef4] dark:text-indigo-300"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                
                <span className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base transition-colors duration-300">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Desktop Tag Badge */}
      <div className="hidden md:block self-start">
        <span className="bg-[#0022ce] text-white dark:bg-indigo-500 px-4.5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-md transition-all duration-300 hover:brightness-110">
          {tag}
        </span>
      </div>

    </div>
  );
}
