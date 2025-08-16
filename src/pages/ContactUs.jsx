import React from 'react'
import { ContactUsForm } from './form/ContactUsForm';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <div>
      <div className="contactus-first">
        <div className="content" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "0" }}>Contact us</h1>
          <p>Your content shouldn’t just exist—it should connect, convert, and create impact. Let’s make it happen.</p>
        </div>
      </div>
      <div className="contact-wrapper">
        {/* <p>Book your free strategy call today and see how we can take your idea from concept to clicks.”</p> */}
        <ContactUsForm />
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Lorem Ipsum is simply dummy text</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+91 987654321</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>loremIpsum@gmail.com</p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.024902341167!2d-77.03687058464949!3d38.9071922795707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b9b9d70a7e17%3A0x90f47052d5a82c12!2sWhite%20House!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="150"
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
  )
}

export default ContactUs




