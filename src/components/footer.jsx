import React from 'react';
import Logo from '../assets/Logo.jpg';
import Email from '../assets/email-address.svg';
import Location from '../assets/location-map.svg';
import Phone from '../assets/phone-call.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
  <footer className="bg-gray-950 mt-16">
  <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-56 lg:grid-cols-3 lg:gap-x-6 mb-12">
      <div className="lg:grid lg:justify-start">
        <a href="#home-page" className="flex items-center">
          <img src={Logo} className="h-8 me-3" alt="Kookakramb Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-rose-900">Kookakramb <br></br>Every Bite, a Delicious Tale!</span>
        </a>
        <p className="mt-5 text-gray-500 dark:text-white">Kookakrumb Seasoned Breadcrumbs is proudly, an Australian run family business, that produces premium quality breadcrumb coatings for food, within Australian and International markets. The business first start producing the delicious breadcrumbs in a small factory located in Subiaco, WA. Slowly as the demand for Kookakrumb breadcrumbs increased a larger processing facility had to be sourced and we moved over to Osborne Park, WA. </p>
      </div>
      <div className="lg:grid lg:justify-center">
        <h2 className="mb-6 text-lg font-semibold uppercase text-rose-900">Useful Links</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
          <Link to="/faqs" className="hover:text-rose-900">FAQs</Link>
          </li>
          <li className="mb-4">
            <a href="#our-services" className="hover:text-rose-900">Store Policies</a>
          </li>
          <li className="mb-4">
          <Link to="/contact" className="hover:text-rose-900">Contact Us</Link>
          </li>
          <li className='mb-4'>
            <a href="#contact-us" className="hover:text-rose-900">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="lg:grid lg:justify-center">
        <h2 className="text-lg font-semibolduppercase text-rose-900">Contact us</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4 flex">
            <img className="w-5 h-5 mr-1" src={Phone} alt="Phone Icon" />
            <span className="hover:text-rose-900">+417385******</span>
          </li>
          <li className="mb-4 flex">
            <img className="w-5 h-5 mr-2" src={Email} alt="Email Icon" />
            <span className="hover:text-rose-900">Kookakramb@gmail.com</span>
          </li>
          <li className="mb-4 flex">
            <img className="w-5 h-5 mr-2" src={Location} alt="Location Icon" />
            <span className="hover:text-rose-900">Australia</span>
          </li>
        </ul>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
    <div className="flex flex-col items-center justify-between sm:flex-row">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-2 sm:mb-0">© 2024 <a href="" className="hover:underline">Kookakramb</a>. All Rights Reserved.</span>
      <div className="flex flex-wrap justify-center sm:justify-start">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ml-2 mb-2 sm:mb-0">Imprint</span>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ml-2">Privacy Policy</span>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
