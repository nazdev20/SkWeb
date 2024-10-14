import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
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
  const location = useLocation(); // Get the current location

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
      const offset = 60;
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
        navigate('/'); // Redirect to home if currently on /admin
      } else {
        scrollToSection(item.id);
      }
    }
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isAdminModalOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
          <h2 className="text-lg font-bold mb-4">Admin Log In</h2>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            placeholder="Email/Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 w-full mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <button
            onClick={handleAdminLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Log In
          </button>
          <button
            onClick={() => setIsAdminModalOpen(false)}
            className="mt-2 text-gray-500 underline w-full text-left"
          >
            Close
          </button>
        </div>
      </div>

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
                onClick={() => handleNavItemClick(item)} // Use the new handler
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
            aria-label="Open Sidebar"
            onClick={handleSidebarToggle}
          >
            ☰
          </button>
        </div>
        <ul className="hidden md:flex flex-row space-x-4 md:gap-32 mt-4 md:mt-0 justify-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-black font-bold cursor-pointer font-serif hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900 hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out"
              onClick={() => handleNavItemClick(item)} // Use the new handler
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <SignUp transparent />
          {isAdminLoggedIn ? (
            <button
              onClick={handleAdminLogout}
              className="flex items-center bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
            >
              <FaUserShield className="mr-2" />
              Log Out
            </button>
          ) : (
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="flex items-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              <FaUserShield className="mr-2" />
              Admin
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
