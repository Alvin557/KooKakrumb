import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from './Rating';
import Review from './Review';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchProductDetails();
    fetchProductReviews();
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:1337/api/products/${productId}?populate=*`);
      setProduct(response.data.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const fetchProductReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:1337/api/reviews?filters[product][id]=${productId}&populate=*`);
      setReviews(response.data.data);
    } catch (error) {
      console.error('Error fetching product reviews:', error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {product && (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="relative mb-4">
              <Slider>
                {product.attributes.Image && product.attributes.Image.data.map((image) => (
                  <div key={image.id}>
                    <img
                      src={`http://localhost:1337${image.attributes.url}`}
                      alt={image.attributes.name}
                      className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.attributes.Title}</h2>
              <p className="text-gray-600 mb-4">{product.attributes.Description}</p>
              <p className="text-xl font-semibold text-gray-800 mb-4">Price: ${product.attributes.Price}</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Rating />
              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Reviews</h3>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review.id} className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-gray-800">{review.attributes.review}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet. Be the first to review!</p>
              )}
              <Review productId={productId} />
            </div>
          </div>
        </div>
      )}
      <Link to="/" className="block text-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300 mt-8 mx-auto max-w-xs">
        Back to Shop
      </Link>
    </div>
  );
};

export default ProductPage;
