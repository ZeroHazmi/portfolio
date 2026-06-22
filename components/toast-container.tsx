"use client";

import React, { useEffect, useState } from "react";

interface Toast {
  id: string;
  message: string;
  value: string;
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; value: string }>;
      const { message, value } = customEvent.detail;
      const id = Math.random().toString(36).substring(2, 9);
      
      setToasts((prev) => [...prev, { id, message, value }]);

      // Auto-remove after 4 seconds
      const timer = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);

      return () => clearTimeout(timer);
    };

    window.addEventListener("show-toast", handleToast);
    return () => {
      window.removeEventListener("show-toast", handleToast);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-0 right-0 sm:left-auto sm:right-6 z-50 flex flex-col gap-3 max-w-md mx-auto sm:mx-0 px-4 sm:px-0 w-full sm:w-80 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-xl rounded-xl p-4 flex items-start gap-3 transition-all duration-300 animate-fade-in-up"
        >
          {/* Success Check Icon */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-[#243ef4] dark:text-indigo-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Toast Message & Copied Value */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {toast.message}
            </p>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 break-all bg-slate-50 dark:bg-slate-950/50 p-1.5 rounded border border-slate-100 dark:border-slate-850 select-all cursor-pointer" title="Click to select value">
              {toast.value}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            className="flex-shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
            aria-label="Close notification"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
