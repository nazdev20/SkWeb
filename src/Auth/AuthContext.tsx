// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { auth } from '../config/firebaseconfig';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import AuthModal from '../modals/AuthModal';

interface AuthContextType {
  user: unknown; // Replace 'any' with a more specific type if needed
  isAuthOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<unknown>(null); // Replace 'any' with a more specific type if needed
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const openAuthModal = () => setIsAuthOpen(true);
  const closeAuthModal = () => setIsAuthOpen(false);

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      alert('Sign out successful!');
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthOpen, openAuthModal, closeAuthModal, signOut }}>
      {children}
      {isAuthOpen && <AuthModal />} {/* Render AuthModal based on context */}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
