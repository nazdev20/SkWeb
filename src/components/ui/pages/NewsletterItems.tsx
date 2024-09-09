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

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <img
          src={newsletter.imageUrl}
          alt={newsletter.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{newsletter.title}</h2>
          <p className="text-gray-700 mb-4">{newsletter.description}</p>
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
