'use client';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles } from 'react-loader-spinner';

const ITEMS_PER_PAGE = 8;

const Sal = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      const productList = Array.isArray(data.products) ? data.products : [];
      setProducts(productList);
      setFilteredProducts(productList);
      setVisibleProducts(productList.slice(0, ITEMS_PER_PAGE));
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleSearch = () => {
    const filtered = products.filter((product: any) =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setVisibleProducts(filtered.slice(0, ITEMS_PER_PAGE));
    setPage(1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    const newVisible = filteredProducts.slice(0, nextPage * ITEMS_PER_PAGE);
    setVisibleProducts(newVisible);
    setPage(nextPage);
  };

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    toast.success(`${product.title} added to cart!`, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 relative">
      {/* Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Featured Products</h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8 flex gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Search
        </button>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Circles height="80" width="80" color="#3b82f6" ariaLabel="loading" />
        </div>
      ) : visibleProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibleProducts.map((item: any) => (
            <div
              key={item.id}
              className="bg-white border-2 border-gray-300 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{item.description.substring(0, 60)}...</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-900">${item.price}</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {item.rating} ★
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.location.href = `/product/${item.id}`}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Product
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More */}
      {visibleProducts.length < filteredProducts.length && (
        <div className="mt-10 text-center">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}

      {/* Toast */}
      <ToastContainer />

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 backdrop-blur-lg bg-black/30 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.title}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProduct.thumbnail}
                    alt={selectedProduct.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedProduct.images?.slice(0, 4).map((img: string, idx: number) => (
                      <img key={idx} src={img} alt="" className="w-16 h-16 object-cover rounded" />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div><strong>Brand:</strong> {selectedProduct.brand}</div>
                    <div><strong>Category:</strong> {selectedProduct.category}</div>
                    <div><strong>Stock:</strong> {selectedProduct.stock}</div>
                    <div><strong>Discount:</strong> {selectedProduct.discountPercentage}%</div>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50">
          <div className="w-full sm:w-[400px] bg-white h-full shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 text-2xl">×</button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-medium text-gray-700">{item.title}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-bold">${item.price * item.quantity}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-6 flex justify-between items-center">
                  <span className="font-semibold text-lg text-gray-800">
                    Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sal;

  