import * as React from "react";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="flex items-start w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-3 p-4 min-w-60 w-[741px]">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
