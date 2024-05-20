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
          Authorization: `Bearer b6049c64ae079a994778078e6cb4e67b7daf5648a57ae367becdb4f7a5c26fbb835efeb9f74435ceec6ae78cd37b085fd57ef6d2e5aadbbddfed1b6cfe4d1faaa9b62c3fc90e340393e6ddf6883bdd051d5bf6880d55fc95f08ab06e587d6fca276cd2cb40dfced8774b8371aa0fa7d7e7d5a8f61cf5e99bd2b6f999e3dd9875`,
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