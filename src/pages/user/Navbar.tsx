import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navItems as defaultNavItems } from '../../data/data'; 
import logo from "../../assets/Hero section/LOGO_SK-removebg-preview.png";
import { SignUp } from '../../components/ui/buttons';
import { useAuth } from '../../Auth/AuthContext';
import { FaCalendarAlt, FaHandsHelping, FaHome, FaInfoCircle, FaNewspaper, FaUserShield } from 'react-icons/fa';

interface NavItem {
  name: string;
  id: string;
}

const Navbar = () => {
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const { user, signOut, openAuthModal } = useAuth();

  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    setIsAdminLoggedIn(Boolean(user));
  }, [user]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth >= 768 ? 75 : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleAdminLogout = async () => {
    await signOut();
    navigate('/');
  };

  const navItems: NavItem[] = [
    ...defaultNavItems,
    ...(isAdminLoggedIn ? [{ name: 'Admin', id: 'admin' }] : []),
  ];

  const handleNavItemClick = (item: NavItem) => {
    if (item.id === 'admin') {
      navigate('/admin');
    } else {
      if (location.pathname === '/admin') {
        navigate('/');
      } else {
        scrollToSection(item.id);
      }
    }
  };

  const mobileNavItems = [
    { name: 'Home', id: 'home', icon: FaHome },
    { name: 'About', id: 'AboutUs', icon: FaInfoCircle },
    { name: 'Services', id: 'service', icon: FaHandsHelping },
    { name: 'News', id: 'newsletter', icon: FaNewspaper },
    { name: 'Events', id: 'events', icon: FaCalendarAlt },
  ];

  return (
    <>
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setIsAdminModalOpen(false)}>
          <div className="rounded-xl bg-white p-6 shadow-xl" onClick={(event) => event.stopPropagation()}>
            <p className="mb-4 text-slate-700">Use the sign-in form to access the admin area.</p>
            <button type="button" onClick={() => { setIsAdminModalOpen(false); openAuthModal(); }} className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white">
              Sign in
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white fixed top-auto bottom-0 md:top-0 md:bottom-auto w-full z-30 flex items-center justify-between h-[68px] md:h-[75px] px-3 md:p-4 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:shadow-md">
        {/* Left side */}
        <div className="hidden md:flex items-center">
            <img
                src={logo}
                alt="Logo"
                className="cursor-pointer h-12 md:h-16"
                onClick={() => scrollToSection('home')}
            />
        </div>

        {/* Right side */}
        <div className="flex w-full items-center md:w-auto">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4">
                <ul className="flex items-center space-x-4 md:space-x-8">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="text-black font-bold cursor-pointer font-serif hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900 hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out"
                            onClick={() => handleNavItemClick(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-4">
                    <SignUp transparent />
                    {isAdminLoggedIn ? (
                        <button
                            onClick={handleAdminLogout}
                            className="flex items-center bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
                        >
                            <FaUserShield className="mr-2" /> Log Out
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsAdminModalOpen(true)}
                            className="flex items-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                        >
                            <FaUserShield className="mr-2" /> Admin
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Bottom Nav */}
            <div className="flex md:hidden w-full items-center justify-around gap-1">
              {mobileNavItems.map(({ name, id, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  className="flex min-w-0 flex-1 flex-col items-center gap-1 py-1 text-[10px] font-semibold text-gray-600 transition-colors hover:text-blue-700"
                  aria-label={name}
                  onClick={() => handleNavItemClick({ name, id })}
                >
                  <Icon className="text-base" aria-hidden="true" />
                  <span className="truncate">{name}</span>
                </button>
              ))}
            </div>
        </div>
    </nav>


      {/* Add padding to the top of the main content to avoid overlap with the fixed navbar */}
      <div className="hidden md:block md:h-[75px]">
        {/* The rest of your app content will go here */}
      </div>
    </>
  );
};

export default Navbar;
