import * as React from "react";

interface TestimonialCardProps {
  name: string;
  timeAgo: string;
  avatar: string;
  rating: string[];
  content: string;
}

export function TestimonialCard({
  name,
  timeAgo,
  avatar,
  rating,
  content,
}: TestimonialCardProps) {
  return (
    <article className="w-full bg-neutral-50 max-md:max-w-full">
      <div className="flex flex-wrap gap-3 items-center w-full max-md:max-w-full">
        <img
          src={avatar}
          className="object-contain shrink-0 self-stretch my-auto w-10 rounded-3xl aspect-square"
          alt={`${name} avatar`}
        />
        <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
          <h3 className="w-full text-base font-medium text-neutral-900 max-md:max-w-full">
            {name}
          </h3>
          <time className="w-full text-sm text-neutral-500 max-md:max-w-full">
            {timeAgo}
          </time>
        </div>
      </div>

      <div className="flex flex-wrap gap-0.5 items-start mt-3 w-full max-md:max-w-full">
        {rating.map((star, index) => (
          <div key={index} className="w-5">
            <img
              src={star}
              className="object-contain flex-1 w-5 aspect-square"
              alt="Star rating"
            />
          </div>
        ))}
      </div>

      <p className="mt-3 w-full text-base leading-6 text-neutral-900 max-md:max-w-full">
        {content}
      </p>
    </article>
  );
}
