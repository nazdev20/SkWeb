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
      answer: "To join Sangguniang Kabataan (SK), you must be a Filipino citizen, aged 15 to 30 years old, and a resident of the barangay where you intend to run for a position. You must also meet the eligibility requirements set by the Commission on Elections (COMELEC)."
    },
    {
      question: "What are SK programs?",
      answer: "Sangguniang Kabataan (SK) implements various programs and projects for the youth, such as sports development, skills training, environmental initiatives, and community outreach activities. These programs aim to promote the holistic development of the youth and address their specific needs."
    },
    {
      question: "How can I contribute?",
      answer: "You can contribute to Sangguniang Kabataan (SK) by actively participating in its programs and projects, volunteering your time and skills, and providing feedback and suggestions to improve the youth council's initiatives. Your involvement can make a positive impact on the youth in your community."
    },
    {
      question: "How to contact SK?",
      answer: "To contact Sangguniang Kabataan (SK), you can reach out to your local SK officials or visit the SK office in your barangay. You can also contact the SK national office for inquiries and assistance."
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
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg lg:text-xl font-medium">{faq.question}</h3>
                <span className="text-lg lg:text-xl">{activeIndex === index ? "▲" : "▼"}</span>
              </button>
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
