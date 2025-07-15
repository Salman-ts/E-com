import React from "react";

interface PaginationControlsProps {
  currentPage?: number;
  totalPages?: number;
  className?: string;
}

export function PaginationControls({
  currentPage = 1,
  totalPages = 5,
  className = "",
}: PaginationControlsProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`flex items-center justify-center gap-0 p-4 ${className}`}>
      {/* Previous Button */}
      <div className="flex h-10 w-10 items-center justify-center">
        <div className="flex flex-col items-start">
          <svg
            width="18"
            height="18"
            viewBox="0 0 7 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.64797 12.227C6.86776 12.4468 6.86776 12.8032 6.64797 13.023C6.42818 13.2428 6.07182 13.2428 5.85203 13.023L0.227031 7.39797C0.121407 7.29246 0.0620575 7.14929 0.0620575 7C0.0620575 6.85071 0.121407 6.70754 0.227031 6.60203L5.85203 0.977031C6.07182 0.757239 6.42818 0.757239 6.64797 0.977031C6.86776 1.19682 6.86776 1.55318 6.64797 1.77297L1.42023 7L6.64797 12.227Z"
              fill="#141414"
            />
          </svg>
        </div>
      </div>

      {/* Page Numbers */}
      {pages.map((page) => (
        <div
          key={page}
          className={`flex h-10 w-10 items-center justify-center ${
            page === currentPage
              ? "rounded-[20px] bg-neutral-200"
              : "rounded-[20px]"
          }`}
        >
          <span
            className={`text-sm leading-[21px] text-neutral-900 ${
              page === currentPage ? "font-bold" : "font-normal"
            }`}
          >
            {page}
          </span>
        </div>
      ))}

      {/* Next Button */}
      <div className="flex h-10 w-10 items-center justify-center">
        <div className="flex flex-col items-start">
          <svg
            width="18"
            height="18"
            viewBox="0 0 7 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.77297 7.39797L1.14797 13.023C0.928177 13.2428 0.571823 13.2428 0.352031 13.023C0.132239 12.8032 0.132239 12.4468 0.352031 12.227L5.57977 7L0.352031 1.77297C0.132239 1.55318 0.132239 1.19682 0.352031 0.977031C0.571823 0.757239 0.928177 0.757239 1.14797 0.977031L6.77297 6.60203C6.87859 6.70754 6.93794 6.85071 6.93794 7C6.93794 7.14929 6.87859 7.29246 6.77297 7.39797V7.39797Z"
              fill="#141414"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
