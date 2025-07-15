// src/app/[api]/page.tsx

// This is a server component (Next.js 13+ with app directory)
const Sal = async () => {
  // Fetch product data from API
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  // Make sure `products` is an array
  const products = Array.isArray(data.products) ? data.products : [];
      console.log(products)
  return (
    <div>
      {products.map((item: any) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <img src={item.images} alt={item.images} />
        </div>
      ))}


    <div className="flex justify-between items-center p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">Product List</h1>
        <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
                Load More
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"> 
                Add Product
            </button>
        </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product: any) => (
            <div key={product.id} className="border p-4 rounded-lg">
                <img src={product.images} alt={product.name} className="w-full h-40 object-cover mb-2" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-xl font-bold mt-2">${product.price}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Sal;

