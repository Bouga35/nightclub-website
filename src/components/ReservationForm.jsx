import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        date: '',
        guests: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            min="1"
            className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Special requests or notes"
          rows="4"
          className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button 
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 rounded-lg transition-colors duration-200 
          ${isSubmitting 
            ? 'bg-gray-600 cursor-not-allowed' 
            : 'bg-purple-600 hover:bg-purple-700'}`}
      >
        {isSubmitting ? 'Submitting...' : 'Reserve Now'}
      </button>

      {/* Status messages */}
      {submitStatus === 'success' && (
        <div className="text-green-500 text-center">
          Reservation request submitted successfully!
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="text-red-500 text-center">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
};

export default ReservationForm;