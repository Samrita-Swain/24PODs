import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import { FaPodcast, FaCalendarCheck, FaUsers, FaVideo } from 'react-icons/fa';



const services = [
    {
        title: "Studio",
        image: "/images/studio.png",
        description: "High-quality recording with the right angles, lighting, and sound."
    },
    {
        title: "Shoot",
        image: "/images/shoot.png",
        description: "Professional shoots with perfect direction and framing."
    },
    {
        title: "Editing",
        image: "/images/editing.png",
        description: "Seamless editing with transitions, effects, and polishing."
    },
    {
        title: "Ads",
        image: "/images/ads.png",
        description: "Engaging ads crafted for maximum audience impact."
    },
    {
        title: "Marketing",
        image: "/images/marketing.png",
        description: "Boost your brand with creative marketing strategies."
    }
];



const Help = () => {
     const [activeTab, setActiveTab] = useState('production');

  const productionContent = [
    {
      icon: <FaPodcast />,
      text: 'Manage the entire podcast shoot from start to finish.',
    },
    {
      icon: <FaCalendarCheck />,
      text: 'Arrange shows and recording schedules tailored to your goals.',
    },
    {
      icon: <FaUsers />,
      text: 'Source and coordinate guests who match your brand and audience.',
    },
    {
      icon: <FaVideo />,
      text: 'Provide host coaching, set design, and on-site support to make you feel camera-ready.',
    },
  ];

  const postProductionContent = [
    {
      title: 'Editing',
      text: 'Most videos lose viewers in the first 10 seconds. We keep them watching with sharp cuts, clean audio, and visuals that feel premium from start to finish—so your content holds attention, not dust.',
    },
    {
      title: 'Social Media',
      text: 'Good content is wasted if it never reaches the right eyes. We tailor reels, captions, thumbnails, and hashtags for each platform, turning casual scrollers into engaged followers and loyal listeners.',
    },
    {
      title: 'Ads',
      text: 'Throwing money at ads without strategy is a fast way to get nothing back. We create campaigns built for your audience, delivering attention that translates into clicks, conversations, and conversions.',
    },
  ];
  useEffect(() => {
          AOS.init({
              duration: 1000,
              once: false,
              mirror: true
          });
      }, []);

    return (
       <section>
         <div className="help-banner d-flex align-items-center justify-content-center text-center">
      <h1 className="help-title">How Can We Help</h1>
    </div>
        <div className="services-section container py-5">
            <div className="row align-items-center">

                {/* Left Side */}
                <div className="col-lg-6 col-md-12 mb-4">
                    <h2 className="section-title" style={{fontSize:"35px"}}>All that you need</h2>
                    <p className="section-subtitle">
                        From the first click of the camera to your audience hitting
                        <span className="highlight" style={{color:"#660033"}}> “play,”</span> we handle it all.
                    </p>

                    <div className="row g-3">
                        {services.map((service, index) => (
                            <div className="col-6" key={index}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        {/* Front */}
                                        <div className="flip-card-front">
                                            <img src={service.image} alt={service.title} className="service-img-icon" />
                                            <p>{service.title}</p>
                                        </div>

                                        {/* Back */}
                                        <div className="flip-card-back">
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-lg-6 col-md-12 text-center">
                    <div className="images-wrapper"  data-aos="zoom-out">
                        <img
                            src="/images/garima.jpg"
                            alt="Service 1"
                            className="service-img"
                        />
                        <img
                            src="/images/alka.jpg"
                            alt="Service 2"
                            className="service-img"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='tab-section-part'>
            <Container className="tabs-section py-5">
      <div className="d-flex justify-content-center" style={{marginBottom: "40px"}}>
        <Button
          variant={activeTab === 'production' ? 'danger' : 'outline-danger'}
          className="mx-2"
          onClick={() => setActiveTab('production')}
        >
          Production
        </Button>
        <Button
          variant={activeTab === 'post' ? 'danger' : 'outline-danger'}
          className="mx-2"
          onClick={() => setActiveTab('post')}
        >
          Post Production
        </Button>
      </div>

      <Row className="justify-content-center">
        {activeTab === 'production' &&
          productionContent.map((item, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              className="mb-4 d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div className="custom-card text-center p-4 w-100">
                <div className="icon mb-3">{item.icon}</div>
                <p style={{text:"#fff"}}>{item.text}</p>
              </div>
            </Col>
          ))}

        {activeTab === 'post' &&
          postProductionContent.map((item, index) => (
            <Col
            xs={12}
            md={6}
            lg={4}
            key={index}
            className="mb-4 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div
              className={`post-production-card custom-card text-start p-4 w-100 ${
                item.title === "Social Media" ? "social-media-card" : ""
              }`}
            >
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.text}</p>
            </div>
          </Col>
          ))}
      </Row>

      <div className="text-center mt-4" data-aos="fade-up">
        <a href="/files/packages.pdf" target="_blank" rel="noopener noreferrer"><Button variant="danger">View Packages</Button></a>

      </div>
    </Container>
        </div>
       </section>
    );
};

export default Help;
