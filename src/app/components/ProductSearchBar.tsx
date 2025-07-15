import React from "react";

interface ProductSearchBarProps {
  className?: string;
  placeholder?: string;
}

export function ProductSearchBar({
  className = "",
  placeholder = "Search for products",
}: ProductSearchBarProps) {
  return (
    <div
      className={`flex min-h-12 min-w-40 flex-col items-start p-3 pr-4 pl-3 ${className}`}
    >
      <div className="flex h-12 items-start self-stretch rounded-lg">
        <div className="flex items-center justify-center self-stretch rounded-l-lg bg-neutral-200 pl-4">
          <div className="h-6 flex-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5306 18.4694L14.8366 13.7762C17.6629 10.383 17.3204 5.36693 14.0591 2.38935C10.7978 -0.588237 5.77134 -0.474001 2.64867 2.64867C-0.474001 5.77134 -0.588237 10.7978 2.38935 14.0591C5.36693 17.3204 10.383 17.6629 13.7762 14.8366L18.4694 19.5306C18.7624 19.8237 19.2376 19.8237 19.5306 19.5306C19.8237 19.2376 19.8237 18.7624 19.5306 18.4694V18.4694ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25C4.77379 15.2459 1.75413 12.2262 1.75 8.5V8.5Z"
                fill="#737373"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-1 items-center self-stretch rounded-r-lg bg-neutral-200 px-4 py-2 pl-2 pr-4">
          <span className="text-base font-normal leading-6 text-neutral-500">
            {placeholder}
          </span>
        </div>
      </div>
    </div>
  );
}
