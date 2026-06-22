import React from "react";

export interface CertificateData {
  id: number;
  title: string;
  recipientName: string;
  subTitle?: string;
  details?: React.ReactNode;
  courseTitle?: string;
  institution?: string;
  issueDateInfo?: string;
  
  // Header Customization
  headerLeftTitle?: string;
  headerLeftSubtitle?: string;
  headerRightTitle?: string;
  headerRightSubtitle?: string;
  headerLeftLogoType?: "utem" | "cisco" | "none";
  headerRightLogoType?: "runcloud" | "none";
  
  // Footer Customization
  hasSeal?: boolean;
  footerLeftLabel?: string;
  footerLeftValue?: string;
  
  // Signature Customization
  sigName: string;
  sigRole: string;
  sigOrg?: string;
  
  // Left stripes style (WorldSkills style)
  hasLeftStripes?: boolean;
  stripeColors?: string[];
  
  // Real Certificate Image URL
  imageUrl?: string;
}

export interface CertificateDocumentProps {
  certificate: CertificateData;
}

export default function CertificateDocument({ certificate }: CertificateDocumentProps) {
  // If a real image is provided, display it framed in a clean dark container
  if (certificate.imageUrl) {
    return (
      <div className="w-full h-full bg-slate-950 flex items-center justify-center p-2 sm:p-4 transition-colors duration-300">
        <img
          src={certificate.imageUrl}
          alt={certificate.title}
          className="w-full h-full object-contain shadow-lg rounded"
        />
      </div>
    );
  }

  // Common container with certificate border and paper texture styling
  const containerClasses = "w-full h-full bg-[#fcfbf7] text-slate-800 p-6 sm:p-10 flex flex-col justify-between border-8 border-double border-[#d4af37] relative overflow-hidden select-none shadow-inner font-serif";

  return (
    <div className={containerClasses}>
      {/* Left vertical stripes (if enabled) */}
      {certificate.hasLeftStripes && certificate.stripeColors && (
        <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-row">
          {certificate.stripeColors.map((color, index) => (
            <div key={index} className="w-1/3" style={{ backgroundColor: color }} />
          ))}
        </div>
      )}

      {/* Top Header Logos */}
      <div className={`flex justify-between items-start ${certificate.hasLeftStripes ? "ml-2" : ""}`}>
        {/* Left Logo / Title */}
        {certificate.headerLeftLogoType === "utem" ? (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded bg-blue-600 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="sm:w-4 sm:h-4">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-[8px] sm:text-[11px] font-sans font-bold text-slate-800 tracking-tight">UTeM</span>
          </div>
        ) : certificate.headerLeftLogoType === "cisco" ? (
          <div className="flex items-center gap-1">
            <span className="text-[10px] sm:text-[14px] font-sans font-bold text-[#00b0f0]">Cisco</span>
            <span className="text-[8px] sm:text-[10px] font-sans text-slate-500 uppercase tracking-widest">Academy</span>
          </div>
        ) : certificate.headerLeftTitle ? (
          <div className="flex flex-col text-left">
            <span className="text-[7px] sm:text-[9px] font-sans font-bold tracking-tight text-slate-600 uppercase">
              {certificate.headerLeftTitle}
            </span>
            {certificate.headerLeftSubtitle && (
              <span className="text-[6px] sm:text-[8px] font-sans text-slate-500 uppercase">
                {certificate.headerLeftSubtitle}
              </span>
            )}
          </div>
        ) : (
          <div />
        )}

        {/* Right Logo / Title */}
        {certificate.headerRightLogoType === "runcloud" ? (
          <div className="flex items-center gap-1">
            <span className="text-[7px] sm:text-[9px] font-sans font-bold text-[#0022ce]">RunCloud</span>
            <span className="text-[6px] sm:text-[8px] font-sans text-slate-400">Academy</span>
          </div>
        ) : certificate.headerRightTitle === "COURSE CREDIT" ? (
          <span className="text-[6px] sm:text-[8px] font-mono text-slate-400 uppercase tracking-wider">{certificate.headerRightTitle}</span>
        ) : certificate.headerRightTitle ? (
          <div className="text-right flex flex-col items-end">
            <span className="text-[8px] sm:text-[11px] font-sans font-black text-[#0022ce]">
              {certificate.headerRightTitle}
            </span>
            {certificate.headerRightSubtitle && (
              <span className="text-[7px] sm:text-[9px] font-sans font-semibold text-slate-600">
                {certificate.headerRightSubtitle}
              </span>
            )}
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col justify-center items-center text-center my-4 ${certificate.hasLeftStripes ? "ml-2" : ""}`}>
        {/* Certificate Title */}
        <h1 className={`text-lg sm:text-2xl font-bold tracking-tight text-slate-900 font-sans ${
          certificate.hasLeftStripes ? "text-xl sm:text-3xl font-black text-[#d4af37] tracking-wider italic my-1 font-serif" : ""
        }`}>
          {certificate.title}
        </h1>

        {certificate.subTitle && (
          <p className="text-[7px] sm:text-[10px] text-slate-500 tracking-wide uppercase italic mt-1">
            {certificate.subTitle}
          </p>
        )}

        {/* Name */}
        <h2 className="text-sm sm:text-xl font-bold border-b border-[#d4af37]/45 px-6 py-1 my-2 text-slate-900 tracking-wider font-sans uppercase">
          {certificate.recipientName}
        </h2>

        {/* Institution */}
        {certificate.institution && (
          <p className="text-[7px] sm:text-[9px] text-slate-600 font-sans tracking-wide">
            {certificate.institution}
          </p>
        )}

        {/* Details / Course Description */}
        {certificate.details && (
          <div className="text-[6px] sm:text-[9px] text-slate-500 max-w-md leading-relaxed mt-2 px-4">
            {certificate.details}
          </div>
        )}

        {/* Course Title */}
        {certificate.courseTitle && (
          <h3 className="text-xs sm:text-lg font-extrabold tracking-tight my-2 font-sans text-slate-850">
            {certificate.courseTitle}
          </h3>
        )}

        {/* Issue Date Info */}
        {certificate.issueDateInfo && (
          <p className="text-[6px] sm:text-[8px] text-slate-400 font-mono">
            {certificate.issueDateInfo}
          </p>
        )}
      </div>

      {/* Signatures & Seal */}
      <div className={`flex justify-between items-end pt-2 border-t border-slate-200 ${certificate.hasLeftStripes ? "ml-2" : ""}`}>
        {/* Seal or Left Footer Label */}
        {certificate.hasSeal ? (
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 border-double border-[#d4af37] bg-yellow-50/10 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" className="sm:w-6 sm:h-6">
              <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
            </svg>
          </div>
        ) : certificate.footerLeftLabel || certificate.footerLeftValue ? (
          <div className="flex flex-col items-start text-left">
            <span className="text-[5px] sm:text-[7px] text-slate-400 font-mono uppercase">{certificate.footerLeftLabel}</span>
            <span className="text-[6px] sm:text-[8px] font-bold text-slate-850">{certificate.footerLeftValue}</span>
          </div>
        ) : (
          <div />
        )}

        {/* Signature */}
        <div className="flex flex-col items-center">
          <span className="font-sans text-[6px] sm:text-[8px] font-bold text-slate-800">
            {certificate.sigName}
          </span>
          <span className="text-[5px] sm:text-[7px] text-slate-500 uppercase">
            {certificate.sigRole}
          </span>
          {certificate.sigOrg && (
            <span className="text-[5px] sm:text-[6px] text-slate-400 font-mono">
              {certificate.sigOrg}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
