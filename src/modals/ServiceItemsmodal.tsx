import React, { useState } from 'react';
import { Service } from '../data/data';

interface ServiceItemsModalProps {
  service: Service;
  onClose: () => void;
  openServiceForm: () => void;
}

const ServiceItemsModal: React.FC<ServiceItemsModalProps> = ({ service, onClose, openServiceForm }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = service.imageUrl.split(',').map(url => url.trim());

  const handlePrev = () => {
    setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : imageUrls.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex(prevIndex => (prevIndex < imageUrls.length - 1 ? prevIndex + 1 : 0));
  };

  if (imageUrls.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-4 sm:p-5 rounded-lg w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 text-2xl sm:text-3xl font-bold focus:outline-none"
          >
            &times;
          </button>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h2>
          <p className="text-sm sm:text-base mb-2 sm:mb-3">{service.description}</p>
          <p className="text-sm sm:text-base">No images available</p>
          <button
            onClick={openServiceForm}
            className="bg-blue-500 text-white p-2 sm:p-3 rounded w-full mt-4"
          >
            Open Service Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 sm:p-14 rounded-lg w-[80%] sm:w-[60%] md:w-2/3 lg:w-1/2 max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 text-2xl sm:text-3xl font-bold focus:outline-none"
        >
          &times;
        </button>
        
     
        <div className="relative mb-4 mt-12">
          <img
            src={imageUrls[currentImageIndex]}
            alt={`Service Image ${currentImageIndex + 1}`}
            className="w-[400px] h-[400px] max-w-full max-h-80 rounded-lg md:w-[400px] md:h-[250px] mx-auto" // Adjust width and height for mobile and larger screens
          />
          {imageUrls.length > 1 && (
            <div className="absolute inset-0 flex justify-between items-center">
              <button
                onClick={handlePrev}
                className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-lg sm:text-xl"
              >
                &#9664;
              </button>
              <button
                onClick={handleNext}
                className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-lg sm:text-xl"
              >
                &#9654;
              </button>
            </div>
          )}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h2>
        <p className="text-sm sm:text-base mb-2 sm:mb-3">{service.description}</p>
        
        <button
          onClick={openServiceForm}
          className="bg-blue-500 text-white p-2 sm:p-3 rounded w-full mt-4"
        >
          Open Service Form
        </button>
      </div>
    </div>
  );
};

export default ServiceItemsModal;
