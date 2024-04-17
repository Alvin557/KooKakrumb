import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Shop = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    // Increment the number of items in the cart
    setCartItems(prevCount => prevCount + 1);
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://www.localhost:1337/api/products?populate=*', {
        headers: {
          Authorization: `Bearer d78d3b01bb4210421c91ab76df4091e5cc957f593ae6e8760ae4f4b4bfff80f7e0e719b0c8d6a5516d9cfddc257736760eecb4e53bcb5d76ce86d7453bc56271397e52b582818e4b90f5754d1c11b482146281bddf44360e55d5b5fff17007105b9e98dd78ce7d90ba953ca731839966f70a7d30acd455c7605c67f8f27f5656`,
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
              <input type="number" min="1" defaultValue="1" className="text-center border border-rose-900 w-8 mt-2" />
              <button className="bg-gray-950 text-white px-4 py-2 rounded-xl mx-6 mt-2" onClick={addToCart}>Add to Cart</button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;