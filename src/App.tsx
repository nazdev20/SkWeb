// App.tsx
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




function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/events" element={<Events />} />
          <Route path="/involvement" element={<InvolvementPage />} />
          <Route path="/main" element={<Main />}/>
        </Routes>
        <div id="home">
          <Home />
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
        <InvolvementPage/>
        <FloatingChatButton /> 
        <Main/>
    
       
        
      </Router>
    </AuthProvider>
  );
}

export default App;
