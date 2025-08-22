import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {


  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [statusMsg, setStatusMsg] = useState("");
  const [fileError, setFileError] = useState("");
  const [urlError, setUrlError] = useState("");

  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const awardsRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // SETTINGS — tweak as needed
  const MAX_PDF_SIZE_BYTES = 2 * 1024 * 1024; // 2 MB limit for "Any awards" PDF

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus the modal when opened
  useEffect(() => {
    if (open && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [open]);

  // Helpers
  const isValidHttpUrl = (value) => {
    try {
      const u = new URL(value);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  };

  const handlePdfChange = (e) => {
    setFileError("");
    const file = e.target.files?.[0];
    if (!file) return; // optional field

    // Type check
    if (file.type !== "application/pdf") {
      setFileError("Only PDF files are allowed.");
      e.target.value = ""; // clear
      return;
    }
    // Size check
    if (file.size > MAX_PDF_SIZE_BYTES) {
      setFileError(`PDF must be ≤ ${Math.round(MAX_PDF_SIZE_BYTES / 1024 / 1024)} MB.`);
      e.target.value = ""; // clear
      return;
    }
  };

  const handleUrlInput = (e) => {
    setUrlError("");
    const v = e.target.value.trim();
    if (!v) return;
    if (!isValidHttpUrl(v)) {
      setUrlError("Enter a valid http/https link only.");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    setStatusMsg("");

    // Validate URL field strictly
    const linkValue = formRef.current?.user_podcast_link?.value?.trim();
    if (!isValidHttpUrl(linkValue)) {
      setSending(false);
      setStatus("error");
      setStatusMsg("Please provide a valid http/https podcast link.");
      return;
    }

    // Validate file again before submit (in case of manual bypass)
    const file = awardsRef.current?.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setSending(false);
        setStatus("error");
        setStatusMsg("The awards file must be a PDF.");
        return;
      }
      if (file.size > MAX_PDF_SIZE_BYTES) {
        setSending(false);
        setStatus("error");
        setStatusMsg(`The awards PDF must be ≤ ${Math.round(MAX_PDF_SIZE_BYTES / 1024 / 1024)} MB.`);
        return;
      }
    }

    try {
      const SERVICE_ID = "service_4wdm6ur"; // <- your actual service id
      const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // <- replace
      const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // <- replace

      // NOTE: EmailJS sendForm will include file inputs automatically as attachments
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus("success");
      setStatusMsg("✅ Thanks! We’ll reach out shortly to schedule your call.");
      formRef.current.reset();
      setFileError("");
      setUrlError("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMsg("❌ Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };
  // Modal JSX to portal — high z-index so it sits above everything
  const ModalPortal = () =>
    createPortal(
      <div
        className="modal-backdrop"
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "clamp(12px, 3vw, 28px)",
          background: "radial-gradient(1200px 800px at 50% 50%, rgba(0,0,0,.6), rgba(0,0,0,.9))",
          backdropFilter: "blur(6px)",
          zIndex: 99999, // VERY high so it sits above menu
          overflow: "auto",
        }}
      >
        <div
          className="modal-card"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cta-title"
          aria-describedby="cta-desc"
          ref={dialogRef}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            width: "min(940px, 100%)",
            borderRadius: "18px",
            background: "#261542",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 30px 120px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.04)",
            color: "#f5f7fb",
            padding: "clamp(16px, 3vw, 28px)",
            marginBlock: "clamp(12px, 4vh, 28px)",
            maxHeight: "calc(100vh - 2 * clamp(12px, 4vh, 28px))",
            overflowY: "auto",
            overscrollBehavior: "contain",
          }}
        >
          <button
            className="close-x"
            aria-label="Close"
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              fontSize: 18,
            }}
          >
            ✕
          </button>

          <div className="modal-header" style={{ marginBottom: 14, paddingRight: 40 }}>
            <h2 id="cta-title" style={{ margin: 0, color: "#e0afff" }}>
              Let's turn ideas into impact 🚀
            </h2>
            <p id="cta-desc" style={{ margin: 0, color: "rgba(215, 231, 255, 0.9)" }}>
              Your content shouldn’t just exist—it should connect, convert, and create impact. Let’s make it happen.
              <br />
              <strong>📅 Book your free strategy call today</strong> and see how we can take your idea from concept to clicks.
            </p>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={onSubmit} className="form" noValidate>
            <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
              <label className="field" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ color: "#d7def3" }}>Name</span>
                <input name="user_name" type="text" placeholder="Your full name" required style={inputStyle} />
              </label>

              <label className="field" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ color: "#d7def3" }}>Business name</span>
                <input name="user_business_name" type="text" placeholder="Your business name" required style={inputStyle} />
              </label>

              <label className="field full" style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ color: "#d7def3" }}>Link to last few podcast where you were guest</span>
                <input
                  name="user_podcast_link"
                  type="url"
                  inputMode="url"
                  placeholder="https://example.com/your-episode"
                  onInput={handleUrlInput}
                  required
                  style={inputStyle}
                />
                {urlError && <small style={{ color: "#ff9aa5" }}>{urlError}</small>}
                <small style={{ color: "#aeb7c7" }}>Only a valid http/https link is accepted.</small>
              </label>

              <label className="field full" style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ color: "#d7def3" }}>Any awards (PDF, max {Math.round(MAX_PDF_SIZE_BYTES / 1024 / 1024)}MB)</span>
                <input
                  ref={awardsRef}
                  name="awards_pdf"
                  type="file"
                  accept="application/pdf"
                  onChange={handlePdfChange}
                  style={{ padding: 8, background: "rgba(255,255,255,0.03)", borderRadius: 8 }}
                />
                {fileError && <small style={{ color: "#ff9aa5" }}>{fileError}</small>}
              </label>
            </div>

            <label className="field" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ color: "#d7def3" }}>Your expertise & experience</span>
              <textarea name="message" rows={4} placeholder="Tell us a bit about your expertise & experience …" style={textareaStyle} />
            </label>

            <button
              className="submit-btn"
              type="submit"
              disabled={sending}
              style={{
                marginTop: 6,
                padding: "12px 18px",
                borderRadius: 12,
                border: "none",
                fontWeight: 700,
                color: "#fff",
                background: "linear-gradient(90deg,#8a1253,#b80066)",
                cursor: "pointer",
              }}
            >
              {sending ? "Sending…" : "Request My Free Call"}
            </button>

            {status && (
              <p style={{ marginTop: 8, color: status === "success" ? "#5be49b" : "#ff6b6b" }}>{statusMsg}</p>
            )}

            <p style={{ marginTop: 6, color: "#9aa3b2", fontSize: ".85rem" }}>🔒 We respect your time & privacy. No spam—ever.</p>
          </form>
        </div>
      </div>,
      document.body
    );

  // basic inline styles reused
  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    color: "#f5f7fb",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 12,
    padding: "12px 14px",
    outline: "none",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: 110,
    resize: "vertical",
  };


  return (
    <header className="header w-full flex justify-between items-center bg-white shadow-md fixed top-0 z-50 px-6 py-4">
      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img src="/images/24Pods-Logo_transparent.png" alt="Logo" className="logo w-12 h-auto" />
        </a>
      </div>

      {/* Right Section */}
      <div className="header-right-side flex items-center gap-4">
        {/* Conditionally render Join Us button only when menu is closed */}
        {!menuOpen && (
          <button className="cta-btn header-cta" onClick={() => setOpen(true)}>
            <span className="sparkle" aria-hidden />
            Don’t Just Talk. Get Heard
          </button>
        )}

        {open && (
          <div className="modal-backdrop" onClick={() => setOpen(false)}>
            {/* Modal Card */}
            <div
              className="modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cta-title"
              aria-describedby="cta-desc"
              ref={dialogRef}
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button className="close-x" aria-label="Close" onClick={() => setOpen(false)}>
                ✕
              </button>

              <div className="modal-header">
                {/* <div className="badge">FREE CALL</div> */}
                <h2 id="cta-title" style={{ color: "#e0afff" }}>
                  Let's turn ideas into impact 🚀
                </h2>
                <p id="cta-desc" className="lede">
                  Your content shouldn’t just exist—it should connect, convert, and create impact. Let’s make it happen.
                  <br />
                  <strong>📅 Book your free strategy call today</strong> and see how we can take your idea from concept to clicks.
                </p>
              </div>

              <form ref={formRef} onSubmit={onSubmit} className="form" noValidate>
                <div className="grid">
                  <label className="field">
                    <h1 style={{ margin: "0" }}><span>Name</span><span style={{ color: "#e10404", marginLeft: "5px" }}>*</span></h1>
                    <input name="user_name" type="text" placeholder="Your full name" required />
                  </label>

                  <label className="field">
                    <h1 style={{ margin: "0" }}><span>Business name</span><span style={{ color: "#e10404", marginLeft: "5px" }}>*</span></h1>
                    <input name="user_business_name" type="text" placeholder="Your business name" required />
                  </label>

                  <label className="field full">
                    <h1 style={{ margin: "0" }}><span>Link to last few podcast where you were guest</span><span style={{ color: "#e10404", marginLeft: "5px" }}>*</span></h1>
                    <input
                      name="user_podcast_link"
                      type="url"
                      inputMode="url"
                      placeholder="https://example.com/your-episode"
                      onInput={handleUrlInput}
                      required
                    />
                    {urlError && <small className="hint error">{urlError}</small>}
                    <small className="hint">Only a valid http/https link is accepted.</small>
                  </label>

                  <label className="field full">
                    <h1 style={{ margin: "0" }}><span>Any awards (PDF, max {Math.round(MAX_PDF_SIZE_BYTES / 1024 / 1024)}MB)</span></h1>
                    <input
                      ref={awardsRef}
                      name="awards_pdf" // EmailJS will attach this file to the email
                      type="file"
                      accept="application/pdf"
                      onChange={handlePdfChange}
                      style={{ cursor: "pointer" }}

                    />
                    {fileError && <small className="hint error">{fileError}</small>}
                  </label>
                </div>

                <label className="field">
                  <h1 style={{ margin: "0" }}><span>Your expertise & experience</span></h1>
                  <textarea name="message" rows={4} placeholder="Tell us a bit about your expertise & experience …" />
                </label>

                <button className="submit-btn" type="submit" disabled={sending}>
                  {sending ? "Sending…" : "Request My Free Call"}
                </button>

                {status && (
                  <p className={`status ${status === "success" ? "success" : "error"}`} role={status === "success" ? "status" : "alert"}>
                    {statusMsg}
                  </p>
                )}

                <p className="assurance">🔒 We respect your time & privacy. No spam—ever.</p>
              </form>

              <div className="glow" aria-hidden />
            </div>
          </div>
        )}

        {/* Hamburger / Cross toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="Hamburger text-xl">
          {menuOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="openmenu fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-6">
          {/* Menu Items */}
          <nav className="menu flex flex-col items-center gap-5 text-lg font-semibold text-black">
            <a href="/">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/how_can_we_help">How can we Help?</a>
            <a href="/be_our_guest">Be Our Guest</a>
            <a href="/become_a_member">Become A Member</a>
            <a href="/inspire_from_reality">Inspire From Reality</a>
            <a href="/gallery">Gallery</a>
            <a href="/our_portfolio">Our Portfolio</a>
            <a href="/contact_us">Contact Us</a>
          </nav>

          {/* Join Us Button inside the menu */}
          <button className="cta-btn" onClick={() => { setMenuOpen(false); setOpen(true); }}>
            <span className="sparkle" aria-hidden />
            Book Free Call
          </button>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      )}

      {/* Inline styles (move to external CSS if you want) */}
      <style>{`
        /* Reset box sizing so paddings don't cause overflow */
        * { box-sizing: border-box; }

        :root{
          --bg: #0b0b12;
          --text: #f5f7fb;
          --muted: #b7b9c3;
          --brand1: #8a5cff;
          --brand2: #00e2ff;
          --accent: #20e3b2;
          --card: rgba(255,255,255,0.06);
          --border: rgba(255,255,255,0.12);
        }

        /* CTA Button */
        .cta-btn{
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          padding: clamp(.7rem, 1.2vw, .95rem) clamp(.9rem, 2vw, 1.2rem);
          border-radius: 12px;
          font-weight: 700;
          letter-spacing: .3px;
          background:#660033;
          color: white;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(138,92,255,.18);
          transform: translateZ(0);
          transition: transform .15s ease, box-shadow .15s ease;
          isolation: isolate;
        }
        .cta-btn:hover{ background:#e0afff; color:#000; }
        

        /* Backdrop */
        .modal-backdrop{
          position: fixed; inset: 0;
          display: flex; justify-content: center; align-items: flex-start;
          background: radial-gradient(1200px 800px at 50% 50%, rgba(0,0,0,.6), rgba(0,0,0,.9));
          -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
          padding: clamp(12px, 3vw, 28px);
          z-index: 50; animation: fadeIn .2s ease;
          overflow: auto; /* allow body scroll inside backdrop */
        }
        @keyframes fadeIn{ from{ opacity:0 } to{ opacity:1 } }

        /* Modal Card */
        .modal-card{
          position: relative;
          width: min(940px, 100%);
          border-radius: 18px;
          background: #261542;
          border: 1px solid var(--border);
          box-shadow: 0 30px 120px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.04);
          color: var(--text);
          padding: clamp(16px, 3vw, 28px);
          margin-block: clamp(12px, 4vh, 28px);
          max-height: calc(100vh - 2 * clamp(12px, 4vh, 28px));
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        @supports (height: 100dvh) {
          .modal-card{ max-height: calc(100dvh - 2 * clamp(12px, 4vh, 28px)); }
        }

        .glow{ position:absolute; inset:-2px; border-radius:20px; pointer-events:none;
          background: radial-gradient(800px 800px at 20% 0%, rgba(138,92,255,.12), transparent 40%),
                      radial-gradient(600px 500px at 100% 100%, rgba(0,226,255,.08), transparent 40%);
          filter: blur(20px);
        }

        .close-x{ position:absolute; top:10px; right:10px; width:44px; height:44px; border-radius:12px;
          background: rgba(255,255,255,.04); border:1px solid var(--border); color:#fff; cursor:pointer;
          display:grid; place-items:center; font-size:18px; transition: background .15s ease, transform .08s ease; }
        .close-x:hover{ background: rgba(255,255,255,.08); }
        .close-x:active{ transform: scale(.98); }

        .modal-header{ display:flex; flex-direction:column; gap:10px; margin-bottom: 14px; padding-right: 40px; }
        .badge{ align-self:flex-start; padding:.3rem .55rem; border-radius:999px; font-size:.75rem; letter-spacing:.5px;
          background: linear-gradient(135deg, rgba(32,227,178,.12), rgba(138,92,255,.12)); color:#d7e7ff; border:1px solid var(--border);
        }
        .lede{ color: var(--muted); line-height: 1.5; margin: 0; }
        h2{ margin:0; font-size: clamp(1.1rem, 2vw + .4rem, 1.9rem); letter-spacing: .2px; }

        .form{ display:flex; flex-direction:column; gap:12px; }
        .grid{ display:grid; grid-template-columns: 1fr; gap:12px; align-items:start; }
        @media (min-width: 560px){ .grid{ grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px){ .grid{ gap: 16px; } }
        

        /* Each field should be allowed to shrink (fixes overlap) */
        .field{ display:flex; flex-direction:column; gap:8px; min-width: 0; }
        .field span{ font-size:.9rem; color:#d7def3; }
        .field input, .field textarea{
          width: 100%;
          background: var(--card); color: var(--text);
          border: 1px solid var(--border); border-radius: 12px; padding: 12px 14px;
          outline:none; transition: border .12s ease, box-shadow .12s ease;
          min-width: 0; /* critical to allow shrinking inside grid/flex */
        }
        .field input::placeholder, .field textarea::placeholder{ color:#9aa3b2; }
        .field input:focus, .field textarea:focus{
          border-color: rgba(138,92,255,.45);
          box-shadow: 0 0 0 6px rgba(138,92,255,.06);
        }

        /* full-width field spans both columns */
        .field.full{ grid-column: 1 / -1; }

        input[type="file"]{
          padding: 8px; background: rgba(255,255,255,.03); border-radius: 10px;
        }
        .hint{ font-size: .8rem; color: #aeb7c7; margin-top: 6px; display: block; }
        .hint.error{ color: #ff9aa5; }

        .submit-btn{
          margin-top: 6px; border:none; cursor:pointer; font-weight:700; letter-spacing:.3px;
          padding: 12px 18px; border-radius: 12px; color:#fff;
          background: linear-gradient(90deg,#8a1253,#b80066);
          transition: transform .12s ease, opacity .12s ease;
        }
        .submit-btn:hover{ transform: translateY(-2px); }
        .submit-btn:disabled{ opacity:.7; cursor:not-allowed; }

        .status{ margin: 8px 2px 0; font-size: .95rem; }
        .status.success{ color: #5be49b; }
        .status.error{ color: #ff6b6b; }
        .assurance{ margin: 6px 2px 0; color: #9aa3b2; font-size: .85rem; }

        /* Small tweaks on very narrow screens */
        @media (max-width: 420px){
          .modal-card{ padding: 14px; border-radius: 12px; }
          .close-x{ width:40px; height:40px; }
        }

        /* Nice lightweight scrollbars */
        .modal-card::-webkit-scrollbar{ width: 10px; }
        .modal-card::-webkit-scrollbar-thumb{ background: rgba(255,255,255,.08); border-radius: 10px; }
        .modal-card{ scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.12) transparent; }

      @keyframes smoothJump {
  0%   { transform: translateY(0); }
  20%  { transform: translateY(-12px); }
  40%  { transform: translateY(0); }
  60%  { transform: translateY(-6px); }
  80%  { transform: translateY(0); }
  100% { transform: translateY(0); }
}

.cta-btn {
  animation: smoothJump 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  will-change: transform;
}

/* optional: stop jumping on hover/focus */
.cta-btn:hover,
.cta-btn:focus { animation-play-state: paused; }

/* optional sparkle so the span does something */
.sparkle::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 12px;
  pointer-events: none;
  background: radial-gradient(180px 180px at 20% 0%, rgba(255,255,255,.15), transparent 60%),
              radial-gradient(160px 140px at 100% 100%, rgba(255,255,255,.08), transparent 60%);
  filter: blur(12px);
  animation: twinkle 2s linear infinite;
}
@keyframes twinkle {
  0%,100% { opacity: .6; }
  50%     { opacity: 1; }
}

/* accessibility */
@media (prefers-reduced-motion: reduce) {
  .cta-btn { animation: none; }
}

      `}</style>
    </header>
  );
};

export default Header;
