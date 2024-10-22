import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-2 rounded-lg transition-colors duration-200
            ${isSubmitting 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-purple-600 hover:bg-purple-700'}`}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {/* Status messages */}
      {status === 'success' && (
        <div className="mt-2 text-green-500 text-center">
          Thanks for subscribing!
        </div>
      )}
      {status === 'error' && (
        <div className="mt-2 text-red-500 text-center">
          Something went wrong. Please try again.
        </div>
      )}
    </div>
  );
};

export default Newsletter;