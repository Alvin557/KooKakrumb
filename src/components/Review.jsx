import React, { useState } from 'react';
import axios from 'axios';

const Review = ({ productId }) => {
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!review) {
        setError('Review cannot be empty');
        return;
      }

      const response = await axios.post('http://localhost:1337/api/reviews', {
        data: {
          review: review,
          product: productId, // assuming you have a product relation in the review
        },
      }, {
        headers: {
          Authorization: 'Bearer ad6ace83831cafcaba86a9d98d3e9fb038098bb093c5bfb6ad313391de1f2d139d2b59a2c933d8a0ddd66aaa3ddbcc7a468b53ceba2274f8a43f8848d03341dfa20c03d494c7e29ef510eb23fd87866fbba78c343c8cab2148798b442b14e3189ac2609ea943d56a114390b02915c2e254bfe9392d4f25d34002b8483217ee24',
        },
      });

      if (response.status === 200) {
        setSuccess('Review submitted successfully!');
        setReview('');
      } else {
        setError('Failed to submit review');
      }
    } catch (error) {
      setError('Failed to submit review');
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Leave a Review</h3>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          rows="4"
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-rose-900 text-white px-4 py-2 rounded-lg hover:bg-rose-800 transition duration-300"
        >
          Submit Review
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  );
};

export default Review;
