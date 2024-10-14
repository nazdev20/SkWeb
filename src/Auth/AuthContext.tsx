import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { auth } from '../config/firebaseconfig';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import AuthModal from '../modals/AuthModal';

interface AuthContextType {
  user: unknown;
  isAuthOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<unknown>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Check if the page needs to reload based on sign-in or sign-out action
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      // Check if there's a flag to trigger reload (for sign-in or sign-up)
      if (user && sessionStorage.getItem('shouldReload') === 'true') {
        sessionStorage.removeItem('shouldReload'); // Remove flag after reload
        window.location.reload();  // Trigger reload once
      }
    });

    return () => unsubscribe();
  }, []);

  const openAuthModal = () => setIsAuthOpen(true);
  const closeAuthModal = () => setIsAuthOpen(false);

  const signOut = async () => {
    try {
      sessionStorage.setItem('shouldReload', 'true'); // Set reload flag
      await firebaseSignOut(auth);
      window.location.reload();  // Trigger reload once after sign out
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthOpen, openAuthModal, closeAuthModal, signOut }}>
      {children}
      {isAuthOpen && <AuthModal />}
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
