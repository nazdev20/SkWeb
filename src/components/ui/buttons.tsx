import { useAuth } from '../../Auth/AuthContext';

interface SignUpProps {
  transparent?: boolean;
}

// Reusable Button Component
const AuthButton: React.FC<{ label: string; onClick: () => void; className: string }> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-4 py-2 transition-transform duration-300 ease-in-out hover:scale-105`}
    >
      {label}
    </button>
  );
};

// SignUp Component
export const SignUp = ({ transparent }: SignUpProps) => {
  const { user, openAuthModal, signOut } = useAuth();

  return (
    <div>
      {user ? (
        <AuthButton
          label="Sign Out"
          onClick={signOut}
          className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        />
      ) : (
        <AuthButton
          label="Sign Up"
          onClick={openAuthModal}
          className={`${
            transparent
              ? 'bg-transparent border border-black text-black'  
              : 'bg-slate-950 text-white'
          }`}
        />
      )}
    </div>
  );
};

// Learnmore Button Component
export const Learnmore = () => {
  return (
    <button className="bg-slate-950 border text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105 cursor-pointer mb-4">
      Learn More
    </button>
  );
};

// SignIn Component
export const SignIn = () => {
  const { user, openAuthModal, signOut } = useAuth();

  return (
    <div>
      {user ? (
        <AuthButton
          label="Sign Out"
          onClick={signOut}
          className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        />
      ) : (
        <AuthButton
          label="Sign In"
          onClick={openAuthModal}
          className="bg-slate-950 text-white hover:bg-[#2a2388]"
        />
      )}
    </div>
  );
};
