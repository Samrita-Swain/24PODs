import './App.css';
import Footer from './Footer'; 
import Header from './Header';
import About from './pages/About';
import Help from './pages/Help';
import Home from './pages/Home';
import Guest from './pages/Guest';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Gallery from './pages/Gallery';
import FormReality from './pages/FormReality';
import ContactUs from './pages/ContactUs';
import OurPortfollio from "./pages/OurPortfollio";
import ScrollToTopButton from './pages/ScrollToTopButton';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/how_can_we_help" element={<Help />} />
          <Route path="/be_our_guest" element={<Guest />} />
          <Route path="/become_a_member" element={<Welcome />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/inspire_from_reality" element={<FormReality />} />
          <Route path="/our_portfolio" element={<OurPortfollio />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton /> 
    </>
  );
}

export default App;
