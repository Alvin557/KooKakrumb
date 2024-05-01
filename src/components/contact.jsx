import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://www.localhost:1337/api/contacts',
        {
          data: {
            First_Name: formData.First_Name,
            Last_Name: formData.Last_Name,
            Email: formData.Email,
            Subject: formData.Subject,
            Message: formData.Message,
          }
        },
        {
          headers: {
            Authorization: `Bearer ad6ace83831cafcaba86a9d98d3e9fb038098bb093c5bfb6ad313391de1f2d139d2b59a2c933d8a0ddd66aaa3ddbcc7a468b53ceba2274f8a43f8848d03341dfa20c03d494c7e29ef510eb23fd87866fbba78c343c8cab2148798b442b14e3189ac2609ea943d56a114390b02915c2e254bfe9392d4f25d34002b8483217ee24`,
          },
        }
      );
      // Reset form data after successful submission
      setFormData({
        First_Name: '',
        Last_Name: '',
        Email: '',
        Subject: '',
        Message: '',
      });
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };
  return (
    <div className="mx-auto py-20">
     <form onSubmit={handleSubmit} className="md:w-6/12 md:transform md:-translate-y-20 lg:w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          <div>
            <label htmlFor="First_Name" className="block text-lg font-bold leading-6 text-rose-900">
              First Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="First_Name"
                id="First_Name"
                value={formData.First_Name}
                onChange={handleChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="Last_Name" className="block text-lg font-bold leading-6 text-rose-900">
              Last Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="Last_Name"
                id="Last_Name"
                value={formData.Last_Name}
                onChange={handleChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Email" className="block text-lg font-bold leading-6 text-rose-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="Email"
                name="Email"
                id="Email"
                value={formData.Email}
                onChange={handleChange}
                autoComplete="Email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Subject" className="block text-lg font-bold leading-6 text-rose-900">
              Subject
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="Subject"
                id="Subject"
                value={formData.Subject}
                onChange={handleChange}
                autoComplete="Subject"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Message" className="block text-lg font-bold leading-6 text-rose-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="Message"
                id="Message"
                value={formData.Message}
                onChange={handleChange}
                rows="4"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        {submissionStatus === 'success' && (
          <p className="text-green-600">Your message was sent successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-red-600">Sorry, something went wrong. Please try again.</p>
        )}
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2"></div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-rose-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
          >
            Let's Connect
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;