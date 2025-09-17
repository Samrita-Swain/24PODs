import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Header = ({ onOpenForm }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ Navbar */}
      <header className="custom-navbar">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="logo-box d-flex align-items-center">
            <a href="/">
              <img
                src="/images/24Pods-Logo_transparent.png"
                alt="Logo"
                className="logo-img"
              />
            </a>
          </div>

          <div className="d-flex align-items-center">
            {/* ✅ CTA button in header (desktop only) */}
            {!menuOpen && (
              <Button
                className="cta-btn-header bounce-btn me-3 d-none d-md-block"
                onClick={onOpenForm}
              >
                Don’t Just Talk. Get Heard
              </Button>
            )}

            {/* ✅ Hamburger / Close button */}
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <RxCross2 size={28} /> : <GiHamburgerMenu size={28} />}
            </button>
          </div>
        </Container>
      </header>

      {/* ✅ Fullscreen Menu */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="overlay-links">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about_us" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="/how_can_we_help" onClick={() => setMenuOpen(false)}>How can we Help?</a>
          <a href="/be_our_guest" onClick={() => setMenuOpen(false)}>Be Our Guest</a>
          <a href="/become_a_member" onClick={() => setMenuOpen(false)}>Become A Member</a>
          <a href="/inspire_from_reality" onClick={() => setMenuOpen(false)}>Inspire From Reality</a>
          <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="/our_portfolio" onClick={() => setMenuOpen(false)}>Our Portfolio</a>
          <a href="/contact_us" onClick={() => setMenuOpen(false)}>Contact Us</a>

          {/* CTA inside menu */}
          {menuOpen && (
            <Button
              className="cta-btn-overlay bounce-btn mt-4"
              onClick={() => {
                setMenuOpen(false);
                onOpenForm();
              }}
            >
              Don’t Just Talk. Get Heard
            </Button>
          )}
        </nav>

        {/* ✅ Social Icons */}
        <div className="menu-social">
          <a href="https://www.facebook.com/profile.php?id=61579069562747" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          <a href="https://www.instagram.com/24pods1?utm_source=qr&igsh=MWw1d21lMHJkNmJqcQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </>
  );
};

export default Header;
