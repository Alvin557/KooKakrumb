import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    overallSatisfaction: '',
    easeOfUse: '',
    clarity: '',
    visibility: '',
    helpfulness: '',
    improvements: '',
    additionalComments: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback', formData);
      // Reset form data after successful submission
      setFormData({
        overallSatisfaction: '',
        easeOfUse: '',
        clarity: '',
        visibility: '',
        helpfulness: '',
        improvements: '',
        additionalComments: '',
      });
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="mx-auto">
      <h2 className="text-3xl font-bold mb-20 pb-4 text-rose-900">Breadcrumb Feature Feedback Form</h2>
      <form onSubmit={handleSubmit} className="md:w-6/12 md:transform md:-translate-y-20 lg:w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          <div>
            <label htmlFor="overallSatisfaction" className="block text-lg font-bold leading-6 text-rose-900">
              1. Overall Satisfaction
            </label>
            <div className="mt-2.5">
              <div>
                <label>
                  <input
                    type="radio"
                    name="overallSatisfaction"
                    value="Very satisfied"
                    checked={formData.overallSatisfaction === 'Very satisfied'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Very satisfied
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="overallSatisfaction"
                    value="Satisfied"
                    checked={formData.overallSatisfaction === 'Satisfied'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Satisfied
                </label>
              </div>
              {/* Add the remaining options for overall satisfaction */}
              <div>
                <label>
                  <input
                    type="radio"
                    name="overallSatisfaction"
                    value="Neutral"
                    checked={formData.overallSatisfaction === 'Neutral'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Neutral
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="overallSatisfaction"
                    value="Dissatisfied"
                    checked={formData.overallSatisfaction === 'Dissatisfied'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Dissatisfied
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="overallSatisfaction"
                    value="Very dissatisfied"
                    checked={formData.overallSatisfaction === 'Very dissatisfied'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Very dissatisfied
                </label>
              </div>
            </div>
          </div>
          {/* Add the remaining questions and options */}
          <div>
            <label htmlFor="easeOfUse" className="block text-lg font-bold leading-6 text-rose-900">
              2. Ease of Use
            </label>
            <div className="mt-2.5">
              <div>
                <label>
                  <input
                    type="radio"
                    name="easeOfUse"
                    value="Very easy"
                    checked={formData.easeOfUse === 'Very easy'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Very easy
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="easeOfUse"
                    value="Easy"
                    checked={formData.easeOfUse === 'Easy'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Easy
                </label>
              </div>
              {/* Add the remaining options for ease of use */}
              <div>
                <label>
                  <input
                    type="radio"
                    name="easeOfUse"
                    value="Neutral"
                    checked={formData.easeOfUse === 'Neutral'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Neutral
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="easeOfUse"
                    value="Difficult"
                    checked={formData.easeOfUse === 'Difficult'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Difficult
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="easeOfUse"
                    value="Very difficult"
                    checked={formData.easeOfUse === 'Very difficult'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Very difficult
                </label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="clarity" className="block text-lg font-bold leading-6 text-rose-900">
              3. Clarity
            </label>
            <div className="mt-2.5">
              <div>
                <label>
                  <input
                    type="radio"
                    name="clarity"
                    value="Yes, always"
                    checked={formData.clarity === 'Yes, always'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Yes, always
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="clarity"
                    value="Yes, most of the time"
                    checked={formData.clarity === 'Yes, most of the time'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Yes, most of the time
                </label>
              </div>
              {/* Add the remaining options for clarity */}
              <div>
                <label>
                  <input
                    type="radio"
                    name="clarity"
                    value="Yes, sometimes"
                    checked={formData.clarity === 'Yes, sometimes'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Yes, sometimes
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="clarity"
                    value="No, rarely"
                    checked={formData.clarity === 'No, rarely'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  No, rarely
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="clarity"
                    value="No, never"
                    checked={formData.clarity === 'No, never'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  No, never
                </label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="visibility" className="block text-lg font-bold leading-6 text-rose-900">
              4. Visibility
            </label>
            <div className="mt-2.5">
              <div>
                <label>
                  <input
                    type="radio"
                    name="visibility"
                    value="Very visible"
                    checked={formData.visibility === 'Very visible'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Very visible
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="visibility"
                    value="Visible"
                    checked={formData.visibility === 'Visible'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Visible
                </label>
              </div>
              {/* Add the remaining options for visibility */}
              <div>
                <label>
                  <input
                    type="radio"
                    name="visibility"
                    value="Somewhat visible"
                    checked={formData.visibility === 'Somewhat visible'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Somewhat visible
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="visibility"
                    value="Neutral"
                    checked={formData.visibility === 'Neutral'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Neutral
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="visibility"
                    value="Somewhat invisible"
                    checked={formData.visibility === 'Somewhat invisible'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Somewhat invisible
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="visibility"
                    value="Very invisible"
                    checked={formData.visibility === 'Very invisible'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Very invisible
                </label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="helpfulness" className="block text-lg font-bold leading-6 text-rose-900">
              5. Helpfulness
            </label>
            <div className="mt-2.5">
              <div>
                <label>
                  <input
                    type="radio"
                    name="helpfulness"
                    value="Yes, significantly"
                    checked={formData.helpfulness === 'Yes, significantly'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Yes, significantly
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="helpfulness"
                    value="Yes, somewhat"
                    checked={formData.helpfulness === 'Yes, somewhat'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Yes, somewhat
                </label>
              </div>
              {/* Add the remaining options for helpfulness */}
              <div>
                <label>
                  <input
                    type="radio"
                    name="helpfulness"
                    value="Neutral"
                    checked={formData.helpfulness === 'Neutral'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  Neutral
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="helpfulness"
                    value="No, not at all"
                    checked={formData.helpfulness === 'No, not at all'}
                    onChange={handleChange}
                    className="mr-2 text-rose-900"
                  />
                  No, not at all
                </label>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="improvements" className="block text-lg font-bold leading-6 text-rose-900">
              6. Improvements
            </label>
            <div className="mt-2.5">
              <textarea
                name="improvements"
                value={formData.improvements}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 w-full py-3 bg-rose-900 hover:bg-rose-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      {submissionStatus === 'success' && (
        <p className="text-green-600 mt-4">Thank you for your feedback!</p>
      )}
      {submissionStatus === 'error' && (
        <p className="text-red-600 mt-4">An error occurred. Please try again later.</p>
      )}
    </div>
  );
};

export default FeedbackForm;
