import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';

// src/data.js
const tabData = [
  {
    id: 1,
    title: "Garima & Alaka",
    description: "Garima and Alka sat down for a heartfelt talk about AI and digital marketing...",
    imageLeft: "/images/garima-alka-vblogs.png",
    imageRight: "/images/garima.png",
    content: `Garima and Alka sat down for a heartfelt talk about AI and digital marketing — two superpower industries shaping our future.The conversation was bold, raw, and packed with insights.And yes, we edited it into something unforgettable. `
  },
  {
    id: 2,
    title: "Garima & Rachel",
    description: "Rachel and Garima explored a mix no one saw coming: Wellness and AI.Two worlds...",
    imageLeft: "/images/garima-rachecl.png",
    imageRight: "/images/rachecl.png",
    content: `Rachel and Garima explored a mix no one saw coming: Wellness and AI.Two worlds that feel poles apart… yet so deeply connected.Their conclusion? AI wellness isn’t optional — it’s necessary.`
  }
];

const OurPortfollio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
     <section>
        <div className="ourpotfolio-banner d-flex align-items-center justify-content-center text-center">
        <h1 className="ourpotfolio-title">How Can We Help</h1>
      </div>
    <div>
      <Container>
       
      <div className="vertical-tabs-container">
        <div className="left-panel">
          {/* Left Side Image */}
          <img 
            src={activeTab.imageLeft} 
            alt={activeTab.title} 
            className="main-image" 
            data-aos="flip-left"
          />
          <h1 className="image-title" data-aos="zoom-in" style={{color:"#660033"}}>{activeTab.title}</h1>
          <p className="image-description" data-aos="zoom-in">{activeTab.content}</p>
        </div>

        <div className="right-panel">
          {/* Right Side Image */}
         

          {/* Tabs List */}
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${activeTab.id === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <img src={tab.imageRight} alt={tab.title} />
              <div className="tab-text">
                <h4>{tab.title}</h4>
                <p>{tab.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
     </section>
  )
}

export default OurPortfollio;
