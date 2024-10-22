import React from 'react';

const EventCard = ({ event }) => {
  const { title, date, image } = event;

  return (
    <div className="bg-black/50 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{date}</p>
        <button 
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors duration-200"
          onClick={() => console.log(`Ticket requested for ${title}`)}
        >
          Get Tickets
        </button>
      </div>
    </div>
  );
};

export default EventCard;