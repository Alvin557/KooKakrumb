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
          Authorization:  `Bearer 38e5aaa1c61205f23b25f48bb1a29f803a902858a035975ae583528f4df39d96ad1f6f80a32ca923987b9272076c800db87e89357aa191a09f12bba633454be2068af3502d40162fea8ecbe34fbe4c0322ffb40f03fdbdc5ced8f776d1aee05866758112325fb9241c276b8126d93a07eb9a1685f732f84c3156721236877c5b`,
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