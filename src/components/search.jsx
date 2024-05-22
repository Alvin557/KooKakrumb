import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [placeholder, setPlaceholder] = useState('Search...'); // State for placeholder text
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    // Reset error state
    setError('');
    try {
      const currentSearchTerm = searchTerm; // Capture the current value of searchTerm
      const response = await axios.get(`http://www.localhost:1337/api/products?populate=*&Title_contains=${currentSearchTerm}`, {
        headers: {
          Authorization: 'Bearer ad6ace83831cafcaba86a9d98d3e9fb038098bb093c5bfb6ad313391de1f2d139d2b59a2c933d8a0ddd66aaa3ddbcc7a468b53ceba2274f8a43f8848d03341dfa20c03d494c7e29ef510eb23fd87866fbba78c343c8cab2148798b442b14e3189ac2609ea943d56a114390b02915c2e254bfe9392d4f25d34002b8483217ee24',
        }
      });
      const products = response.data.data;
      const matchingProducts = products.filter(product =>
        product.attributes.Title && product.attributes.Title.toLowerCase().includes(currentSearchTerm.toLowerCase())
      );
      if (matchingProducts.length > 0) {
        navigate('/shop', { state: { products: matchingProducts } });
      } else {
        setError('No results found, Search Again');
        setPlaceholder('No products found. Try again...'); // Update placeholder text
      }
    } catch (error) {
      setError('Search failed');
      setPlaceholder('Error searching. Try again...'); // Update placeholder text
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
          placeholder={placeholder} // Use dynamic placeholder
        />
        <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gra-400 hover:text-rose-900">
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
