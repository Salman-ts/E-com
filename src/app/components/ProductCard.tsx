import * as React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;

  
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <article className="flex-1 shrink rounded-lg basis-0 min-w-40">
      <img
        src={image}
        className="object-contain rounded-lg aspect-square w-[168px]"
        alt={name}
      />
      <div className="mt-4 w-full">
        <h3 className="w-full text-base font-medium leading-6 text-neutral-900">
          {name}
        </h3>
        <p className="w-full text-sm whitespace-nowrap text-neutral-500">
          {price}
        </p>
      </div>
    </article>
  );
}

