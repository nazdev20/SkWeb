import { useState } from 'react';

import { navItems } from '../../data/data';
import logo from "../../assets/Hero section/LOGO_SK-removebg-preview.png";
import { SignUp } from '../../components/ui/buttons';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (isSidebarOpen) {
      handleSidebarToggle();
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
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
        </div>
      </div>

      <nav className="bg-white p-4 fixed w-full z-30 flex flex-col md:flex-row items-center justify-between max-h-[75px]">
        <div className="flex items-center w-full justify-center md:w-auto md:justify-start">
          <img
            src={logo}
            alt="Logo"
            className="cursor-pointer max-w-[150px] max-h-[70px] md:max-w-[200px] md:max-h-[90px] mr-6 transition duration-300 ease-in-out"
            onClick={() => scrollToSection('home')}
          />
          <button
            className="md:hidden text-black font-bold text-2xl ml-auto"
            onClick={handleSidebarToggle}
          >
            ☰
          </button>
        </div>
        <ul className="hidden md:flex flex-row space-x-4 md:gap-32 mt-4 md:mt-0 justify-center">
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
        <SignUp/>
      </nav>
    </>
  );
};

export default Navbar;
