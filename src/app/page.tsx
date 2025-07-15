import * as React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CategoryTabs } from "./components/CategoryTabs";
import { ProductGrid } from "./components/ProductGrid";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { Footer } from "./components/Footer";



const newArrivalsProducts = [
  {
    id: 1,
    name: "Elegant Evening Dress",
    price: "$120",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/19aa129c52c5959ac9d990e15dc9c54e8a10992c?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
  {
    id: 2,
    name: "Casual Weekend Wear",
    price: "$80",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/80ee376ba34afbc0e6d8360c71fcee6bf5f2a4aa?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
  {
    id: 3,
    name: "Chic Accessories",
    price: "$45",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/68c006cc861af54a9231f2ef1d716e8c9aa58c8e?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
  {
    id: 4,
    name: "Comfortable Sneakers",
    price: "$90",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ee8ef24aef9a19811df71755d43600f53fd0bb60?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
];

const bestSellersProducts = [
  {
    id: 5,
    name: "Elegant Evening Dress",
    price: "$120",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d750976cb07fb873e277576ba14b67d6a1deda05?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
  {
    id: 6,
    name: "Casual Weekend Wear",
    price: "$80",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/acfa315190158dc858ba72a3003147110ec6236a?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
  {
    id: 7,
    name: "Chic Accessories",
    price: "$45",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/67a1981e72f74acc5d3b5cf52f915550a3ca96e3?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
  {
    id: 8,
    name: "Comfortable Sneakers",
    price: "$90",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a11ead30b940294853efce3fbf62bbcf71e00844?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
];

const limitedOffersProducts = [
  {
    id: 9,
    name: "Elegant Evening Dress",
    price: "$120",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2e188b3c4a235f32806d2bb0a74bf7b9dd30132f?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
  {
    id: 10,
    name: "Casual Weekend Wear",
    price: "$80",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5647dc86c7db000425bffd91576d3a8ac97be67c?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
  {
    id: 11,
    name: "Chic Accessories",
    price: "$45",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/34c6600c5ef8d963931d1d206a0a70f43ff2f5ca?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
  {
    id: 12,
    name: "Comfortable Sneakers",
    price: "$90",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d88e3f87ec23151c1c5b7e231f8c8ae9d04fca39?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
  },
];

export default function StyleHubHomepage() {
  return (
    <div className="overflow-hidden bg-neutral-50 min-h-[800px]">
      <div className="w-full max-md:max-w-full">
        <Header />

        <main className="flex flex-1 justify-center items-start px-40 py-5 size-full max-md:px-5 max-md:max-w-full">
          <div className="overflow-hidden flex-1 shrink w-full basis-0 max-w-[960px] min-w-60 max-md:max-w-full">
            <HeroSection />

            <section>
              <h2 className="px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none min-h-[60px] text-neutral-900 max-md:max-w-full">
                Featured Categories
              </h2>
              <CategoryTabs />
            </section>

            <section>
              <h2 className="px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none min-h-[60px] text-neutral-900 max-md:max-w-full">
                New Arrivals
              </h2>
              <ProductGrid products={newArrivalsProducts} />
            </section>

            <section>
              <h2 className="px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none min-h-[60px] text-neutral-900 max-md:max-w-full">
                Best Sellers
              </h2>
              <ProductGrid products={bestSellersProducts} />
            </section>

            <section>
              <h2 className="px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none min-h-[60px] text-neutral-900 max-md:max-w-full">
                Limited-Time Offers
              </h2>
              <ProductGrid products={limitedOffersProducts} />
            </section>

            <section>
              <h2 className="px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none min-h-[60px] text-neutral-900 max-md:max-w-full">
                Customer Testimonials
              </h2>
              <TestimonialsSection />
            </section>

            <NewsletterSection />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}





