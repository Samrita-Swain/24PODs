import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const MemberForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4wdm6ur', 'template_bcoje3z', form.current, {
        publicKey: 'QqczI38sL9rl5jExp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="form-container memberform">
      <div className="text-section">
      <img src="images/join-us.png" alt="" />
      </div>
      <form ref={form} onSubmit={sendEmail} className="member-form">
        <div className="row">
          <div className="input-group">
            <label>Full Name<span>*</span></label>
            <input type="text" name="form_name" required />
          </div>
          <div className="input-group">
            <label>Company's Name<span>*</span></label>
            <input type="text" name="form_company" required />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>Email Id<span>*</span></label>
            <input type="email" name="form_email" required />
          </div>
          <div className="input-group">
            <label>Phone No<span>*</span></label>
            <input type="tel" name="form_phoneno" required />
          </div>
        </div>
        <div className="input-group full-width">
          <label>Messages</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit" className="button menu-button mt-6 help-button memberform-btn">Submit</button>
      </form>
    </div>
  );
};
