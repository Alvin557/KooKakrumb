import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FAQs = () => {
  const [faqs, setFAQs] = useState([]);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get('http://www.localhost:1337/api/faqs?populate=*', {
        headers: {
          Authorization: `Bearer ad6ace83831cafcaba86a9d98d3e9fb038098bb093c5bfb6ad313391de1f2d139d2b59a2c933d8a0ddd66aaa3ddbcc7a468b53ceba2274f8a43f8848d03341dfa20c03d494c7e29ef510eb23fd87866fbba78c343c8cab2148798b442b14e3189ac2609ea943d56a114390b02915c2e254bfe9392d4f25d34002b8483217ee24`,
        },
      });
      setFAQs(response.data.data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      {faqs.map((faq) => (
        <div key={faq.id} className="mb-8">
          <h2 className="text-2xl font-bold text-rose-900 mb-2">{faq.attributes.Question}</h2>
          <p className="text-gray-950">{faq.attributes.Answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;