import React from "react";
import type { Metadata } from "next";
import TopNavigationBar from "@/components/top-navigation-bar";
import ProfileCard from "@/components/profile-card";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact | Zal Hazmi | Portfolio",
  description: "Get in touch with Zal Hazmi for software engineering roles, freelance consultations, or collaborations.",
};

export default function ContactPage() {
  const profiles = [
    {
      title: "GitHub",
      link: "https://github.com/zerohazmi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/zal-hazmi-musrizal-2133472b2?originalSubdomain=my",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      title: "Email",
      link: "mailto:zalhazmibinmusrizal@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      title: "Phone",
      link: "tel:+60192958075",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0b0f19] dark:text-slate-100 font-sans flex flex-col w-full overflow-x-hidden">

      {/* Navbar */}
      <TopNavigationBar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative w-full flex-1 flex flex-col justify-center py-20 lg:py-28 bg-gradient-to-r from-slate-50 to-indigo-50/20 dark:from-[#0b0f19] dark:to-indigo-950/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider text-[#243ef4] dark:text-indigo-300 uppercase bg-indigo-50 dark:bg-indigo-950/30 w-fit mb-6 border border-indigo-100 dark:border-indigo-900/30">
            GET IN TOUCH
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Let's build something<br />
            <span className="text-[#243ef4] dark:text-indigo-300">
              together.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a line or find me on social platforms.
          </p>

          {/* Centered Profiles component list */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.title}
                title={profile.title}
                link={profile.link}
                icon={profile.icon}
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
