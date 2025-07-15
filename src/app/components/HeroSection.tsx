import * as React from "react";

export function HeroSection() {
  return (
    <section className="w-full text-white max-md:max-w-full">
      <div className="flex flex-col flex-1 justify-center p-4 w-full max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col items-end px-20 pt-96 pb-5 w-full rounded-lg min-h-[480px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d0cfd14c562714fe3f2a4a39029e97f19251b9a?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228"
            className="object-cover absolute inset-0 size-full"
            alt="Fashion hero background"
          />
          <div className="relative max-w-full w-[618px]">
            <h1 className="w-full text-5xl font-extrabold tracking-tighter leading-none min-h-[60px] max-md:text-4xl max-md:max-w-full">
              Elevate Your Style
            </h1>
            <p className="mt-2 w-full text-base max-md:max-w-full">
              Discover the latest trends and timeless classics to express your
              unique personality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
