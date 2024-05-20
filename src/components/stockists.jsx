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
          Authorization:  `Bearer b6049c64ae079a994778078e6cb4e67b7daf5648a57ae367becdb4f7a5c26fbb835efeb9f74435ceec6ae78cd37b085fd57ef6d2e5aadbbddfed1b6cfe4d1faaa9b62c3fc90e340393e6ddf6883bdd051d5bf6880d55fc95f08ab06e587d6fca276cd2cb40dfced8774b8371aa0fa7d7e7d5a8f61cf5e99bd2b6f999e3dd9875`,
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