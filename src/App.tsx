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


function UserPageLayout() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
        <HomeSection />
      </div>
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
    </>
  )
}

function App() {
  return (
    <Router basename='/SkWeb'>
      <AuthProvider>
        <Routes>
          <Route path="/admin" element={<Main />} />
          <Route path="*" element={<UserPageLayout />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
