import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section>
        <div className="contact-banner d-flex align-items-center justify-content-center text-center">
      <h1 className="contact-title">Contact Us</h1>
    </div>
    <div className="container my-5 contact-section">
      <div className="row g-4">
        {/* Left Side - Contact Form */}
        <div className="col-lg-6">
          <form className="p-4 shadow rounded bg-white">
            <div className="mb-3">
              <label className="form-label">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email Id <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Phone No <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Messages</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn submit-btn w-100">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info & Map */}
        <div className="col-lg-6 d-flex flex-column">
          <div className="p-4 shadow rounded bg-white mb-4">
            <div className="d-flex align-items-start mb-3">
              <FaMapMarkerAlt className="icon me-3" />
              <p className="mb-0">
                Level 5 Nexus Norwest, 4 Columbia Ct, Norwest NSW 2153
              </p>
            </div>

            <div className="d-flex align-items-start mb-3">
              <FaPhoneAlt className="icon me-3" />
              <p className="mb-0">+61 416 461 094</p>
            </div>

            <div className="d-flex align-items-start">
              <FaEnvelope className="icon me-3" />
              <p className="mb-0">
                <a href="mailto:alaka.satapathy@digiware.com.au">
                  alaka.satapathy@digiware.com.au
                </a>
              </p>
            </div>
          </div>

          <div className="map-container shadow rounded overflow-hidden">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.313457807471!2d150.96679291103663!3d-33.73103701182477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a125c75960f9%3A0xce03c721c2c66e0e!2sServcorp%20-%20Nexus%20Norwest!5e1!3m2!1sen!2sin!4v1757569780679!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
