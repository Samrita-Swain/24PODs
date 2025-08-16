import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <a href="/aboutus">About Us</a>
        <a href="/how_can_we_help">How can we Help?</a>
        <a href="/be_our_guest">Be Our Guest</a>
        <a href="/gallery">Gallery</a>
        <a href="/our_portfolio">Our Portfolio</a>
        <a href="/contact_us">Contact us</a>
      </div>
      <div className="footer-bottom">
        <p>
  © 2025 24PODS &nbsp;|&nbsp; All rights reserved &nbsp;|&nbsp; Developed by{" "}
  <a
    href="https://digiware.com.au/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#fff", textDecoration: "none" }}
  >
    Digiware Digital
  </a>
</p>


      </div>
    </footer>
  );
};

export default Footer;
