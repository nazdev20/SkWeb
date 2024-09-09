import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebaseconfig'; // Adjust the path to your Firebase config

interface AttendanceFormModalProps {
  eventName: string; // Changed to eventName
  onClose: () => void;
}

const AttendanceFormModal: React.FC<AttendanceFormModalProps> = ({ eventName, onClose }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!eventName) {
      console.error('Event name is missing');
      alert('Event name is required.');
      return;
    }

    try {
      await addDoc(collection(db, 'attendance'), {
        eventName,
        email,
        fullName,
        age,
        address,
        timestamp: new Date().toISOString(),
      });
      alert('Attendance recorded successfully!');
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error('Error recording attendance:', error);
      alert('Failed to record attendance.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-4">Attendance Form for {eventName}</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendanceFormModal;
