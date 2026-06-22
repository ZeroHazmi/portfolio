import React from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  index?: number;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  index = 0,
  imageUrl,
}: ProjectCardProps) {
  // Define gradients and decorative icons for placeholders based on index
  const placeholders = [
    // 0: Nexus Cloud Orchestrator
    {
      gradient: "from-[#243ef4]/20 via-[#6b78fa]/10 to-transparent dark:from-indigo-600/30 dark:via-indigo-950/10",
      accent: "text-[#243ef4] dark:text-indigo-300",
      bgLight: "bg-[#f2f3ff] dark:bg-slate-900/60",
      borderLight: "border-[#c5c5d9]/60 dark:border-slate-800",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90 animate-pulse"
        >
          <rect x="2" y="2" width="20" height="8" rx="1.5" />
          <rect x="2" y="14" width="20" height="8" rx="1.5" />
          <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
          <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
          <line x1="20" y1="6" x2="14" y2="6" />
          <line x1="20" y1="18" x2="14" y2="18" />
        </svg>
      )
    },
    // 1: Apex Trading Engine
    {
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent dark:from-amber-600/30 dark:via-amber-950/10",
      accent: "text-amber-600 dark:text-amber-450",
      bgLight: "bg-amber-50/60 dark:bg-amber-950/20",
      borderLight: "border-amber-100/80 dark:border-amber-900/30",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M2 12h4m6-6h4m2 8h4" />
        </svg>
      )
    },
    // 2: EtherNode Protocol
    {
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent dark:from-emerald-600/30 dark:via-emerald-950/10",
      accent: "text-emerald-600 dark:text-emerald-400",
      bgLight: "bg-emerald-50/60 dark:bg-emerald-950/20",
      borderLight: "border-emerald-100/80 dark:border-emerald-900/30",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    // 3: Lumina Predictive Analytics
    {
      gradient: "from-purple-500/20 via-pink-500/10 to-transparent dark:from-purple-600/30 dark:via-purple-950/10",
      accent: "text-purple-600 dark:text-purple-400",
      bgLight: "bg-purple-50/60 dark:bg-purple-950/20",
      borderLight: "border-purple-100/80 dark:border-purple-900/30",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        >
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="12" />
          <line x1="12" y1="20" x2="12" y2="10" />
          <circle cx="18" cy="4" r="2" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      )
    }
  ];

  const currentPlaceholder = placeholders[index % placeholders.length];

  return (
    <div className="bg-[#faf8ff] border border-[#c5c5d9]/60 dark:bg-slate-900/40 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col w-full group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      {/* Visual Header / Image area */}
      <div className="h-[240px] sm:h-[280px] relative w-full flex items-center justify-center bg-slate-50 dark:bg-[#0f1424] overflow-hidden border-b border-slate-200/85 dark:border-slate-800/80">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${currentPlaceholder.gradient} transition-opacity duration-300`} />
            
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:16px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)]" />

            {/* Center SVG mockup icon */}
            <div className={`relative z-10 p-6 rounded-2xl ${currentPlaceholder.bgLight} border ${currentPlaceholder.borderLight} ${currentPlaceholder.accent} transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
              {currentPlaceholder.svg}
            </div>
          </>
        )}
      </div>

      {/* Details Container */}
      <div className="p-8 flex flex-col flex-grow gap-4">
        
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-white border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded text-slate-600 shadow-sm transition-all duration-300 dark:bg-indigo-950/30 dark:border-indigo-900/50 dark:text-indigo-200 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-[#0022ce] dark:text-indigo-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
          {description}
        </p>

      </div>
    </div>
  );
}
