"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoonIcon, SunIcon } from "./icons";

export default function TopNavigationBar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  // Track scroll position for floating effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const isHomeActive = pathname === "/";
  const isEducationActive = pathname === "/education-and-work";
  const isProjectsActive = pathname === "/projects";
  const isAboutActive = pathname === "/about";
  const isContactActive = pathname === "/contact";

  const activeLinkClass =
    "text-sm font-bold text-[#243ef4] border-b-2 border-[#243ef4] pb-1 transition-all dark:text-indigo-300 dark:border-indigo-300";
  const inactiveLinkClass =
    "text-sm font-semibold text-slate-600 hover:text-[#243ef4] pb-1 transition-all dark:text-slate-300 dark:hover:text-indigo-300";

  const mobileActiveLinkClass = "text-base font-bold text-[#243ef4] dark:text-indigo-300";
  const mobileInactiveLinkClass =
    "text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-[#243ef4] dark:hover:text-indigo-300";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      <div
        className={`pointer-events-auto transition-all duration-300 ease-in-out ${scrolled
            ? "mx-4 mt-3 rounded-2xl border border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/60 dark:border-slate-700/60 dark:bg-[#0d1220]/90 dark:shadow-slate-900/80"
            : "mx-0 mt-0 rounded-none border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-none dark:border-slate-800/80 dark:bg-[#0b0f19]/85"
          }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-300 ${scrolled ? "h-16" : "h-20"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-extrabold tracking-tight text-[#243ef4] transition-transform duration-300 group-hover:scale-105 dark:text-indigo-300">
              Portfolio
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={isHomeActive ? activeLinkClass : inactiveLinkClass}>
              Home
            </Link>
            <Link href="/education-and-work" className={isEducationActive ? activeLinkClass : inactiveLinkClass}>
              Education & Work
            </Link>
            <Link href="/projects" className={isProjectsActive ? activeLinkClass : inactiveLinkClass}>
              Project
            </Link>
            <Link href="/about" className={isAboutActive ? activeLinkClass : inactiveLinkClass}>
              About
            </Link>
            <Link href="/contact" className={isContactActive ? activeLinkClass : inactiveLinkClass}>
              Contact
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:text-[#243ef4] hover:bg-slate-100 transition-all dark:text-slate-400 dark:hover:text-indigo-300 dark:hover:bg-slate-800 w-9 h-9 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="bg-[#243ef4] text-white hover:bg-blue-700 px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 dark:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:text-[#243ef4] hover:bg-slate-100 transition-all dark:text-slate-400 dark:hover:text-indigo-300 dark:hover:bg-slate-800 w-9 h-9 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Open main menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Links Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden px-6 py-4 shadow-lg transition-colors duration-300 dark:bg-[#0b0f19] ${scrolled
                ? "rounded-b-2xl border-t border-slate-200/50 dark:border-slate-700/50"
                : "border-t border-slate-200 dark:border-slate-800"
              }`}
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={isHomeActive ? mobileActiveLinkClass : mobileInactiveLinkClass}
              >
                Home
              </Link>
              <Link
                href="/education-and-work"
                onClick={() => setMobileMenuOpen(false)}
                className={isEducationActive ? mobileActiveLinkClass : mobileInactiveLinkClass}
              >
                Education & Work
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={isProjectsActive ? mobileActiveLinkClass : mobileInactiveLinkClass}
              >
                Project
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={isAboutActive ? mobileActiveLinkClass : mobileInactiveLinkClass}
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={isContactActive ? mobileActiveLinkClass : mobileInactiveLinkClass}
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                download="resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#243ef4] text-white hover:bg-blue-700 text-center py-2.5 rounded-lg text-sm font-semibold shadow-md dark:bg-indigo-600 dark:hover:bg-indigo-500"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
