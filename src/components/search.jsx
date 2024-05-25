import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [placeholder, setPlaceholder] = useState('Search...');
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    setError('');
    setPlaceholder('Search...');

    try {
      const currentSearchTerm = searchTerm.trim(); // Capture and trim the current value of searchTerm
      console.log(`Searching for: ${currentSearchTerm}`);

      // Make sure the search term is not empty
      if (!currentSearchTerm) {
        setError('Please enter a search term.');
        setPlaceholder('Please enter a search term...');
        return;
      }

      // API request
      const response = await axios.get(
        `http://localhost:1337/api/products?populate=*&filters[Title][$containsi]=${currentSearchTerm}`,
        {
          headers: {
            Authorization: `Bearer 38e5aaa1c61205f23b25f48bb1a29f803a902858a035975ae583528f4df39d96ad1f6f80a32ca923987b9272076c800db87e89357aa191a09f12bba633454be2068af3502d40162fea8ecbe34fbe4c0322ffb40f03fdbdc5ced8f776d1aee05866758112325fb9241c276b8126d93a07eb9a1685f732f84c3156721236877c5b`,
          },
        }
      );

      console.log('API response:', response.data);

      // Check if response data is valid
      if (!response.data || !response.data.data) {
        setError('Invalid API response.');
        return;
      }

      // Get products from the response
      const products = response.data.data;

      if (products.length > 0) {
        navigate('/shop', { state: { products } });
      } else {
        setError('No results found, Search Again');
        setPlaceholder('No products found. Try again...');
      }
    } catch (error) {
      setError('Search failed');
      setPlaceholder('Error searching. Try again...');
      console.error('Search failed', error);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 pl-10 text-sm hover:border-rose-800"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-rose-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
      </form>
      {error && <p className="absolute font-semibold text-lg ml-2 mt-2 text-rose-900">{error}</p>}
    </div>
  );
};

export default Search;


