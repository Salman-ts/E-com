'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  brand: string;
  category: string;
  rating: number;
  discountPercentage: number;
  stock: number;
  images: string[];
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const router = useRouter();

  // Get cart items from localStorage or fetch from API
  useEffect(() => {
    const loadCart = async () => {
      try {
        // Try to get cart from localStorage first
        const storedCart = localStorage.getItem('cart');
        
        if (storedCart) {
          // Use stored cart if available
          setCart(JSON.parse(storedCart));
        } else {
          // Otherwise fetch selected products from API
          // In a real app, you would fetch from your backend API
          // For demo purposes, we'll fetch specific products
          const productIds = [1, 5, 9]; // Example product IDs the user selected
          
          const fetchedItems = await Promise.all(
            productIds.map(async (id) => {
              const res = await fetch(`https://dummyjson.com/products/${id}`);
              const product = await res.json();
              return { ...product, quantity: 1 };
            })
          );
          
          setCart(fetchedItems);
          // Save to localStorage
          localStorage.setItem('cart', JSON.stringify(fetchedItems));
        }
      } catch (error) {
        console.error('Error loading cart:', error);
        toast.error('Failed to load cart items');
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
    
    toast.success('Cart updated!');
  };

  const removeItem = (id: number) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item.id !== id);
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
    
    toast.success('Item removed from cart');
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    toast.success('Cart cleared');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            ← Back to Shopping
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Cart Items List - 2/3 width on large screens */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-4 bg-gray-50 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">Cart Items ({cart.length})</h2>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {cart.map((item) => (
                      <div key={item.id} className="p-3 md:p-4 hover:bg-gray-50">
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                          {/* Product Image */}
                          <div className="w-full sm:w-24 md:w-32 h-24 md:h-32 flex-shrink-0">
                            <img 
                              src={item.thumbnail} 
                              alt={item.title} 
                              className="w-full h-full object-cover rounded" 
                            />
                          </div>
                          
                          {/* Product Details */}
                          <div className="flex-grow">
                            <div className="flex justify-between">
                              <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                ×
                              </button>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                            
                            <div className="flex flex-wrap gap-x-2 md:gap-x-4 gap-y-1 text-xs md:text-sm text-gray-500 mb-2">
                              <span>Brand: {item.brand}</span>
                              <span>Category: {item.category}</span>
                              <span>Rating: {item.rating}★</span>
                            </div>
                            
                            <div className="flex justify-between items-center mt-2">
                              <div className="flex items-center">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm md:text-base"
                                >
                                  -
                                </button>
                                <span className="mx-2 md:mx-3">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm md:text-base"
                                >
                                  +
                                </button>
                              </div>
                              
                              <div className="text-right">
                                <div className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                                <div className="text-sm text-gray-500">${item.price} each</div>
                              </div>
                            </div>
                            
                            <button
                              onClick={() => setSelectedItem(item)}
                              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                            >
                              View full details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary - 1/3 width on large screens */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Payment Methods */}
                  <div className="mb-6">
                    <h3 className="text-md font-medium text-gray-700 mb-3">Payment Method</h3>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" defaultChecked />
                        <div className="flex items-center">
                          <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">💳</span>
                          <span>Credit Card</span>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" />
                        <div className="flex items-center">
                          <span className="bg-yellow-100 text-yellow-800 p-1 rounded mr-2">🅿️</span>
                          <span>PayPal</span>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" />
                        <div className="flex items-center">
                          <span className="bg-green-100 text-green-800 p-1 rounded mr-2">💵</span>
                          <span>Cash on Delivery</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  {/* Credit Card Form */}
                  <div className="mb-6 border-t pt-4">
                    <h3 className="text-md font-medium text-gray-700 mb-3">Payment Details</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Card Number</label>
                        <input 
                          type="text" 
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
                          <input 
                            type="text" 
                            placeholder="MM/YY"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">CVV</label>
                          <input 
                            type="text" 
                            placeholder="123"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Name on Card</label>
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toast.success('Payment processed successfully!')}
                    className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 mb-4"
                  >
                    Complete Payment
                  </button>
                  
                  <button
                    onClick={clearCart}
                    className="w-full py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Product Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 pr-4">{selectedItem.title}</h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl flex-shrink-0"
                >
                  ×
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <img
                    src={selectedItem.thumbnail}
                    alt={selectedItem.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg mb-2 sm:mb-4"
                  />
                  {selectedItem.images && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selectedItem.images.slice(0, 4).map((img, idx) => (
                        <img key={idx} src={img} alt="" className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded" />
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">${selectedItem.price}</span>
                    {selectedItem.discountPercentage > 0 && (
                      <span className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                        {selectedItem.discountPercentage}% OFF
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{selectedItem.description}</p>
                  
                  <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm">
                    <div><strong>Brand:</strong> {selectedItem.brand}</div>
                    <div><strong>Category:</strong> {selectedItem.category}</div>
                    <div><strong>Rating:</strong> {selectedItem.rating}/5</div>
                    <div><strong>Stock:</strong> {selectedItem.stock} available</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(selectedItem.id, selectedItem.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="mx-3">{selectedItem.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(selectedItem.id, selectedItem.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => {
                        updateQuantity(selectedItem.id, selectedItem.quantity);
                        setSelectedItem(null);
                      }}
                      className="w-full sm:flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Update Quantity
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ToastContainer />
    </div>
  );
}