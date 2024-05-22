import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://www.localhost:1337/api/auth/local/register',
        formData,
        {
          headers: {
            Authorization:
              'Bearer ad6ace83831cafcaba86a9d98d3e9fb038098bb093c5bfb6ad313391de1f2d139d2b59a2c933d8a0ddd66aaa3ddbcc7a468b53ceba2274f8a43f8848d03341dfa20c03d494c7e29ef510eb23fd87866fbba78c343c8cab2148798b442b14e3189ac2609ea943d56a114390b02915c2e254bfe9392d4f25d34002b8483217ee24',
          },
        }
      );
      console.log(response.data);
      setSuccessMessage('Your account has been created successfully!');
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error('Error creating user:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="flex font-poppins items-center justify-center min-w-screen min-h-screen">
      <div className="grid gap-8">
        <div className="bg-gradient-to-r from-rose-900 to-rose-900 rounded-[26px] m-4">
          <div className="border-[20px] border-transparent rounded-[20px] bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl text-gray-900 text-center cursor-default">
              Sign Up
            </h1>
            {successMessage && (
              <div className="mb-4 text-green-500 font-semibold text-center">
                {successMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="mb-2 text-gray-400 font-semibold text-lg">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border bg-rose-900 text-white font-semibold border-gray-700 p-3 shadow-md placeholder:text-base border-gray-700 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 text-gray-400 font-semibold text-lg">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border bg-rose-900 text-white font-semibold border-gray-700 p-3 shadow-md placeholder:text-base border-gray-700 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 text-gray-400 font-semibold text-lg">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border bg-rose-900 text-white font-semibold border-gray-700 p-3 shadow-md placeholder:text-base border-gray-700 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="bg-gradient-to-r from-rose-900 to-rose-900 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-rose-900 hover:to-rose-900 transition duration-300 ease-in-out"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default text-gray-300 font-semibold">Already have an account?</span>
                <Link to="/loginpage" className="group text-rose-400 transition-all duration-100 ease-in-out">
                  <span className="bg-left-bottom ml-1 bg-gradient-to-r from-rose-400 to-rose-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-semibold">
                    Log In
                  </span>
                </Link>
              </h3>
            </div>
            {/* Third Party Authentication Options */}
            <div id="third-party-auth" className="flex items-center justify-center mt-5 flex-wrap">
              {/* Third-party authentication buttons */}
            </div>
            <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm px-2">
              <p className="cursor-default">
                By signing up, you agree to our
                <a className="group text-rose-400 transition-all duration-100 ease-in-out" href="#">
                  <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-rose-400 to-rose-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out px-2">
                    Terms
                  </span>
                </a>
                and
                <a className="group text-rose-400 transition-all duration-100 ease-in-out" href="#">
                  <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-rose-400 to-rose-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out px-2">
                    Privacy Policy
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
