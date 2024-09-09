// src/components/SignUp.tsx

import { useAuth } from '../../Auth/AuthContext';

export const SignUp = () => {
  const { user, openAuthModal, signOut } = useAuth();

  return (
    <div>
      {user ? (
        <button
          onClick={signOut}
          className="bg-slate-950 border  text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={openAuthModal}
          className="bg-slate-950 border  text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105"
        >
          Sign Up
        </button>
      )}
    </div>
  );
};

export const Learnmore = ()=>{

return(
   <button className='bg-slate-950 border  text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105 cursor-pointer mb-4'>
          Learn More
        </button>
)
}



export const SignIn = () => {
  const { user, openAuthModal, signOut } = useAuth();

  return (
    <div>
      {user ? (
        <button
          onClick={signOut}
          className="bg-slate-950 border  text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={openAuthModal}
          className="bg-slate-950 border  text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105"
        >
          Sign In
        </button>
      )}
    </div>
  );
};
