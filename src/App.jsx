import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import PopupForm from "./form/PopupForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutUs from "./pages/About_us";
import Help from "./pages/Help";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Guest from "./pages/Guest";
import Member from "./pages/Member";
import Reality from "./pages/Reality";
import Gallery from "./pages/Gallery";
import OurPotfolio from "./pages/OurPotfolio";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./pages/ScrollToTopButton";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      {/* ✅ Header must be inside Router */}
      <Header onOpenForm={() => setShowModal(true)} />

      <main className="main-content">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/how_can_we_help" element={<Help />} />
        <Route path="/be_our_guest" element={<Guest />} />
        <Route path="/become_a_member" element={<Member />} />
        <Route path="/inspire_from_reality" element={<Reality />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our_portfolio" element={<OurPotfolio />} />
        <Route path="/contact_us" element={<Contact />} />
      </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />

      {/* ✅ Popup Form */}
      <PopupForm show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  );
}

export default App;
