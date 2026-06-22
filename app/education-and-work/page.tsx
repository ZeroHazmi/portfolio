"use client";

import React, { useState } from "react";
import TopNavigationBar from "@/components/top-navigation-bar";
import Footer from "@/components/footer";
import EducationCard from "@/components/education-card";
import WorkCard from "@/components/work-card";
import CertificateDocument, { CertificateData } from "@/components/certificate-document";

const certificates: (CertificateData & {
  issuer: string;
  type: string;
  badge: string;
  badgeIcon: React.ReactNode;
  downloadUrl: string;
})[] = [
    {
      id: 0,
      title: "IT Essentials",
      issuer: "Cisco Academy",
      type: "Module Certificate",
      badge: "CISCO ACADEMY",
      badgeIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#243ef4] dark:text-indigo-300">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      downloadUrl: "#",
      recipientName: "Zal Hazmi bin Musrizal",
      subTitle: "Congratulations to",
      details: "for successfully completing the Cisco Networking Academy® curriculum course:",
      courseTitle: "IT Essentials: PC Hardware and Software",
      issueDateInfo: "German-Malaysian Institute • Cisco Networking Academy",
      headerLeftLogoType: "cisco",
      headerRightTitle: "COURSE CREDIT",
      footerLeftLabel: "DATE OF ISSUANCE",
      footerLeftValue: "October 12, 2023",
      sigName: "Chuck Robbins",
      sigRole: "Chief Executive Officer, Cisco Systems, Inc.",
      imageUrl: "/cisco-essential-certificate.png",
    },
    {
      id: 1,
      title: "IT Software Solutions for Business",
      issuer: "WorldSkills Malaysia",
      type: "Achievement Certificate",
      badge: "WORLDSKILLS MALAYSIA",
      badgeIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#243ef4] dark:text-indigo-300">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      downloadUrl: "#",
      recipientName: "Zal Hazmi bin Musrizal",
      subTitle: "Dengan ini disahkan bahawa",
      details: (
        <>
          Telah menyertai <span className="font-bold text-slate-800">PERTANDINGAN KEMAHIRAN WORLDSKILLS MALAYSIA BELIA (WSMB)</span> Finals of Worldskill Malaysia <span className="font-bold text-slate-800">MOBILE APPLICATION DEVELOPMENT</span> pada 15 Mei 2024 di Universiti Teknikal Malaysia Melaka.
        </>
      ),
      institution: "German-Malaysian Institute",
      headerLeftTitle: "Jabatan Pembangunan Kemahiran",
      headerLeftSubtitle: "Kementerian Sumber Manusia",
      headerRightTitle: "worldskills",
      headerRightSubtitle: "Malaysia",
      hasSeal: true,
      sigName: "Ts. Zuleah binti Barsong",
      sigRole: "Ketua Pengarah Pembangunan Kemahiran",
      sigOrg: "Kementerian Sumber Manusia",
      hasLeftStripes: true,
      stripeColors: ["#d91e18", "#0022ce", "#e0b034"],
      imageUrl: "/world-skill-final.png",
    }
  ];

export default function EducationAndWorkPage() {
  const [activeCert, setActiveCert] = useState<number>(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0b0f19] dark:text-slate-100 font-sans flex flex-col w-full overflow-x-hidden">

      {/* Navbar */}
      <TopNavigationBar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 bg-gradient-to-r from-slate-50 to-indigo-50/20 dark:from-[#0b0f19] dark:to-indigo-950/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider text-[#243ef4] dark:text-indigo-300 uppercase bg-indigo-50 dark:bg-indigo-950/30 w-fit mb-6 border border-indigo-100 dark:border-indigo-900/30">
                ACADEMIC AND WORKING EXPERIENCE
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                My academic journey and<br />
                <span className="text-[#0022ce] dark:text-indigo-300">
                  Professional Work Experience.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                A timeline of my academic foundations in software engineering and professional hands-on experience, dedicated to solving complex problems with clean, efficient code.
              </p>
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

      {/* Academic Credentials Section */}
      <section className="w-full py-20 lg:py-28 bg-white transition-colors duration-300 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-850">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex items-center gap-3 mb-16">
            <div className="text-[#243ef4] dark:text-indigo-300">
              {/* Graduation Cap icon matching Figma */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Academic Credentials
            </h2>
          </div>

          {/* Timeline Wrapper Grid */}
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-0 sm:pl-4">

            {/* Utem Degree Card */}
            <EducationCard
              degree="Bachelor of Computer Science (Software Development)"
              school="Universiti Teknikal Malaysia Melaka (UTEM)"
              years="2025 - Current"
              gpaOrHonors="CGPA: 3.95"
              description="Focused on Software Development Thesis"
              skills={["C++ Language", "Software Engineering Principles"]}
              accentColor="#ffffff"
            />

            {/* GMI Diploma Card */}
            <EducationCard
              degree="Diploma in Software Engineering (Software Testing)"
              school="German-Malaysian Institute"
              years="2022 — 2025"
              gpaOrHonors="CGPA: 3.80"
              description="Core focus on Software Engineering and Software Testing principles."
              skills={["Java", "Software Testing", "Mobile Application"]}
              accentColor="#ffffff"
            />

          </div>
        </div>
      </section>

      {/* Achievements / Certificates Section */}
      <section className="w-full py-20 lg:py-28 bg-white transition-colors duration-300 dark:bg-[#0f1424] border-t border-slate-200 dark:border-slate-850">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col text-left mb-16">
            <span className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#243ef4] dark:text-indigo-400 uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#243ef4] dark:bg-indigo-500" />
              Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Certificates
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Click the tabs below to view certificates directly on the page, or download them for offline use.
            </p>
          </div>

          {/* Grid Layout: Left Cards Stack (5 cols), Right Viewer (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">

            {/* Left Tabs Stack */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full">
              {certificates.map((cert) => {
                const isActive = activeCert === cert.id;
                return (
                  <div
                    key={cert.id}
                    onClick={() => setActiveCert(cert.id)}
                    className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between min-h-[160px] border text-left ${isActive
                      ? "bg-indigo-500/[0.04] border-[#243ef4] shadow-md dark:bg-indigo-950/20 dark:border-indigo-500"
                      : "bg-white border-slate-200 shadow-sm hover:border-slate-300 hover:shadow dark:bg-slate-900/60 dark:border-slate-800/80 dark:hover:border-slate-700"
                      }`}
                  >
                    <div>
                      {/* Top Badge */}
                      <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider mb-4 ${isActive
                        ? "bg-indigo-500/10 text-[#243ef4] dark:bg-indigo-400/20 dark:text-indigo-300"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800/60 dark:text-slate-400"
                        }`}>
                        {cert.badgeIcon}
                        <span>{cert.badge}</span>
                      </span>

                      {/* Title & Subtitle */}
                      <h3 className={`text-lg font-bold tracking-tight mb-1 transition-colors ${isActive ? "text-slate-900 dark:text-white" : "text-slate-850 dark:text-slate-250"
                        }`}>
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {cert.type}
                      </p>
                    </div>

                    {/* Bottom Actions Row */}
                    <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800/80">
                      <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-[#243ef4] dark:text-indigo-300" : "text-slate-400 dark:text-slate-500"
                        }`}>
                        {isActive ? "Active View" : "Click to view"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Viewer Column */}
            <div className="lg:col-span-7 w-full flex justify-center">
              <div className="w-full max-w-2xl bg-[#0b0f19] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col group">

                {/* OS/Browser Mockup Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-[#0f1424]">
                  {/* Three Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>

                  {/* Tab Title */}
                  <span className="text-xs font-semibold font-mono tracking-wide text-slate-450 uppercase">
                    {certificates[activeCert].badge}
                  </span>

                  {/* Empty spacer to center tab title */}
                  <div className="w-12" />
                </div>

                {/* Certificate Render Wrapper */}
                <div className="w-full aspect-[4/3] sm:aspect-[1.414/1] bg-white p-2">
                  <CertificateDocument certificate={certificates[activeCert]} />
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Working Experience Section */}
      <section className="w-full py-20 lg:py-28 bg-[#f2f3ff] transition-colors duration-300 dark:bg-[#0f1424]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3">
              <div className="text-[#243ef4] dark:text-indigo-300">
                {/* Briefcase/Working icon matching Figma */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Working Experience
              </h2>
            </div>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 ml-10">
              Roles within industry.
            </p>
          </div>

          {/* Full-width Working Card */}
          <div className="w-full">
            <WorkCard
              company="Posable Sdn. Bhd."
              role="Software Engineering Intern"
              duration="Internship • January 2025 — May 2025"
              tag="INTERN"
              companyIcon="/possable-logo.png"
              bulletPoints={[
                "Responsible for Point of Sale (POS) system that customer uses",
                "Delivered statistics and Report page that allows customer to see data trends",
                "Uses C#, .NET and Azure Cloud environment to develop and test POS system"
              ]}
            />
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
