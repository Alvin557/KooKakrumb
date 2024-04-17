import React from 'react';
import Logo from '../assets/Logo.jpg';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) =>  {
  return (
    <header className="px-4 lg:px-6 py-4 lg:py-8 flex flex-col lg:flex-row items-center">
      <div className="flex items-center mb-4 lg:mb-0">
        <a className="flex items-center justify-center" href="#" rel="ugc">
          <img src={Logo} className='h-20 w-26'/>
          <h2 className='text-lg font-bold ml-5 text-rose-900 hover:border-rose-900 lg:text-center'>
            KOOKAKRAMB
            <span className="text-md font-semibold text-rose-800 block lg:inline">
            <br></br>Every Bite, a Delicious Tale!
            </span>
          </h2>
          <span className="sr-only">Kookakramb</span>
        </a>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 lg:ml-auto">
          <a className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0" href="#our-story" rel="ugc">Our Story</a>
          <a className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0" href="#products" rel="ugc">Our Breadcrumbs</a>
          <Link to="/shop" className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0">Shop</Link>
          <a className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0" href="#" rel="ugc">Recipes</a>
          <a className="text-lg font-medium hover:text-rose-800 mb-2 lg:mb-0" href="#" rel="ugc">Stockists</a>
      </div>

      <div className="flex items-center ml-auto gap-4">
        <div className="relative">
          <input type="text" class="w-full rounded-md border border-[#DDE2E4] px-3 py-2 pl-10 text-sm hover:border-rose-800" placeholder="Search..." />
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
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gra-400 hover:text-rose-900"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>

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
          {cartItems > 0 && <span className="bg-red-500 rounded-full w-4 h-4 text-white text-xs relative top-0 right-0">{cartItems}</span>}
        </button>
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
      </div>
    </header>
  );
};

export default Header;
