import React from "react";

interface WomensProductCardProps {
  name: string;
  image: string;
  className?: string;
}

export function WomensProductCard({
  name,
  image,
  className = "",
}: WomensProductCardProps) {
  return (
    <div className={`flex w-44 flex-col items-start gap-3 pb-3 ${className}`}>
      <img
        src={image}
        alt={name}
        className="h-[235px] self-stretch rounded-lg object-cover"
      />
      <div className="flex flex-col items-start self-stretch">
        <span className="self-stretch text-base font-medium leading-6 text-neutral-900">
          {name}
        </span>
      </div>
    </div>
  );
}
