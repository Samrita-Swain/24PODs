import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      {/* ✅ Top section with links */}
      <div className="bg-white py-3 border-top">
        <Container>
          <Row className="text-center">
            <Col xs={4} md={2} className="mb-2">
              <a href="/about_us" className="fw-bold text-dark text-decoration-none">
                About Us
              </a>
            </Col>
            <Col xs={4} md={2} className="mb-2">
              <a href="/how_can_we_help" className="fw-bold text-dark text-decoration-none">
                How can we Help?
              </a>
            </Col>
            <Col xs={4} md={2} className="mb-2">
              <a href="/be_our_guest" className="fw-bold text-dark text-decoration-none">
                Be Our Guest
              </a>
            </Col>
            <Col xs={4} md={2} className="mb-2">
              <a href="/gallery" className="fw-bold text-dark text-decoration-none">
                Gallery
              </a>
            </Col>
            <Col xs={4} md={2} className="mb-2">
              <a href="/our_portfolio" className="fw-bold text-dark text-decoration-none">
                Our Portfolio
              </a>
            </Col>
            <Col xs={4} md={2} className="mb-2">
              <a href="/contact_us" className="fw-bold text-dark text-decoration-none">
                Contact Us
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ✅ Bottom section */}
     <div className="footer-bottom text-center">
        <p>
          © 2025 <span className="brand">24PODS</span> | All rights reserved | 
          Developed by <a
    href="https://digiware.com.au/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#fff", textDecoration: "none" }}
  >
    Digiware Digital</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
