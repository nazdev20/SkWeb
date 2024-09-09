// src/Auth/AuthPage.tsx
import  { useState } from 'react';
import { auth } from '../config/firebaseconfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthPage = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Sign up successful!');
      onClose(); 
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      console.error('Error signing up:', err);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Sign in successful!');
      onClose(); // Close the modal on successful sign in
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      console.error('Error signing in:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 rounded w-full"
        />
        <div className="flex flex-col items-center">
          {isSignUp ? (
            <button
              onClick={handleSignUp}
              className="bg-slate-950 border rounded-full text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105"
            >
              Sign Up
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              className="bg-slate-950 border rounded-full text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105"
            >
              Sign In
            </button>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="mt-4 text-blue-500 underline"
          >
            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};
