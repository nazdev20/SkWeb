import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navItems as defaultNavItems } from '../../data/data'; 
import logo from "../../assets/Hero section/LOGO_SK-removebg-preview.png";
import { SignUp } from '../../components/ui/buttons';
import { FaUserShield } from 'react-icons/fa';

interface NavItem {
  name: string;
  id: string;
}

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdminLoggedIn');
    setIsAdminLoggedIn(adminStatus === 'true');
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 75; // Adjusted offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    if (isSidebarOpen) {
      handleSidebarToggle();
    }
  };

  const handleAdminLogin = () => {
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL || 'defaultEmail';
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || 'defaultPassword';

    if (email === adminEmail && password === adminPassword) {
      setError('');
      setIsAdminModalOpen(false);
      setIsAdminLoggedIn(true);
      localStorage.setItem('isAdminLoggedIn', 'true');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('isAdminLoggedIn');
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
    if (isSidebarOpen) {
      handleSidebarToggle(); // Close sidebar on nav item click
    }
  };

  return (
    <>
      {/* Admin Login Modal */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isAdminModalOpen ? 'block' : 'hidden'}`}>
        {/* ... modal content ... */}
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="w-64 h-full bg-gradient-to-r from-[#e3f9ff] to-[#b5e8ff] p-4 relative flex flex-col">
          <button className="text-black font-bold text-2xl self-end" onClick={handleSidebarToggle}>
            &times;
          </button>
          <ul className="mt-12 flex flex-col space-y-4">
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
          <div className="mt-8">
            <SignUp transparent />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white p-4 fixed w-full z-30 flex items-center justify-between h-[75px]">
        {/* Left side */}
        <div className="flex items-center">
            <img
                src={logo}
                alt="Logo"
                className="cursor-pointer h-12 md:h-16"
                onClick={() => scrollToSection('home')}
            />
        </div>

        {/* Right side */}
        <div className="flex items-center">
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

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
                <button
                    className="text-black font-bold text-2xl"
                    aria-label="Open Sidebar"
                    onClick={handleSidebarToggle}
                >
                    ☰
                </button>
            </div>
        </div>
    </nav>


      {/* Add padding to the top of the main content to avoid overlap with the fixed navbar */}
      <div className="pt-[75px]">
        {/* The rest of your app content will go here */}
      </div>
    </>
  );
};

export default Navbar;
