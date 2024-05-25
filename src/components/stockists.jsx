import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stockists = () => {
  const [stockists, setStockists] = useState([]);

  useEffect(() => {
    fetchStockists();
  }, []);

  const fetchStockists = async () => {
    try {
      const response = await axios.get('http://www.localhost:1337/api/stockists?populate=*', {
        headers: {
          Authorization:  `Bearer 38e5aaa1c61205f23b25f48bb1a29f803a902858a035975ae583528f4df39d96ad1f6f80a32ca923987b9272076c800db87e89357aa191a09f12bba633454be2068af3502d40162fea8ecbe34fbe4c0322ffb40f03fdbdc5ced8f776d1aee05866758112325fb9241c276b8126d93a07eb9a1685f732f84c3156721236877c5b`,
          },
      });
      setStockists(response.data.data);
    } catch (error) {
      console.error('Error fetching stockists:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stockists.map((stockist) => (
          <div
            key={stockist.id}
            className="bg-white rounded-lg overflow-hidden flex items-center"
          >
            <img
              src={`http://localhost:1337${stockist.attributes.Stock_Logo.data.attributes.formats.thumbnail.url}`}
              alt={stockist.attributes.Title}
              className="w-3/6 h-25 object-cover mr-4"
            />
            <h2 className="text-5xl font-bold text-rose-900">
              {stockist.attributes.Title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Stockists;