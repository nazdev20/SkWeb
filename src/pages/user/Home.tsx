import { Learnmore, SignUp } from '../../components/ui/buttons';
import HomeSection from '../../components/ui/pages/HomeSection';

const Home = () => {
  return (
    <>
      <div
        className='flex flex-col items-center justify-center h-[700px] w-full bg-blue-800 bg-cover bg-center'
        style={{
          backgroundImage: `url('https://drive.google.com/uc?export=view&id=1xgFizWI1H0W1V3rPTiSr3AsB4Lx6KBIg')`
        }}
      >
        <div className='mb-4 text-center'>
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
      <HomeSection />
    </>
  );
};

export default Home;
