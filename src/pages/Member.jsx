import React, { useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import JoinForm from '../form/JoinForm';
import { TiTick } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

const featuresLeft = [
  {
    title: "Two Professionally Edited Episodes Every Month",
    description: "Clean, sharp, audience-ready."
  },
  {
    title: "Partner Studio Access",
    description: "Book our partner studio space to record in a pro environment."
  },
  {
    title: "CRM & Newsletter Management",
    description: "We manage your subscribers and keep your listeners engaged."
  },
  {
    title: "Automated Reviews",
    description: "Collect and showcase reviews effortlessly."
  }
];

const featuresRight = [
  {
    title: "Social Media Reels & Posting",
    description: "Scroll-stopping content cut straight from your episodes."
  },
  {
    title: "Awareness Campaigns",
    description: "Get your podcast discovered by the right audience."
  },
  {
    title: "Guest Management",
    description: "We connect you with guests — and line up guest appearances for you on other podcasts."
  },
  {
    title: "Personalised Landing Page",
    description: "Your own profile page, linked to your socials and podcast channel."
  }
];


const Member = () => {
  useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);
  return (
   <section>
    <div className="member-banner d-flex align-items-center justify-content-center text-center">
      <h1 className="member-title">Become A Member</h1>
    </div>
     <div className="pods-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* TEXT SECTION */}
          <Col md={6} className="text-light mb-4 mb-md-0"  data-aos="zoom-in-right">
            <h2 className="section-title" style={{fontSize:"35px"}}>
              Why Join <span className="highlight">PodsMembership</span>?
            </h2>
            <p>
              Most podcasters quit because of the workload: editing, finding guests, posting clips,
              running campaigns, chasing reviews. It’s too much.
            </p>
            <p>
              With PodsMembership, you don’t have to.
            </p>
            <p>
              We take the chaos off your plate — so your podcast not only survives, it thrives.
            </p>
            <a href="/contact_us"><Button className="join-btn mt-3">Join Us</Button></a>
          </Col>

          {/* IMAGE SECTION */}
          <Col md={6}  data-aos="zoom-in-left">
            <div className="image-container">
              <img
                src="/images/two.png" 
                alt="AI in Focus"
                className="img-fluid rounded"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="own-pods-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
          <Col md={6} className="mb-4 mb-md-0" data-aos="zoom-in-left">
            <img
              src="/images/alaka-g.png"  // Replace with your correct image path
              alt="AI in Focus"
              className="img-fluid rounded shadow"
            />
          </Col>

          {/* Right Text */}
          <Col md={6} data-aos="zoom-in-right">
            <h2 className="section-heading" style={{fontSize:"35px"}}>
              Your <span className="black-text">Own-</span>
              <span className="highlight-text">Own PodsTeam</span>
            </h2>
            <div className="underline"></div>
            <p className="section-paragraph mt-3">
              We’ve built something special — a membership designed for creators, leaders,
              and businesses who want their podcast to grow without the hassle. With PodsMembership,
              you don’t just get services. You get a full team — your own-Own PodsTeam — handling
              everything behind the scenes while you focus on your voice.
            </p>
            <p className="spots-text mt-2">
              Only 10 spots available.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
     <div className="what-you-get-section py-5">
      <Container>
        <h2 className="section-title text-center mb-2" style={{fontSize:"35px"}}>What You’ll Get</h2>
        <p className="section-subtitle text-center mb-5">
          A complete, done-for-you stack—from recording to growth.
        </p>

        <Row className="align-items-center">
          {/* Left Features */}
          <Col md={4} data-aos="fade-up-right">
            {featuresLeft.map((feature, index) => (
              <div className="feature-card mb-3" key={index}>
                <div className="icon-check"> <TiTick /></div>
                <div>
                  <h6>{feature.title}</h6>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </Col>

          {/* Center Image */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div className="what-get-img" data-aos="zoom-in">
              <img
              src="/images/alka-img.jpeg"
              alt="What You Get"
              className="img-fluid rounded custom-image"
            />
            </div>
          </Col>

          {/* Right Features */}
          <Col md={4} data-aos="fade-up-left">
            {featuresRight.map((feature, index) => (
              <div className="feature-card mb-3" key={index}>
                <div className="icon-check"> <TiTick /></div>
                <div>
                  <h6>{feature.title}</h6>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
    <div className="investment-section">
      <div className="investment-container">
        {/* Left Content */}
        <div className="investment-main">
          <h2 className="investment-title">The Investment</h2>
          <p className="investment-subtext">
            All of this — production, post-production, marketing, and growth — for:
          </p>

          <div className="investment-price">
            <span role="img" aria-label="money bag">💰</span>
            <span className="price-amount">$1,899</span>
            <span className="per-month">per month</span>
          </div>

          <div className="investment-tags">
            <span>✔ Production</span>
            <span>✔ Post-production</span>
            <span>✔ Marketing</span>
            <span>✔ Growth</span>
          </div>

          <div className="investment-actions">
            <a href="/contact_us"><button className="cta-btn">👉 Let us be your Own-Own PodsTeam</button></a>
            <div className="limit-badge">⚡ Limited to <strong>10 members</strong> only.</div>
          </div>

          <p className="investment-note">Because we believe in quality, not quantity.</p>
        </div>

        {/* Right Included List */}
        <div className="investment-included">
          <h4>What's included</h4>
          <ol>
            <li>✅ Dedicated Producer</li>
            <li>✅ 2 episodes/month</li>
            <li>✅ Distribution + Ads</li>
            <li>✅ Monthly growth report</li>
          </ol>
        </div>
      </div>
    </div>
    <JoinForm />
   </section>
  );
};

export default Member;
