import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Rating from './Rating';
import Review from './Review'; // Import the Review component

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { productId } = location.state || {};
        if (!productId) {
          console.error('Product ID is not defined');
          return;
        }

        console.log('Fetching product with ID:', productId);

        const response = await axios.get(`http://localhost:1337/api/products/${productId}?populate=*`, {
          headers: {
            Authorization: `Bearer ad6ace83831cafcaba86a9d98d3e9fb038098bb093c5bfb6ad313391de1f2d139d2b59a2c933d8a0ddd66aaa3ddbcc7a468b53ceba2274f8a43f8848d03341dfa20c03d494c7e29ef510eb23fd87866fbba78c343c8cab2148798b442b14e3189ac2609ea943d56a114390b02915c2e254bfe9392d4f25d34002b8483217ee24`,
          },
        });
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [location.state]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const imageUrl = product.attributes?.Image?.data?.[0]?.attributes?.url;
  const title = product.attributes?.Title;
  const description = product.attributes?.Description;
  const price = product.attributes?.Price;

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {imageUrl ? (
            <img
              src={`http://localhost:1337${imageUrl}`}
              alt={title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          ) : (
            <div className="w-full h-auto rounded-lg shadow-md bg-gray-200">No Image Available</div>
          )}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-4">Price: ${price}</p>
          <Rating />
          <Review productId={product.id} /> {/* Include the Review component */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
