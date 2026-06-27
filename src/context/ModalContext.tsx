import React, { createContext, useState, useContext, ReactNode } from 'react';
import MessageModal from '../modals/MessageModal';

interface ModalContextType {
  showModal: (title: string, message: string) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  const showModal = (title: string, message: string) => {
    setModalContent({ title, message });
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
    setModalContent({ title: '', message: '' });
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <MessageModal
        isOpen={isModalOpen}
        onClose={hideModal}
        title={modalContent.title}
        message={modalContent.message}
      />
    </ModalContext.Provider>
  );
};
