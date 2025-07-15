import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ProductImageGallery } from "../../components/ProductImageGallery";
import { RatingStars } from "../../components/RatingStars";
import { RatingBreakdown } from "../../components/RatingBreakdown";
import { CustomerReview } from "../../components/CustomerReview";
import { RelatedProducts } from "../../components/RelatedProducts";
import { SizeSelector } from "../../components/SizeSelector";

const productImages = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/f0cd02ecf0d3abb7a2cca912cf99ecdd14c68352?width=920",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/6715e5f4d5431c808e4adc641be8ce3d06a106a3?width=920",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/e76d0506f2535b2607d599a721fac3ac36850391?width=920",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/fc4baf958c693ed1f0f6fb9b1fe1fa12835fdb25?width=920",
];

const ratingsData = {
  5: 48,
  4: 36,
  3: 18,
  2: 12,
  1: 6,
};

const reviews = [
  {
    name: "Sophia Bennett",
    date: "May 15, 2024",
    rating: 5,
    comment:
      "Absolutely love this dress! The print is beautiful, and the fabric is so comfortable. It fits perfectly and is true to size. I've received so many compliments every time I wear it.",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/15d5054ff6b9586d9065b95562c3c4ed463bd8ca?width=80",
    likes: 25,
    dislikes: 2,
  },
  {
    name: "Olivia Carter",
    date: "April 22, 2024",
    rating: 4,
    comment:
      "The dress is lovely and fits well. The colors are vibrant, and the material is nice. However, it's a bit longer than expected, so I had to get it hemmed. Overall, a great purchase.",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0df966c0f2f22be7e130a56225cc6e4fb5499ea?width=80",
    likes: 18,
    dislikes: 3,
  },
];

const relatedProducts = [
  {
    id: 1,
    name: "Summer Breeze Dress",
    price: "$59.99",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e168bb578154a6261df4b95901a33595f5487d0a?width=339",
  },
  {
    id: 2,
    name: "Casual Chic Dress",
    price: "$49.99",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6afc1f2128b760e669f10ea02222bbd1ebcc55bf?width=339",
  },
  {
    id: 3,
    name: "Evening Elegance Dress",
    price: "$89.99",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a1be659795ca472da1b3fcf2e2845714fc7ef0aa?width=339",
  },
];

const breadcrumbItems = [
  { label: "Women", href: "/women" },
  { label: "Dresses" },
];

export default function DressesPage() {
  const averageRating = 4.5;
  const totalReviews = Object.values(ratingsData).reduce(
    (sum, count) => sum + count,
    0,
  );

  return (
    <div className="flex flex-col items-start bg-white w-full min-h-screen">
      <div className="flex min-h-[800px] flex-col items-start self-stretch bg-neutral-50">
        <div className="flex flex-col items-start self-stretch">
          <Header />

          <div className="flex justify-center items-start px-40 py-5 flex-1 self-stretch max-md:px-5">
            <div className="flex max-w-[960px] flex-col items-start flex-1">
              {/* Breadcrumb */}
              <Breadcrumb items={breadcrumbItems} />

              {/* Product Gallery */}
              <div className="flex items-start self-stretch bg-neutral-50 p-4">
                <ProductImageGallery images={productImages} />
              </div>

              {/* Product Title */}
              <div className="flex h-15 flex-col items-start self-stretch p-4 pt-5 pb-3">
                <div className="self-stretch text-2xl font-bold leading-7 text-neutral-900">
                  Floral Print Maxi Dress
                </div>
              </div>

              {/* Item Number */}
              <div className="flex flex-col items-start self-stretch p-4 pt-1 pb-3">
                <div className="self-stretch text-sm font-normal leading-5 text-neutral-500">
                  Item No. 123456789
                </div>
              </div>

              {/* Price */}
              <div className="flex flex-col items-start self-stretch p-4 pt-5 pb-3">
                <div className="self-stretch text-2xl font-bold leading-7 text-neutral-900">
                  $79.99
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col items-start self-stretch p-4 pt-1 pb-3">
                <div className="self-stretch text-base font-normal leading-6 text-neutral-900">
                  This elegant maxi dress features a vibrant floral print,
                  perfect for any occasion. Made from lightweight, breathable
                  fabric, it ensures comfort and style. Available in multiple
                  sizes.
                </div>
              </div>

              {/* Size Selector */}
              <div className="flex max-w-[480px] items-end gap-4 flex-wrap p-4 pt-3">
                <SizeSelector />
              </div>

              {/* Add to Cart Button */}
              <div className="flex items-start self-stretch p-4 pt-3">
                <div className="flex h-10 min-w-[84px] max-w-[480px] justify-center items-center px-4 rounded-lg bg-neutral-900">
                  <div className="flex flex-col items-center">
                    <div className="self-stretch overflow-hidden text-center text-sm font-bold leading-5 text-neutral-50">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Reviews Section */}
              <div className="flex h-15 flex-col items-start self-stretch p-4 pt-5 pb-3">
                <div className="self-stretch text-2xl font-bold leading-7 text-neutral-900">
                  Customer Reviews
                </div>
              </div>

              {/* Reviews Summary */}
              <div className="flex items-start gap-6 self-stretch flex-wrap content-start p-4">
                <div className="flex h-[153px] flex-col items-start gap-2">
                  <div className="flex w-[98px] flex-col items-start">
                    <div className="self-stretch text-4xl font-extrabold leading-[45px] tracking-tight text-neutral-900">
                      {averageRating}
                    </div>
                  </div>
                  <RatingStars rating={averageRating} />
                  <div className="flex w-[98px] flex-col items-start">
                    <div className="self-stretch text-base font-normal leading-6 text-neutral-900">
                      {totalReviews} reviews
                    </div>
                  </div>
                </div>

                <RatingBreakdown ratings={ratingsData} />
              </div>

              {/* Individual Reviews */}
              <div className="flex flex-col items-start gap-8 self-stretch bg-neutral-50 p-4">
                {reviews.map((review, index) => (
                  <CustomerReview
                    key={index}
                    name={review.name}
                    date={review.date}
                    rating={review.rating}
                    comment={review.comment}
                    avatar={review.avatar}
                    likes={review.likes}
                    dislikes={review.dislikes}
                  />
                ))}
              </div>

              {/* Related Products Section */}
              <div className="flex h-15 flex-col items-start self-stretch p-4 pt-5 pb-3">
                <div className="self-stretch text-2xl font-bold leading-7 text-neutral-900">
                  Related Products
                </div>
              </div>

              <RelatedProducts products={relatedProducts} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
