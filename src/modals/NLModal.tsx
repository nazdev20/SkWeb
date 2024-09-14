import React from 'react';
import { ModalProps } from "../data/data";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-sm md:max-w-lg relative">

        <button
          className="absolute top-2 right-2 text-gray-600 text-2xl font-bold focus:outline-none z-60"
          onClick={onClose}
        >
          &times;
        </button>

  
        <div className="p-4 md:p-6 h-full">
        
          <div className="max-h-[400px] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
