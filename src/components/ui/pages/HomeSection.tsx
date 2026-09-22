import { useEffect, useState } from "react";
import Sk from "../../../assets/Hero section/SK KABATAAANNNNN.jpg";
import { SignUp } from "../buttons";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase auth

const HomeSection = () => {
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
    <div className="min-h-screen w-full overflow-hidden pt-16 px-4 sm:px-8">
      <div className="flex w-full max-w-full flex-col items-center justify-between gap-8 sm:flex-row sm:gap-4">
        
        {/* Text Section */}
        <div className="flex w-full min-w-0 flex-col items-start space-y-4 p-5 sm:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-serif">
            Building a Brighter Future for Youth
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-5">
            At Sangguniang Kabataan, our mission is to empower the youth by providing them with opportunities for growth, development, and active
            participation in their communities. We envision a future where every young person has the tools and support they need to succeed and 
            make a positive impact.
          </p>

          {/* Conditionally render SignUp button based on sign-in status */}
          {!isSignedIn && <SignUp />}
        </div>

        {/* Image Section */}
        <div className="flex w-full min-w-0 justify-center sm:ml-0 sm:w-1/2">
          <img 
            src={Sk} 
            alt="Card" 
            className="h-auto w-full max-w-full rounded-md object-contain shadow-md sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[550px] lg:w-[550px]"
          />
        </div>

      </div>
    </div>
  );
};

export default HomeSection;
