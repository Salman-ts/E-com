import React from "react";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FilterBar } from "../components/FilterBar";
import { ProductSearchBar } from "../components/ProductSearchBar";
import { WomensProductCard } from "../components/WomensProductCard";
import { PaginationControls } from "../components/PaginationControls";

const womensProducts = [
  {
    id: 1,
    name: "Elegant Summer Dress",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9edde82d07cba9dd8c559cc0d905f29285a4c257?width=352",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/77696fb305c7a06a7fddbd9619a7eabf0f2a9156?width=352",
  },
  {
    id: 3,
    name: "Comfortable Yoga Pants",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/95056887907569279dd938eb0223f744c853575c?width=352",
  },
  {
    id: 4,
    name: "Stylish Leather Handbag",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0dc0ffeedc5cecbc9e0bec19d89aeaf098075ca9?width=352",
  },
  {
    id: 5,
    name: "Classic White Sneakers",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ecc1042a41be3e0a29d9fddb143406fface5e0f7?width=352",
  },
  {
    id: 6,
    name: "Cozy Knit Sweater",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/64d9bea8cbe63e7a821a079f5f14ca308a08545d?width=352",
  },
  {
    id: 7,
    name: "Versatile Black Leggings",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b13cef9c65d9d8df8113d03588ded588d65ffad?width=352",
  },
  {
    id: 8,
    name: "Chic Ankle Boots",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3decf48deed355e59563988bbbeedef67052dc97?width=352",
  },
  {
    id: 9,
    name: "Flowy Maxi Skirt",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c9c55500012dc2e7e2522f9553d3bf2a9a861d1d?width=352",
  },
  {
    id: 10,
    name: "Tailored Blazer",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/428b5a7c72712cd1ec01d7e937f64a31986cb3c5?width=352",
  },
];

export default function WomensClothingPage() {
  return (
    <div className="overflow-hidden bg-neutral-50 min-h-[800px]">
      <div className="w-full max-md:max-w-full">
        <Header />

        <main className="flex flex-1 justify-center items-start px-40 py-5 size-full max-md:px-5 max-md:max-w-full">
          <div className="overflow-hidden flex-1 shrink w-full basis-0 max-w-[960px] min-w-60 max-md:max-w-full">
            {/* Page Title */}
            <div className="flex items-start justify-between gap-3 self-stretch flex-wrap content-start p-4 pr-4 pl-4 pt-4 pb-4">
              <div className="flex w-72 min-w-72 flex-col items-start">
                <h1 className="self-stretch text-[32px] font-bold leading-10 text-neutral-900">
                  Women's Clothing
                </h1>
              </div>
            </div>

            {/* Category Navigation */}
            <div className="flex items-start gap-4 self-stretch p-4">
              <Link
                href="/women/dresses"
                className="flex items-center justify-center px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <span className="text-sm font-medium">Shop Dresses</span>
              </Link>
              <div className="flex items-center justify-center px-6 py-3 bg-neutral-200 text-neutral-900 rounded-lg">
                <span className="text-sm font-medium">All Categories</span>
              </div>
            </div>

            {/* Filter Bar */}
            <FilterBar className="self-stretch" />

            {/* Product Search */}
            <ProductSearchBar className="self-stretch" />

            {/* Products Grid */}
            <div className="flex flex-col items-start gap-3 self-stretch p-4">
              <div className="flex items-start gap-3 flex-1 self-stretch">
                {womensProducts.slice(0, 5).map((product) => (
                  <WomensProductCard
                    key={product.id}
                    name={product.name}
                    image={product.image}
                  />
                ))}
              </div>
              <div className="flex items-start gap-3 flex-1 self-stretch">
                {womensProducts.slice(5, 10).map((product) => (
                  <WomensProductCard
                    key={product.id}
                    name={product.name}
                    image={product.image}
                  />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <PaginationControls
              className="self-stretch"
              currentPage={1}
              totalPages={5}
            />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
