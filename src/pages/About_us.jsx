import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMicrophoneAlt, FaRegClone, FaRegStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  
   useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);

  return (
    <section>
      {/* Banner Section */}
      <div className="about-banner d-flex align-items-center justify-content-center text-center">
        <h1 className="about-title">About Us</h1>
      </div>

      {/* About Section */}
      <div className="about-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* Left - Images */}
            <Col lg={6} className="text-center mb-4 mb-lg-0">
              <div className="image-stack">
                <div className="main-circle">
                  <img src="/images/group-img.jpeg" alt="Team" className="img-fluid" data-aos="zoom-in"/>
                </div>
                <div className="experience-badge" data-aos="fade-right">
                  <div className="number">10+</div>
                  <div className="experience-content">Years of<br></br>Experience</div>
                </div>
                <div className="small-circle top-right">
                  <img src="/images/rachecl-garima-small.png" alt="Small1" className="img-fluid" data-aos="zoom-in"/>
                </div>
                <div className="small-circle bottom-left">
                  <img src="/images/alka-about.png" alt="Small2" className="img-fluid" data-aos="zoom-in"/>
                </div>
              </div>
            </Col>

            {/* Right - Text */}
            <Col lg={6} data-aos="fade-left">
              <h6 className="text-uppercase fw-bold text-muted">About Us</h6>
              <h2 className="fw-bold" style={{fontSize:"35px"}}>
                24 Pods — Turning <span className="highlight">Your Ideas</span> into{" "}
                <span className="highlight">Must-Listen Podcasts</span>
              </h2>
              <p>
                Podcasts are everywhere. But let’s be honest — most of them never
                make it past a few episodes. Not because the ideas aren’t good. Not
                because the guests aren’t interesting. It’s because creating a
                podcast that people actually want to hear takes more than a mic and
                a Zoom link.
              </p>
              <p style={{marginBottom:"20px"}}>
                It takes story craft. It takes editing precision. It takes knowing
                exactly how to turn one conversation into something binge-worthy.
              </p>
              <p className="fw-bold" style={{color:"#660033"}}>That’s where 24 Pods comes in.</p>
            </Col>
          </Row>

          {/* ✅ Bottom Card Section */}
          <div className="podcast-hero" aria-labelledby="podcast-heading">
            <div className="podcast-card" data-aos="zoom-in">
              {/* Left Side */}
              <div className="left">
                <h2 id="podcast-heading">Show Up. Talk. Leave the rest to us.</h2>
                <p className="lead">
                  Born from Digiware’s creative powerhouse, <strong>24 Pods</strong> exists to take the
                  heavy lifting off your shoulders so you can focus on what matters — showing up and talking.
                </p>

                <div className="bullets">
                  {["We shoot.", "We edit.", "We post.", "We market."].map((text, i) => (
                    <div className="bullet" key={i}>
                      <span className="dot"></span>
                      <p className="small"><strong>{text}</strong></p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <aside className="right">
                <div className="wave-wrap">
                  <div className="play" role="button" aria-label="Play preview">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7L8 5z" fill="#660033" />
                    </svg>
                  </div>

                  <div className="wave">
                    <svg viewBox="0 0 200 48" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                          <stop offset="0%" stopColor="#e0afff" />
                          <stop offset="100%" stopColor="#660033" />
                        </linearGradient>
                      </defs>
                      <g fill="url(#g1)">
                        {Array.from({ length: 30 }).map((_, i) => {
                          const h = 6 + Math.abs(Math.sin(i * 0.6)) * 36;
                          const x = 4 + i * 6;
                          return <rect key={i} x={x} y={48 - h} width={4} height={h} rx={2} />;
                        })}
                      </g>
                    </svg>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </div>

      {/* Second Section */}
      <div className="about-second">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-white" data-aos="fade-right">
              <h2 className="section-title mb-4" style={{color: "#fff", fontSize: "35PX"}}>The Story Behind
                <span className="highlight"> 24 Pods</span>
              </h2>
              <div className="section-text mb-4">
                <p className="mb-3">
                  <strong style={{color:"#e0afff"}}>The 24PODS,</strong><br />
                  24 comes from our founder Alaka's birth date. Pods is our shorthand for what we live and breathe — podcasts.
                  <br /><br />
                  For over 10 years, Alaka has been obsessed with how stories land. In branding, in campaigns, in content — she’s seen that the real magic doesn’t happen when you talk. It happens when you listen.
                </p>
                <p>
                  <strong style={{color:"#e0afff"}}>At 24PODS,</strong><br />
                  We start by listening to your raw recording. We hear where the emotion builds, where the curiosity spikes, where the audience will lean in… and where they might drop off. Then we shape it. Cut it. Colour it. Package it. Market it.
                  <br /><br />
                  AI is part of our toolkit, but it’s never the driver. Because podcasts are human conversations — and only a human ear knows when something truly clicks.
                </p>
              </div>
            </Col>

            <Col lg={6} className="text-center mt-4 mt-lg-0" style={{display: "flex", justifyContent:"center"}}>
              <div className="about-second-img" data-aos="zoom-in">
                <img src="/images/alka-img.jpeg" alt="Founder" className="img-fluid founder-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Video Section */}
      <div className="about-hero-container">
        <video autoPlay muted loop className="background-video">
          <source src="/videos/garima-and-rachecl.mp4" type="video/mp4" />
        </video>

        <div className="overlay-content container text-center">
          <h5 className="section-title">Why We Exist</h5>
          <p className="section-text">
            We’re here so your podcast doesn’t just “go live” — it lives in people’s heads.
            We don’t want you to be another show in the feed. We want you to be the show people tell their friends about.
          </p>
          <a href="/contact_us" className="btn btn-primary custom-btn mt-3">Join Us</a>
        </div>
      </div>

      {/* Problem Section */}
      <div className="problem-section py-5 px-3 px-md-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-white">
              <h2 className="section-title mb-3" style={{color:"#Fff", fontSize:"35px"}}>The Problem 
                <span className="highlight" style={{color:"#e0afff"}}> We Solve</span> 
              </h2>
              <p className="mb-4">Most creators get stuck in the grind:</p>

              <div className="icon-box d-flex align-items-start mb-3">
                <FaMicrophoneAlt size={24} className="me-3" style={{color:"#e0afff"}}/>
                <p>Recording is fun... but editing is exhausting.</p>
              </div>

              <div className="icon-box d-flex align-items-start mb-3">
                <FaRegClone size={24} className="me-3"  style={{color:"#e0afff"}}/>
                <p>Posting once is easy… but building a following takes daily effort.</p>
              </div>

              <div className="icon-box d-flex align-items-start">
                <FaRegStar size={24} className="me-3"  style={{color:"#e0afff"}}/>
                <p>Ads can get reach… but if the story doesn’t hook, no one sticks.</p>
              </div>
            </Col>

            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <img src="/images/team.jpeg" alt="Team" className="img-fluid" data-aos="zoom-in"/>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Studio Partner Section */}
      <div className="studio-partner-section py-5">
        <Container className="text-center">
          <h2 className="section-heading mb-4" style={{text:"#000", fontSize: "35px"}}>
            Our Podcast Studio <span className="highlight">Partner</span>
            <div className="underline mx-auto mt-2"></div>
          </h2>

          <Row className="justify-content-center g-3">
            <Col xs={6} sm={5} md={4} lg={3}>
              <div className="logo-card p-3">
                <img src="/images/WonderLab-Logo.png" alt="Wonderlab" className="img-fluid" />
              </div>
            </Col>
            <Col xs={4} sm={3} md={2} lg={2}>
              <div className="logo-card p-2">
                <img src="/images/podcast-studio-logo.png" alt="Partner Logo" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default AboutUs;
