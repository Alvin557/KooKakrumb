import React from 'react';
import breadcrumbImage from '../assets/breadcrumbs.jpeg'; // Import your image file
import breadcrumb from '../assets/breadcrumbs1.jpeg';
import Products from './products.jsx';
import {Link} from 'react-router-dom';

const MainSection = () =>{
  return (
<main className="flex-1">
        <section className="w-full py-6 lg:py-12">
            <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_750px]">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
    <div className="space-y-3">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter md:text-center text-rose-900 break-all w-11/12">
        Kookakrumb Seasoned Breadcrumbs: A Delicious Tale!
      </h2>
      <p className="mx-auto max-w-[600px] text-sm font-semibold md:text-base lg:text-lg text-gray-500 md:text-center dark:text-gray-400 lg:text-start">
        Experience the delight of our premium quality breadcrumb coatings for food, available in Australian and International markets.
      </p>
    </div>
    <div className="mx-auto w-full max-w-sm space-y-2">
      <form className="flex flex-col md:flex-row md:space-x-2">
        <input
          type="email"
          className="flex h-10 w-full md:w-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:max-w-lg flex-1"
          placeholder="Enter your email"
        />
        <button
          className="bg-gray-950 text-white font-semibold border border-rose-900 rounded-lg px-4 hover:bg-rose-900"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Subscribe to get notified when we list new products.
        <a className="underline underline-offset-2" href="#" rel="ugc">
          Terms &amp; Conditions
        </a>
      </p>
    </div>
  </div>
                <img
                src={breadcrumbImage}
                alt="breadcrumb"
                className="w-full h-full mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
                />
            </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="our-story">
        <div className="container grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex lg:justify-start ml-5">
            <img src={breadcrumb} className='h-auto w-11/12 rounded-xl'></img>
            </div>
            <div className="space-y-2">
            <h2 className="text-5xl font-bold text-rose-900 tracking-tighter md:text-4xl/tight">Our Story</h2>
            <p className="max-w-4/5 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Kookakrumb Seasoned Breadcrumbs is proudly, an Australian run family business, that produces premium quality breadcrumb coatings for food, within Australian and International markets. The business first start producing the delicious breadcrumbs in a small factory located in Subiaco, WA. Slowly as the demand for Kookakrumb breadcrumbs increased a larger processing facility had to be sourced and we moved over to Osborne Park, WA. This Western Australian family owned business is backed by a team that encourages a close knit and fun work place culture.  
            </p>
            <button className="flex items-center justify-center w-48 bg-gray-900 px-2 py-3 text-xl font-medium text-gray-50 shadow transition-colors hover:bg-rose-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 rounded-md">Learn More!</button>
            </div>
            
        </div>
    </section>
        {/*Our Shop or Our Store section*/}
        <section className="w-full py-8 md:py-12 lg:py-16 border-t" id="products">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter md:text-center text-rose-900">
        Our Breamcrumbs
        </h2>
       < Products />
       <Link to='https://www.facebook.com/people/Kookakrumb/100054215602486/'
                 target='_blank'
                className='flex justify-center mt-16 p-4 text-4xl font-bold' 
              >
                <img
                  className="max-w-[85px]"
                  src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                  alt="Facebook"
                />
              <span className='p-4 text-rose-900'>Connect With Us on Facebook</span>
              </Link>
  
    </section>
</main>
  );
}

export default MainSection;
