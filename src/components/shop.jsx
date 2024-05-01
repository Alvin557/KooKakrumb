import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Shop = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://www.localhost:1337/api/products?populate=*', {
        headers: {
          Authorization: `Bearer ad6ace83831cafcaba86a9d98d3e9fb038098bb093c5bfb6ad313391de1f2d139d2b59a2c933d8a0ddd66aaa3ddbcc7a468b53ceba2274f8a43f8848d03341dfa20c03d494c7e29ef510eb23fd87866fbba78c343c8cab2148798b442b14e3189ac2609ea943d56a114390b02915c2e254bfe9392d4f25d34002b8483217ee24`,
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
              <button className="bg-gray-950 text-white px-4 py-2 rounded-xl mx-6 mt-2" >Add to Cart</button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;