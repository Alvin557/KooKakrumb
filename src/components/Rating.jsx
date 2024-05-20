import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`text-3xl cursor-pointer ${
            rating >= value ? 'text-yellow-500' : 'text-gray-400'
          }`}
          onClick={() => handleRatingChange(value)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;