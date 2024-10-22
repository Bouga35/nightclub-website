import React from 'react';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import ReservationForm from '../components/ReservationForm';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import '../styles/index.css'; 
// Import events data
import { events } from '../data/events';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Nightclub atmosphere" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative text-center z-10">
          <h1 className="text-6xl font-bold mb-4">PULSE</h1>
          <p className="text-xl mb-8">Experience the Night Like Never Before</p>
          <a 
            href="/#events" // Updated to point to the events section
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full inline-block transition-colors duration-200"
          >
            Upcoming Events
          </a>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Table Reservations</h2>
          <div className="max-w-2xl mx-auto">
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="relative group overflow-hidden rounded-lg"
              >
                <img 
                  src={`/images/gallery-${i}.jpg`}
                  alt={`Gallery ${i}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full">
                    View Larger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DJ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured DJs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={`/images/dj-${i}.jpg`}
                    alt={`DJ ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">DJ Name {i}</h3>
                <p className="text-gray-400 mb-4">Friday Nights</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://instagram.com" className="text-purple-500 hover:text-purple-400">
                    <Instagram size={20} />
                  </a>
                  <a href="https://twitter.com" className="text-purple-500 hover:text-purple-400">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <p className="mb-4">123 Night Street<br/>City, State 12345</p>
              <h3 className="text-2xl font-bold mb-4">Hours</h3>
              <p className="mb-4">
                Thursday - Saturday: 10PM - 4AM<br/>
                Sunday: 9PM - 2AM
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-purple-500 hover:text-purple-400">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" className="text-purple-500 hover:text-purple-400">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com" className="text-purple-500 hover:text-purple-400">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-gray-800 rounded-lg px-4 py-2"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-gray-800 rounded-lg px-4 py-2"
              />
              <textarea 
                placeholder="Message" 
                rows="4" 
                className="w-full bg-gray-800 rounded-lg px-4 py-2"
              ></textarea>
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter for exclusive offers and updates</p>
          <Newsletter />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
