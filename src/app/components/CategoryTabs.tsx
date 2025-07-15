"use client";
import * as React from "react";
import Link from "next/link";

const categories = [
  {
    name: "Women",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f6bd3bb1b4db7c3813aec0171ac4d5afd670afe?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
    width: "w-[53px]",
    link: "/women",
  },
  {
    name: "Dresses",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0cd02ecf0d3abb7a2cca912cf99ecdd14c68352?width=40",
    width: "w-[60px]",
    link: "/women/dresses",
  },
  {
    name: "Men",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ead9ba37e72b5203e406383565933075ac3b9253?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
    width: "w-[30px]",
    link: "/men",
  },
  {
    name: "Accessories",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/04bccec43152d169fbd89717aeab977a2c21034a?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
    width: "w-[84px]",
    link: "/accessories",
  },
  {
    name: "Shoes",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/24b9fd08fa09725efc04792e285b909735aafa1c?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
    width: "w-[43px]",
    link: "/shoes",
  },
];

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = React.useState("Women");

  return (
    <div className="pb-3 w-full text-sm font-bold whitespace-nowrap text-neutral-500 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-start px-4 w-full border-b border-zinc-300 max-md:max-w-full">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.link}
            onClick={() => setActiveCategory(category.name)}
            className={`flex flex-col justify-center items-center pt-2.5 pb-2 border-gray-200 border-b-[3px] ${category.width} ${
              activeCategory === category.name ? "text-neutral-900" : ""
            } hover:text-neutral-900 transition-colors`}
          >
            <img
              src={category.icon}
              className="object-contain w-10 rounded-lg aspect-square"
              alt={category.name}
            />
            <span className="mt-2">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
