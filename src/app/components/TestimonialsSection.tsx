import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Sophia Clark",
    timeAgo: "2 months ago",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/29771a09e94c62853dfc5b9475215f35f52886d5?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
    rating: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6a4077b5c39231c26d9c4b70661c0965bb6ccf1f?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e487974e040986a0beddb002fdf23ce883416d?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ac1c1033f3fb6d304ca6ff12eefa24af54690273?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a4c59aaffdeb5fecde3881e52f91a685bad5cfec?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ef0be85f26e63b3d179c598f680d89506cfd1054?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
    ],
    content:
      "I absolutely love the quality and style of the clothes from StyleHub. The fit is perfect, and I always receive compliments when I wear them.",
  },
  {
    id: 2,
    name: "Ethan Bennett",
    timeAgo: "3 months ago",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c02d1b5de54f205d4a8c7c5251fc2ec0cb9b0236?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
    rating: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8d42ea3bfdfa11f23e2ee7cbc5ae3f34f7a46d02?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/637c5d9e0e7d6c6a9099fcb2baaf4fb3f4f3d6d2?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/20c78e32206f103a129f8a88dd69129f59d7ce47?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f7522d289ac93fa976364cca170ec7a02b007477?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/719b2b42dc74e5e83410d466127a44d5461a33ec?placeholderIfAbsent=true&apiKey=c694c1c1d8e44574b37eb67cfc4c4228",
    ],
    content:
      "StyleHub offers a great selection of trendy and comfortable clothing. The customer service is also top-notch.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden p-4 w-full bg-neutral-50 max-md:max-w-full">
      {testimonials.map((testimonial, index) => (
        <div key={testimonial.id} className={index > 0 ? "mt-8" : ""}>
          <TestimonialCard
            name={testimonial.name}
            timeAgo={testimonial.timeAgo}
            avatar={testimonial.avatar}
            rating={testimonial.rating}
            content={testimonial.content}
          />
        </div>
      ))}
    </section>
  );
}
