
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  actions: { label: string; href: string }[];
  imagePlaceholder?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, actions, imagePlaceholder = true }) => {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="text-blue-600 hover:underline mr-4"
            onClick={() => window.location.href = action.href}
          >
            {action.label}
          </button>
        ))}
      </div>
      {imagePlaceholder && <div className="mt-6 bg-gray-200 h-48"></div>}
    </div>
  );
};

export default Card;
