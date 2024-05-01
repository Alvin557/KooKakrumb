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
          Authorization: `Bearer ad6ace83831cafcaba86a9d98d3e9fb038098bb093c5bfb6ad313391de1f2d139d2b59a2c933d8a0ddd66aaa3ddbcc7a468b53ceba2274f8a43f8848d03341dfa20c03d494c7e29ef510eb23fd87866fbba78c343c8cab2148798b442b14e3189ac2609ea943d56a114390b02915c2e254bfe9392d4f25d34002b8483217ee24`,
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