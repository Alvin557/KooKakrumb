import React from 'react';
import breadcrumbImage from '../assets/breadcrumbs.jpeg'; // Import your image file
import breadcrumb from '../assets/breadcrumbs1.jpeg';
import Products from './products.jsx';

const MainSection = () =>{
  return (
<main className="flex-1">
        <section className="w-full py-6 lg:py-12">
            <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_750px]">
                <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none">
                    WELCOME TO <span className='text-rose-900 font-bold'> LYNCH’S GOURMET BREADCRUMBS</span>
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 pr-12 ">
                    Delight your taste buds with our artisanal breadcrumbs. Perfect for crispy coatings and crunchy toppings.
                    </p>
                </div>
                <a
                    className="inline-flex h-9 w-4/5 items-center justify-center rounded-md bg-rose-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                    rel="ugc"
                >
                    Explore Breadcrumbs
                </a>
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
  
    </section>

        <section className="w-full py-8 md:py-12 lg:py-16 border-t">
  <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
    <div className="space-y-3">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter md:text-center text-rose-900">
        Kookakrumb Seasoned Breadcrumbs: A Delicious Tale!
      </h2>
      <p className="mx-auto max-w-[600px] text-sm md:text-base lg:text-lg text-gray-500 md:text-center dark:text-gray-400">
        Experience the delight of our premium quality breadcrumb coatings for food, available in Australian and International markets.
      </p>
    </div>
    <div className="mx-auto w-full max-w-sm space-y-2">
      <form className="flex flex-col md:flex-row md:space-x-2">
        <input
          type="email"
          className="flex h-10 w-full md:w-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:max-w-lg flex-1"
          placeholder="Enter your email"
        />
        <button
          className="inline-flex items-center justify-center h-10 md:h-auto whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 md:px-6 py-2 md:py-2"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Sign up to get notified when we launch.
        <a className="underline underline-offset-2" href="#" rel="ugc">
          Terms &amp; Conditions
        </a>
      </p>
    </div>
  </div>
</section>

<section className="w-full py-8 md:py-12 lg:py-16 border-t">
  <div className="container px-4 md:px-6">
    <div className="grid gap-8 sm:px-4 md:gap-12 md:grid-cols-2">
      <div className="space-y-4">
        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Quality</div>
        <h2 className="text-xl lg:text-start text-rose-900 md:text-3xl lg:text-4xl font-bold tracking-tighter md:text-center">
          Enjoy Premium Quality Breadcrumbs!
        </h2>
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-rose-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
          rel="ugc"
        >
          Get Started
        </a>
      </div>
      <div className="flex flex-col items-start space-y-4">
        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Variety</div>
        <p className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">
          Explore our range of 13 different <span className='text-rose-900'>Breambrumbs!</span>
        </p>
        <a
          className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="#"
          rel="ugc"
        >
          Order Now!
        </a>
      </div>
    </div>
  </div>
</section>

</main>
  );
}

export default MainSection;
