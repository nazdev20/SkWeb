import { Learnmore, SignUp } from '../../components/ui/buttons';
import bg from '../../assets/Hero section/bg.jpg'

const Home = () => {
  return (
    <div className="relative w-full h-[700px]">
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Fading Blue Overlay */}
        <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
      </div>

      <div className='relative flex flex-col items-center justify-center h-full w-full text-center text-white'>
        <div className='mb-4'>
          <h1 className='font-serif font-bold text-5xl p-5'>
            Empowerment Youth for a <br /> Better Future
          </h1>
          <p className='text-xl'>
            Welcome to the official website of Sangguniang Kabataan, where we aim to provide <br /> opportunities, support, and representation for the youth in our community.
          </p>
        </div>

        <div className='flex space-x-4'>
          <Learnmore />
          <SignUp />
        </div>
      </div>
     
    </div>
  );
};

export default Home;
