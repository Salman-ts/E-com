"use client";
import * as React from "react";

export function NewsletterSection() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  return (
    <section className="w-full max-md:max-w-full">
      <div className="flex-1 px-10 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="w-full text-center text-neutral-900 max-md:max-w-full">
          <h2 className="max-w-full text-4xl font-extrabold tracking-tighter leading-none w-[720px]">
            Stay Updated
          </h2>
          <p className="mt-2 w-full text-base max-md:max-w-full">
            Sign up for our newsletter to receive exclusive offers and the
            latest news.
          </p>
        </div>

        <div className="flex flex-1 justify-center items-start mt-8 text-base size-full max-md:max-w-full">
          <form
            onSubmit={handleSubmit}
            className="flex-1 shrink basis-0 max-w-[480px] min-h-16 min-w-40 w-[480px] max-md:max-w-full"
          >
            <div className="flex flex-1 rounded-lg size-full max-md:max-w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex overflow-hidden flex-1 shrink items-center py-2 pr-2 pl-4 h-full bg-gray-200 rounded-lg basis-0 min-w-60 text-neutral-500 placeholder-neutral-500"
                required
              />
              <div className="flex justify-center items-center pr-2 h-full font-bold text-center whitespace-nowrap bg-gray-200 rounded-none text-neutral-50 w-[129px]">
                <button
                  type="submit"
                  className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch px-5 my-auto w-full rounded-lg basis-0 bg-neutral-900 max-w-[480px] min-h-12 min-w-[84px]"
                >
                  <span className="overflow-hidden self-stretch my-auto w-20">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
