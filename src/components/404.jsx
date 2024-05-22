import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex font-poppins items-center justify-center min-w-screen min-h-screen">
      <div className="grid gap-8">
        <div className="bg-gradient-to-r from-rose-900 to-rose-900 rounded-[26px] m-4">
          <div className="border-[20px] border-transparent rounded-[20px] bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl text-gray-900 text-center cursor-default">
              404 - Page Not Found
            </h1>
            <p className="text-gray-500 text-center mb-8">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="flex justify-center">
              <a
                href="/"
                className="bg-gradient-to-r from-rose-900 to-rose-900 shadow-lg mt-6 p-2 text-white rounded-lg hover:scale-105 hover:from-rose-900 hover:to-rose-900 transition duration-300 ease-in-out"
              >
                Go Back Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;