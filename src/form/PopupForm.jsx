import React from "react";

const PopupForm = ({ show, handleClose }) => {
  if (!show) return null; // hide when not active

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Close Button */}
        <button className="popup-close" onClick={handleClose}>
          ✖
        </button>

        <h4 className="popup-title">Let's turn ideas into impact 🚀</h4>
        <p className="popup-subtitle">
          Your content shouldn't just exist—it should connect, convert, and
          create impact. Let's make it happen.  
          <strong> Book your free strategy call today</strong> and see how we
          can take your idea from concept to clicks.
        </p>

        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Name *</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Business name *</label>
              <input type="text" className="form-control" required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Link to last few podcast where you were guest *
            </label>
            <input
              type="url"
              className="form-control"
              placeholder="https://example.com/your-episode"
              required
            />
            <small className="text-muted">
              Only a valid http/https link is accepted.
            </small>
          </div>

          <div className="mb-3">
            <label className="form-label">Any awards (PDF, max 2MB)</label>
            <input type="file" className="form-control" accept=".pdf" />
          </div>

          <div className="mb-3">
            <label className="form-label">Your expertise & experience</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Tell us a bit about your expertise & experience…"
            />
          </div>

          <button type="submit" className="popup-submit-btn w-100">
            Request My Free Call
          </button>
          <p className="popup-privacy text-center mt-2">
            🔒 We respect your time & privacy. No spam—ever.
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
