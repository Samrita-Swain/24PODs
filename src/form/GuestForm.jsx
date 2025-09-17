import React from "react";
import illustration from "/images/choose-us.png"; // Adjust path accordingly

const GuestForm = () => {
  return (
    <section className="guest-form container-fluid py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Illustration (hidden on small screens) */}
          <div className="col-lg-5 d-none d-lg-block text-center">
            <img
              src={illustration}
              alt="Guest Illustration"
              className="img-fluid max-img-width"
            />
          </div>

          {/* Right Form */}
          <div className="col-lg-7">
            <form className="bg-form p-2 p-md-2">
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="form-label">Full name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Business name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Your expertise & experience <span className="text-danger">*</span></label>
                <textarea className="form-control" rows="4" required></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Link to last few podcast where you were guest <span className="text-danger">*</span></label>
                <input type="url" className="form-control" placeholder="https://example.com/episode" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Any awards (PDF, max 2 MB)</label>
                <input type="file" className="form-control" accept=".pdf" />
              </div>

              <div className="mb-3">
                <label className="form-label">Why us?</label>
                <textarea className="form-control" rows="3" placeholder="Why would you like to be our guest?"></textarea>
              </div>

              <button type="submit" className="button">Submit</button>

              <p className="privacy-note small mt-3 d-flex align-items-center">
                <span className="me-2">🔒</span> We respect your privacy — no spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestForm;
