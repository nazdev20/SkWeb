import React, { useState } from 'react';
import { Event } from '../data/data';
import AttendanceFormModal from '../modals/AttendanceEvent';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, event }) => {
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !event) return null;

  const today = new Date().toISOString().split('T')[0];

  const handleOpenAttendanceModal = () => {
    setShowAttendanceModal(true);
  };

  const handleCloseAttendanceModal = () => {
    setShowAttendanceModal(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : event.image.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex(prevIndex => (prevIndex < event.image.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl md:text-2xl"
        >
          &times;
        </button>
        <h3 className="text-lg md:text-xl font-semibold mb-4">{event.title}</h3>
        {event.image.length > 0 && (
          <div className="relative w-full h-40 md:h-60 max-h-60 overflow-hidden">
            <img
              src={event.image[currentImageIndex]}
              alt={event.title}
              className="w-full h-full object-cover rounded-lg"
            />
            {event.image.length > 1 && (
              <div className="absolute inset-0 flex justify-between items-center">
                <button
                  onClick={handlePrev}
                  className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-xl md:text-2xl"
                >
                  &#9664;
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-xl md:text-2xl"
                >
                  &#9654;
                </button>
              </div>
            )}
          </div>
        )}
        <p className="text-gray-600 mt-2 text-xs md:text-sm">{event.date}</p>
        <p className="text-gray-600 text-xs md:text-sm">{event.location}</p>
        <p className="text-gray-600 text-xs md:text-sm">{event.description}</p>
        {event.date === today ? (
          <>
            <button
              onClick={handleOpenAttendanceModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-xs md:text-sm"
            >
              Open Attendance Form
            </button>
            {showAttendanceModal && (
              <AttendanceFormModal 
                onClose={handleCloseAttendanceModal} 
                eventName={event.title} // Pass eventName instead of eventId
              />
            )}
          </>
        ) : (
          <p className="mt-4 text-red-500 text-xs md:text-sm">Attendance form is not available yet.</p>
        )}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 text-xs md:text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
