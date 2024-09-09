// src/modals/AuthModal.tsx

import { AuthPage } from '../Auth/AuthPage';
import { useAuth } from '../Auth/AuthContext';

const AuthModal = () => {
  const { closeAuthModal } = useAuth();

  return (
    <div>
      <button onClick={closeAuthModal} className="bg-slate-950 text-white px-4 py-2 rounded">
        Close Auth Modal
      </button>
      <AuthPage onClose={closeAuthModal} />
    </div>
  );
};

export default AuthModal;
