import { useEffect, useState } from "react";
import { Learnmore, SignUp } from '../../components/ui/buttons';
import bg from '../../assets/Hero section/bg.jpg';
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase auth

const Home = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true); // User is signed in
      } else {
        setIsSignedIn(false); // No user signed in
      }
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="relative w-full h-screen" id="home">
    
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ 
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        
        <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
      </div>

      <div className='relative flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center text-white p-4 md:p-8'>
        <div className='mb-4'>
          <h1 className='font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2'>
            Empowerment Youth for a Better Future
          </h1>
          <p className='text-base md:text-xl'>
            Welcome to the official website of Sangguniang Kabataan, where we aim to provide opportunities, support, and representation for the youth in our community.
          </p>
        </div>

       
        {!isSignedIn && (
          <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4'>
            <Learnmore />
            <SignUp />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
