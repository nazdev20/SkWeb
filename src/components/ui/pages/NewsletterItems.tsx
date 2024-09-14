import React, { useState } from 'react';
import Modal from '../../../modals/NLModal';
import { Newsletter } from '../../../data/data';

interface NewsletterItemsProps {
  newsletter: Newsletter;
}

const NewsletterItems: React.FC<NewsletterItemsProps> = ({ newsletter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to truncate description with mobile view handling
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        {/* Adjust image height for mobile */}
        <img
          src={newsletter.imageUrl}
          alt={newsletter.title}
          className="w-full h-32 sm:h-48 object-cover"  // h-32 for mobile, h-48 for larger screens
        />
        <div className="p-4">
          <h2 className="text-lg sm:text-xl font-bold mb-2">{newsletter.title}</h2>
          {/* Truncate description further on mobile */}
          <p className="text-gray-700 mb-4">
            {truncateDescription(newsletter.description, window.innerWidth < 640 ? 50 : 100)} {/* Adjust description length based on screen width */}
          </p>
          {newsletter.link && (
            <a href={newsletter.link} className="text-blue-500 hover:underline cursor-pointer">
              Read More &rarr;
            </a>
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <img
          src={newsletter.imageUrl}
          alt={newsletter.title}
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{newsletter.title}</h2>
        <p className="text-gray-700 mb-4">{newsletter.description}</p>
        <p className="text-gray-700 mb-4">{newsletter.fullContent}</p>
      </Modal>
    </>
  );
};

export default NewsletterItems;
