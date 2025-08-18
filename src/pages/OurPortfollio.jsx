import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// src/data.js
const tabData = [
  {
    id: 1,
    title: "Garima & Alka",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageLeft: "/images/garima-alka-vblogs.png",
    imageRight: "/images/garima.png",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`
  },
  {
    id: 2,
    title: "Garima & Rachecl",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageLeft: "/images/garima-rachecl.png",
    imageRight: "/images/rachecl.png",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`
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
    <div>
      <div className="vblogs-first">
        <div className="content">
          <h1>Our Portfolio</h1>
        </div>
      </div>

      <div className="vertical-tabs-container">
        <div className="left-panel">
          {/* Left Side Image */}
          <img 
            src={activeTab.imageLeft} 
            alt={activeTab.title} 
            className="main-image" 
            data-aos="flip-left"
          />
          <h1 className="image-title" data-aos="zoom-in">{activeTab.title}</h1>
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
    </div>
  )
}

export default OurPortfollio;
