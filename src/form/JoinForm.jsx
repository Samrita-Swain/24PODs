import React from 'react';

const JoinForm = () => {
  return (
    <section className="join-form-section">
      <div className="join-form-container">
        {/* Left Illustration */}
        <div className="join-image">
          <img src="images/join-us.png" alt="Join Us Illustration" />
        </div>

        {/* Right Form */}
        <form className="form-content">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name <span>*</span></label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company’s Name <span>*</span></label>
              <input type="text" id="companyName" name="companyName" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Id <span>*</span></label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No <span>*</span></label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Messages</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default JoinForm;
