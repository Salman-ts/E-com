"use client";

import { useState } from "react";

interface SizeSelectorProps {
  sizes?: string[];
  onSizeSelect?: (size: string) => void;
}

export function SizeSelector({
  sizes = ["XS", "S", "M", "L", "XL"],
  onSizeSelect,
}: SizeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setIsOpen(false);
    onSizeSelect?.(size);
  };

  return (
    <div className="flex min-w-40 flex-col items-start flex-1">
      <div
        className="h-14 self-stretch rounded-lg border border-stone-300 bg-neutral-50 cursor-pointer relative flex items-center px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-base font-normal leading-6 text-neutral-900">
          {selectedSize || "Select Size"}
        </div>
        <div className="absolute right-4">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-neutral-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
            />
          </svg>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-stone-300 rounded-lg shadow-lg z-10">
            {sizes.map((size) => (
              <div
                key={size}
                className="px-4 py-2 hover:bg-neutral-50 cursor-pointer text-base font-normal leading-6 text-neutral-900"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSizeSelect(size);
                }}
              >
                {size}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
