interface ProductImageGalleryProps {
  images: string[];
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  return (
    <div className="flex flex-col items-start gap-2 flex-1 rounded-lg bg-neutral-50 p-4">
      <div className="flex items-start gap-2 self-stretch">
        <img
          className="w-[460px] h-[688px] object-cover"
          src={images[0]}
          alt="Product main view"
        />
        <img
          className="w-[460px] h-[688px] object-cover"
          src={images[1]}
          alt="Product alternate view"
        />
      </div>
      <div className="flex items-start gap-2 self-stretch">
        <img
          className="w-[460px] h-[344px] object-cover"
          src={images[2]}
          alt="Product detail view"
        />
        <img
          className="w-[460px] h-[344px] object-cover"
          src={images[3]}
          alt="Product styling view"
        />
      </div>
      <div className="flex h-[344px] items-start gap-2 self-stretch"></div>
    </div>
  );
}
