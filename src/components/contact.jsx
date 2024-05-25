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
            Authorization: `Bearer 38e5aaa1c61205f23b25f48bb1a29f803a902858a035975ae583528f4df39d96ad1f6f80a32ca923987b9272076c800db87e89357aa191a09f12bba633454be2068af3502d40162fea8ecbe34fbe4c0322ffb40f03fdbdc5ced8f776d1aee05866758112325fb9241c276b8126d93a07eb9a1685f732f84c3156721236877c5b`,
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
    <div className="max-w-2xl mx-auto py-8 sm:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-900">Contact Us</h2>
      <p className="mt-4 text-center text-gray-600">We'd love to hear from you. Please fill out the form below and we'll get in touch with you shortly.</p>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          <div>
            <label htmlFor="First_Name" className="block text-lg font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="First_Name"
              id="First_Name"
              value={formData.First_Name}
              onChange={handleChange}
              autoComplete="given-name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="Last_Name" className="block text-lg font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="Last_Name"
              id="Last_Name"
              value={formData.Last_Name}
              onChange={handleChange}
              autoComplete="family-name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              value={formData.Email}
              onChange={handleChange}
              autoComplete="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Subject" className="block text-lg font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="Subject"
              id="Subject"
              value={formData.Subject}
              onChange={handleChange}
              autoComplete="off"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="Message"
              id="Message"
              value={formData.Message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>
        </div>
        {submissionStatus === 'success' && (
          <p className="mt-4 text-center text-green-600">Your message was sent successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="mt-4 text-center text-red-600">Sorry, something went wrong. Please try again.</p>
        )}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-600 hover:red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Let's Connect!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
