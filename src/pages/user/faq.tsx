import React, { useState } from 'react';

const FAQPage: React.FC = () => {
  // State to manage which FAQ item is active (expanded)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is SK?",
      answer: "Sangguniang Kabataan (SK) is a youth council in the Philippines that represents the youth in the local government. It aims to empower the youth and address their concerns and needs."
    },
    {
      question: "How to join SK?",
      answer: "Sangguniang Kabataan (SK) is a youth council in the Philippines that represents the youth in the local government. It aims to empower the youth and address their concerns and needs."
    },
    {
      question: "What are SK Programs?",
      answer: "Sangguniang Kabataan (SK) is a youth council in the Philippines that represents the youth in the local government. It aims to empower the youth and address their concerns and needs."
    },
    {
      question: "How can I contribute?",
      answer: "Sangguniang Kabataan (SK) is a youth council in the Philippines that represents the youth in the local government. It aims the youth and address their concerns and needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start">
        {/* Left Side */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-base lg:text-lg mb-6">Find answers to common questions about Sangguniang Kabataan and its programs.</p>
          <button className="mt-4 px-6 py-2 border border-black bg-white hover:bg-gray-100 transition duration-300">
            Contact
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-300 mb-4">
              <div 
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg lg:text-xl font-medium">{faq.question}</h3>
                <span className="text-lg lg:text-xl">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              {activeIndex === index && (
                <div className="py-2 text-gray-600 text-sm lg:text-base">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
