import React, { useState, useEffect } from 'react';
import { Event } from '../../../data/data';
import EventModal from '../../../modals/EventModal';
import { db, collection, getDocs } from '../../../config/firebaseconfig';

const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventList = (await getDocs(collection(db, 'events'))).docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
        setEvents(eventList);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Upcoming Events</h2>
      {events.length === 0 ? (
        <p className="text-base sm:text-lg text-gray-600">No upcoming events available at the moment.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {events.map(event => (
            <div
              key={event.id}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex flex-col"
              onClick={() => openModal(event)}
            >
              <img
                src={event.image[0] || '/default-image.jpg'}
                alt={event.title}
                className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-semibold mb-2 truncate">{event.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm truncate">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedEvent && (
        <EventModal
          isOpen={modalOpen}
          onClose={closeModal}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default UpcomingEvents;
