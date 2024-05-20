import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Shop = ({ onAddToCart }) => {
  
  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://www.localhost:1337/api/products?populate=*', {
        headers: {
          Authorization: `Bearer b6049c64ae079a994778078e6cb4e67b7daf5648a57ae367becdb4f7a5c26fbb835efeb9f74435ceec6ae78cd37b085fd57ef6d2e5aadbbddfed1b6cfe4d1faaa9b62c3fc90e340393e6ddf6883bdd051d5bf6880d55fc95f08ab06e587d6fca276cd2cb40dfced8774b8371aa0fa7d7e7d5a8f61cf5e99bd2b6f999e3dd9875`,
        },
      });
      setProducts(response.data.data); // Access the 'data' array in the response
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border px-8 py-8 rounded-lg bg-rose-900">
              <Slider>
                {product.attributes.Image.data.map((image) => (
                  <div key={image.id}>
                    <img src={`http://localhost:1337${image.attributes.url}`} alt={image.attributes.name} className="w-full aspect-[1/1] mb-4" />
                  </div>
                ))}
              </Slider>
              <h2 className="text-2xl text-white font-bold">{product.attributes.Title}</h2>
              <p className="text-white mt-4">{product.attributes.Description}</p>
              <p className="text-white text-xl font-semibold mt-2">Price: ${product.attributes.Price}</p>
              <p>
              <span className="text-white font-semibold me-1">Quantity:</span>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="text-center border border-rose-900 w-8 mt-2"
              />
              <button
                className="bg-gray-950 text-white px-4 py-2 rounded-xl mx-6 mt-2"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;