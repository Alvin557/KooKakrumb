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
          Authorization:  `Bearer 38e5aaa1c61205f23b25f48bb1a29f803a902858a035975ae583528f4df39d96ad1f6f80a32ca923987b9272076c800db87e89357aa191a09f12bba633454be2068af3502d40162fea8ecbe34fbe4c0322ffb40f03fdbdc5ced8f776d1aee05866758112325fb9241c276b8126d93a07eb9a1685f732f84c3156721236877c5b`,
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
