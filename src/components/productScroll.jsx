import React, { useState, useEffect } from 'react';
import { useTrail, animated } from '@react-spring/web'
import crumbs1 from '../assets/crumbs1.jpg';
import crumbs2 from '../assets/crumbs2.jpg';
import crumbs3 from '../assets/crumbs3.jpg';
import crumbs4 from '../assets/crumbs4.jpg';

const ProductScroll = () => {
  const [cart, setCart] = useState([]);

  const products = [
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
  ];

  // Define the animation trail based on the length of products array
  const [trails, api] = useTrail(
    products.length,
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    })
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="flex justify-start overflow-x-hidden p-4 mx-16 gap-8">
      {/* Map over the products array and apply animation to each */}
      {trails.map((style, index) => (
        <animated.div key={products[index].id} style={style} className="w-64 flex-none">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img src={products[index].image} alt={products[index].name} className="w-full h-48 object-cover" />
            <div className="p-4 bg-rose-900">
              <h3 className="font-bold text-white text-lg">{products[index].name}</h3>
              <p className="text-white mt-2">Price: ${products[index].price}</p>
              <p className="text-white mt-2">Reviews: {products[index].reviews}</p>
              <button onClick={() => addToCart(products[index])} className="mt-4 bg-slate-950 text-white px-4 py-2 rounded hover:text-rose-900">
                Add to Cart
              </button>
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default ProductScroll;
