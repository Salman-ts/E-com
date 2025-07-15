interface RelatedProduct {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="flex items-start self-stretch">
      <div className="flex w-[565px] items-start gap-3 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex min-w-40 flex-col items-start gap-4 flex-1 self-stretch rounded-lg"
          >
            <img
              className="h-[226px] self-stretch rounded-lg object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="flex flex-col items-start self-stretch">
              <div className="flex flex-col items-start self-stretch">
                <div className="self-stretch text-base font-medium leading-6 text-neutral-900">
                  {product.name}
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch">
                <div className="self-stretch text-sm font-normal leading-5 text-neutral-500">
                  {product.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
