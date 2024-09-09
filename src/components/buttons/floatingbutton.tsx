
import React, { useState } from 'react';
import ChatWindow from '../ui/pages/Chatwindow';

const FloatingChatButton: React.FC = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        💬
      </button>
      {isChatOpen && <ChatWindow closeChat={() => setChatOpen(false)} />}
    </div>
  );
};

export default FloatingChatButton;
