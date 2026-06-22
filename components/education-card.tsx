import React from "react";

export interface EducationCardProps {
  degree: string;
  school: string;
  years: string;
  gpaOrHonors?: string;
  description: string;
  skills: string[];
  accentColor?: string; // HEX color or tailwind text- class
}

export default function EducationCard({
  degree,
  school,
  years,
  gpaOrHonors,
  description,
  skills,
  accentColor = "#0022ce",
}: EducationCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start pl-8 relative w-full mb-12 last:mb-0 group">
      
      {/* Timeline Node Bullet */}
      <div 
        className="absolute left-0 rounded-full w-6 h-6 bg-white border-4 transition-all duration-300 group-hover:scale-110 top-1 shadow-sm"
        style={{ borderColor: accentColor }}
      />

      {/* Heading & Period Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
          {degree}
        </h3>
        <div 
          className="px-4 py-1 text-sm font-semibold rounded-md w-fit whitespace-nowrap transition-colors duration-300"
          style={{ 
            backgroundColor: `${accentColor}10`, // 10% opacity hex
            color: accentColor 
          }}
        >
          {years}
        </div>
      </div>

      {/* School & GPA Meta Row */}
      <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300 transition-colors duration-300">
        <span className="font-bold text-slate-850 dark:text-slate-200">{school}</span>
        {gpaOrHonors && (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="font-normal text-slate-500 dark:text-slate-400">{gpaOrHonors}</span>
          </>
        )}
      </div>

      {/* Description Box */}
      <div className="w-full bg-[#f2f3ff] border border-[#c5c5d9]/60 p-6 rounded-xl shadow-sm transition-all duration-300 dark:bg-slate-900/60 dark:border-slate-800 flex flex-col gap-4 mt-2">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
          {description}
        </p>

        {/* Skill Badges */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded text-slate-600 shadow-sm transition-all duration-300 dark:bg-indigo-950/30 dark:border-indigo-900/50 dark:text-indigo-200"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
