import React, { useState, useEffect } from 'react';
import '../css/productScroll.css';
import crumbs1 from '../assets/crumbs1.jpg';
import crumbs2 from '../assets/crumbs2.jpg';
import crumbs3 from '../assets/crumbs3.jpg';
import crumbs4 from '../assets/crumbs4.jpg';

const ProductScroll = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", image: crumbs1, price: 29.99, reviews: 4.5 },
    { id: 2, name: "Product 2", image: crumbs2, price: 39.99, reviews: 4.0 },
    { id: 3, name: "Product 3", image: crumbs3, price: 49.99, reviews: 4.8 },
    { id: 4, name: "Product 4", image: crumbs4, price: 49.99, reviews: 4.1 },
    { id: 5, name: "Product 5", image: crumbs1, price: 29.99, reviews: 4.5 },
    { id: 6, name: "Product 6", image: crumbs2, price: 39.99, reviews: 4.0 },
    { id: 7, name: "Product 7", image: crumbs3, price: 49.99, reviews: 4.8 },
    { id: 8, name: "Product 8", image: crumbs4, price: 49.99, reviews: 4.1 },
    { id: 9, name: "Product 9", image: crumbs1, price: 29.99, reviews: 4.5 },
    { id: 10, name: "Product 10", image: crumbs2, price: 39.99, reviews: 4.0 },
    { id: 11, name: "Product 11", image: crumbs3, price: 49.99, reviews: 4.8 },
    { id: 12, name: "Product 12", image: crumbs4, price: 49.99, reviews: 4.1 },
    { id: 13, name: "Product 1", image: crumbs1, price: 29.99, reviews: 4.5 },
    { id: 14, name: "Product 2", image: crumbs2, price: 39.99, reviews: 4.0 },
    { id: 15, name: "Product 3", image: crumbs3, price: 49.99, reviews: 4.8 },
    { id: 16, name: "Product 4", image: crumbs4, price: 49.99, reviews: 4.1 },
    { id: 17, name: "Product 5", image: crumbs1, price: 29.99, reviews: 4.5 },
    { id: 18, name: "Product 6", image: crumbs2, price: 39.99, reviews: 4.0 },
    { id: 19, name: "Product 7", image: crumbs3, price: 49.99, reviews: 4.8 },
    { id: 20, name: "Product 8", image: crumbs4, price: 49.99, reviews: 4.1 },
    { id: 21, name: "Product 9", image: crumbs1, price: 29.99, reviews: 4.5 },
    { id: 22, name: "Product 10", image: crumbs2, price: 39.99, reviews: 4.0 },
    { id: 23, name: "Product 11", image: crumbs3, price: 49.99, reviews: 4.8 },
    { id: 24, name: "Product 12", image: crumbs4, price: 49.99, reviews: 4.1 },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProducts((prevProducts) => {
        const shiftedProducts = prevProducts.slice(1); // Remove the first product
        const firstProduct = prevProducts[0]; // Get the first product
        return [...shiftedProducts, firstProduct]; // Add the first product to the end
      });
    }, 50000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  return (
    <div className="product-scroll-container">
      <div className="product-scroll-inner flex">
        {products.map((product) => (
          <div key={product.id} className="w-80 mr-36 mt-8 flex-none">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-rose-900">
                <h3 className="font-bold text-white text-lg">{product.name}</h3>
                <p className="text-white mt-2">Price: ${product.price}</p>
                <p className="text-white mt-2">Reviews: {product.reviews}</p>
                <button
                  className="mt-4 bg-slate-950 text-white px-4 py-2 rounded hover:text-rose-900"
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScroll;