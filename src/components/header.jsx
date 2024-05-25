import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Search from './search.jsx';

const Header = ({ cartCount }) => {
  const [userName, setUserName] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userName');
    setUserName('');
    navigate('/');
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 lg:px-6 py-4 lg:py-8 flex flex-col lg:flex-row items-center">
      <div className="flex items-center justify-between w-full lg:w-auto lg:items-start">
        <div className="flex flex-col items-center mb-4 lg:flex-row lg:mb-0">
          <a className="flex items-center justify-center" href="/" rel="ugc">
            <img src={Logo} className="h-16 w-20 lg:h-20 lg:w-26" alt="KookAkrumb Logo" />
            <h2 className="text-lg font-bold ml-2 text-rose-900 hover:border-rose-900 lg:ml-5 lg:text-center">
              KookAkrumb
              <span className="hidden md:inline lg:inline lg:text-md">
                <span className="text-md font-semibold text-rose-800">
                  <br></br>Every Bite, a Delicious Tale!
                </span>
              </span>
            </h2>
            <span className="sr-only">KookAkrumb</span>
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-rose-900 hover:text-rose-800 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col lg:flex lg:flex-row lg:items-center lg:gap-4 lg:ml-auto w-full lg:w-auto mt-4 lg:mt-0`}
      >
        <a
          className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0"
          href="/#our-story"
          rel="ugc"
        >
          Our Story
        </a>
        <a
          className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0"
          href="/#products"
          rel="ugc"
        >
          Our Breadcrumbs
        </a>
        <Link to="/shop" className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0">
          Shop
        </Link>
        <Link to="/recipes" className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0">
          Recipes
        </Link>
        <Link to="/stockists" className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0">
          Stockists
        </Link>
      </div>
      <div className="flex items-center ml-auto gap-4">
        <Search />
        <Link to="/cart" className="relative">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 hover:border-rose-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 hover:text-rose-800"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <span className="sr-only">Toggle cart</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-rose-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </button>
        </Link>
        {userName ? (
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium">{`Hello, ${userName}`}</span>
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 hover:border-rose-800"
            >
              Logout
            </button>
          </div>
          ) : (
          <Link to="/loginpage" className="relative">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 hover:border-rose-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 hover:text-rose-800"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="sr-only">Toggle user</span>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;