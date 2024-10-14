import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/user/Navbar';
import Home from './pages/user/Home';
import Service from './pages/user/Service';
import Newsletter from './pages/user/NewsLetter';
import Events from './pages/user/Events';
import InvolvementPage from './pages/user/Involvementpage';
import { AuthProvider } from './Auth/AuthContext';
import FloatingChatButton from './components/buttons/floatingbutton';
import 'leaflet/dist/leaflet.css';

import Main from './pages/admin/main';
import HomeSection from './components/ui/pages/HomeSection';


import FAQPage from './pages/user/faq';
import Footer from './pages/user/Footer';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/events" element={<Events />} />
          <Route path="/involvement" element={<InvolvementPage />} />
          <Route
            path="/admin"
            element={
           
                <Main />
           
            }
          />
        </Routes>

        
        <div id="home">
          <Home/>
        
        </div>
          <HomeSection />
        <div id="service">
          <Service />
        </div>
        <div id="newsletter">
          <Newsletter />
        </div>
        <div id="events">
          <Events />
        </div>
        <InvolvementPage />
        
        <FloatingChatButton />
        <FAQPage />
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
