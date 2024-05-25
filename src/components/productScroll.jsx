import React, { useState, useEffect } from 'react';
import '../css/productScroll.css';
import crumbs1 from '../assets/crumbs1.jpg';
import crumbs2 from '../assets/crumbs2.jpg';
import crumbs3 from '../assets/crumbs3.jpg';
import crumbs4 from '../assets/crumbs4.jpg';

const ProductScroll = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Gourment Stuffing", image: crumbs1, price: 4.0, reviews: 4.5 },
    { id: 2, name: "Cajun Spices", image: crumbs2, price: 4.0, reviews: 4.0 },
    { id: 3, name: "Parmesan", image: crumbs3, price: 4.0, reviews: 4.8 },
    { id: 4, name: "Glutten Free Fine White", image: crumbs4, price: 5.4, reviews: 4.1 },
    { id: 1, name: "Gourment Stuffing", image: crumbs1, price: 4.0, reviews: 4.5 },
    { id: 2, name: "Cajun Spices", image: crumbs2, price: 4.0, reviews: 4.0 },
    { id: 3, name: "Parmesan", image: crumbs3, price: 4.0, reviews: 4.8 },
    { id: 4, name: "Glutten Free Fine White", image: crumbs4, price: 5.4, reviews: 4.1 },
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
                {/* <button
                  className="mt-4 bg-slate-950 text-white px-4 py-2 rounded hover:text-rose-900"
                >
                  View Product
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScroll;