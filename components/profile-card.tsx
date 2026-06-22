"use client";

import React from "react";

export interface ProfileCardProps {
  title: string;
  link: string;
  icon: React.ReactNode;
}

export default function ProfileCard({ title, link, icon }: ProfileCardProps) {
  const isExternal = link.startsWith("http");
  const isCopyable = link.startsWith("mailto:") || link.startsWith("tel:");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isCopyable) {
      e.preventDefault();
      const textToCopy = link.replace(/^(mailto:|tel:)/, "");
      
      const triggerToast = () => {
        window.dispatchEvent(
          new CustomEvent("show-toast", {
            detail: {
              message: `${title} copied to clipboard`,
              value: textToCopy,
            },
          })
        );
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            triggerToast();
          })
          .catch((err) => {
            console.warn("navigator.clipboard.writeText failed, trying fallback: ", err);
            runFallbackCopy(textToCopy, triggerToast);
          });
      } else {
        runFallbackCopy(textToCopy, triggerToast);
      }
    }
  };

  const runFallbackCopy = (text: string, onSuccess: () => void) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (fallbackErr) {
      console.error("Fallback copy failed: ", fallbackErr);
    }
    document.body.removeChild(textArea);
    // Always trigger the toast so the user can see the copied value
    onSuccess();
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      title={isCopyable ? `Click to copy ${title.toLowerCase()}` : undefined}
      className="bg-white border border-slate-200/80 hover:border-slate-400 dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-slate-750 px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group min-w-[130px] justify-center"
    >
      <span className="text-[#243ef4] dark:text-indigo-300 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="font-semibold tracking-wide text-slate-850 dark:text-slate-200">
        {title}
      </span>
    </a>
  );
}
