import { useState } from 'react';
import { navItems } from '../../data/data';
import { SignUp } from '../../components/ui/buttons';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isSidebarOpen) {
      handleSidebarToggle();
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="w-64 h-full bg-gradient-to-r from-[#e3f9ff] to-[#b5e8ff] p-4 relative flex flex-col">
          <button
            className="text-black font-bold text-2xl self-end"
            onClick={handleSidebarToggle}
          >
            &times;
          </button>
          <ul className="mt-12 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-black font-bold cursor-pointer font-serif
                hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900
                hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <SignUp />
          </div>
        </div>
      </div>

      <nav className="bg-white p-4 fixed w-full z-30 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center w-full md:w-auto">
          <h1
            className="text-2xl font-bold cursor-pointer text-black font-serif
            hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900
            hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out"
            onClick={() => scrollToSection('home')}
          >
           Logo
          </h1>
          <button
            className="md:hidden text-black font-bold text-2xl ml-auto"
            onClick={handleSidebarToggle}
          >
            ☰
          </button>
        </div>
        <ul className="hidden md:flex flex-row space-x-4 md:justify-center md:gap-11 mt-4 md:mt-0">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-black font-bold cursor-pointer font-serif
              hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900
              hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="hidden md:block mt-4 md:mt-0">
          <SignUp />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
