import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Rating from './Rating';
import ProductPage from './ProductPage';

const Shop = ({ onAddToCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [errors, setErrors] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.products) {
      setProducts(location.state.products);
    } else {
      fetchProducts();
    }
  }, [location.state]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/products?populate=*', {
        headers: {
          Authorization: `Bearer 38e5aaa1c61205f23b25f48bb1a29f803a902858a035975ae583528f4df39d96ad1f6f80a32ca923987b9272076c800db87e89357aa191a09f12bba633454be2068af3502d40162fea8ecbe34fbe4c0322ffb40f03fdbdc5ced8f776d1aee05866758112325fb9241c276b8126d93a07eb9a1685f732f84c3156721236877c5b`,
        },
      });
      setProducts(response.data.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = (product) => {
    const quantity = productQuantities[product.id] || 0;
    if (quantity <= 0) {
      setErrors((prevErrors) => ({ ...prevErrors, [product.id]: 'Please select the quantity' }));
      return;
    }
    onAddToCart({ ...product, quantity });
    setErrors((prevErrors) => ({ ...prevErrors, [product.id]: '' }));
  };

  const handleQuantityChange = (product, operation) => {
    setProductQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[product.id] || 0;
      const newQuantity =
        operation === 'increment'
          ? currentQuantity + 1
          : currentQuantity > 1
          ? currentQuantity - 1
          : 1;
      return {
        ...prevQuantities,
        [product.id]: newQuantity,
      };
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div className="relative">
                <Slider>
                  {product.attributes.Image &&
                    product.attributes.Image.data &&
                    product.attributes.Image.data.map((image) => (
                      <div key={image.id}>
                        <img
                          src={`http://localhost:1337${image.attributes.url}`}
                          alt={image.attributes.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                </Slider>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{product.attributes.Title}</h2>
                <p className="h-24 text-gray-600 mb-4 overflow-hidden">{product.attributes.Description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-800 break-all-after">
                      Price: ${product.attributes.Price}
                    </p>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-300 transition duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(product, 'decrement')}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-300 transition duration-300"
                    >
                      -
                    </button>
                    <span className="mx-2">{productQuantities[product.id] || 0}</span>
                    <button
                      onClick={() => handleQuantityChange(product, 'increment')}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-300 transition duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
                {errors[product.id] && <p className="text-red-500 mt-2">{errors[product.id]}</p>}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
