import React, { useState, useEffect } from 'react';
import { ref, set, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { realtimeDb } from '../../../config/firebaseconfig';

interface ChatWindowProps {
  closeChat: () => void;
}

interface Message {
  content: string;
  sender: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ closeChat }) => {
  const [message, setMessageState] = useState('');
  const [messages, setMessages] = useState<{ [key: string]: Message }>({});
  const auth = getAuth();

  const messagesRef = ref(realtimeDb, 'messages/');

  useEffect(() => {
    // Listener for new messages
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMessages(data);
      } else {
        setMessages({});
      }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, [messagesRef]);

  const handleSend = () => {
    if (message.trim()) {
      const user = auth.currentUser;
      if (user) {
        // Create a new message object
        const newMessage: Message = {
          content: message,
          sender: user.email || 'Anonymous',
        };

        // Add new message to Realtime Database
        const newMessageRef = ref(realtimeDb, 'messages/' + Date.now());
        set(newMessageRef, newMessage)
          .then(() => setMessageState(''))
          .catch((error) => {
            console.error('Error sending message:', error);
            alert('Failed to send message');
          });
      } else {
        alert('You must be authenticated to send a message.');
      }
    }
  };

  return (
    <div
      className="fixed bottom-16 right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4"
      style={{ zIndex: 1000 }} // Ensure the chat window is on top of other elements
    >
      <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
        <h4 className="text-lg font-semibold">Live Chat</h4>
        <button onClick={closeChat} className="text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </div>
      <div className="overflow-y-auto h-60 border border-gray-200 p-2 mb-2">
        {Object.entries(messages).map(([key, { content, sender }]) => {
          const isCurrentUser = auth.currentUser?.email === sender;
          return (
            <div
              key={key}
              className={`mb-2 p-2 rounded-md ${isCurrentUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'}`}
            >
              <p className="text-sm font-semibold">{sender}</p>
              <p>{content}</p>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessageState(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white rounded-lg px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
