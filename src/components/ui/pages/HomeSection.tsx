import reactimg from "../../../assets/react.svg";
import { SignUp } from "../buttons";

const HomeSection = () => {
  return (
    <div className="min-h-screen pt-16 px-4 sm:px-8"> {/* Adjust padding for mobile */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[100%] gap-8 sm:gap-4">
        
        {/* Text Section */}
        <div className="flex flex-col items-start space-y-4 p-5 w-full sm:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-serif">
            Building a Brighter Future for Youth
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-5">
            At Sangguniang Kabataan, our mission is to empower the youth by providing them with opportunities for growth, development, and active
            participation in their communities. We envision a future where every young person has the tools and support they need to succeed and 
            make a positive impact.
          </p>
          <SignUp />
        </div>

        {/* Image Section */}
        <div className="flex justify-center sm:ml-[-20px] w-full sm:w-1/2"> {/* Make the width responsive */}
          <img 
            src={reactimg} 
            alt="Card" 
            className="w-[80%] h-auto sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] rounded-md shadow-md object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default HomeSection;
