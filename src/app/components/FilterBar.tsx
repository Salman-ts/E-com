import React from "react";

interface FilterBarProps {
  className?: string;
}

export function FilterBar({ className = "" }: FilterBarProps) {
  return (
    <div className={`flex items-start gap-3 p-3 ${className}`}>
      <FilterButton label="Category" />
      <FilterButton label="Size" />
      <FilterButton label="Color" />
      <FilterButton label="Price" />
    </div>
  );
}

interface FilterButtonProps {
  label: string;
}

function FilterButton({ label }: FilterButtonProps) {
  return (
    <button className="flex h-8 items-center gap-2 rounded-lg bg-neutral-200 px-4 py-0 pl-4 pr-2">
      <span className="text-center text-sm font-normal leading-[21px] text-neutral-900">
        {label}
      </span>
      <div className="flex flex-col items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6922 1.94219L7.44219 8.19219C7.32496 8.30955 7.16588 8.37549 7 8.37549C6.83412 8.37549 6.67504 8.30955 6.55781 8.19219L0.307812 1.94219C0.063599 1.69797 0.063599 1.30203 0.307812 1.05781C0.552026 0.813599 0.947974 0.813599 1.19219 1.05781L7 6.86641L12.8078 1.05781C13.052 0.813599 13.448 0.813599 13.6922 1.05781C13.9364 1.30203 13.9364 1.69797 13.6922 1.94219V1.94219Z"
            fill="#141414"
          />
        </svg>
      </div>
    </button>
  );
}
