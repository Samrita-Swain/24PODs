import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// src/data.js
const tabData = [
  {
    id: 1,
    title: "Content That Demands Attention",
    description: "Your listeners give you the most precious resource they have...",
    imageLeft: "/images/garima-alka-vblogs.png",
    imageRight: "/images/garima.png",
    content: `Your listeners give you the most precious resource they have: their time. To respect that, every episode must do more than fill space—it must capture attention quickly and hold it. That means:`,
    points: [
      "Starting strong with a hook that makes people lean in.",
      "Structuring conversations with clarity, not clutter.",
      "Producing audio so sharp and polished that your ideas shine without distraction."
    ],
    lastcontent: `Because when the sound is clean and the story is clear, your message carries further.`
  },
  {
    id: 2,
    title: "Marketing That Moves Beyond Posting Links",
    description: "Too many creators think “sharing a link” equals marketing...",
    imageLeft: "/images/garima-rachecl.png",
    imageRight: "/images/rachecl.png",
    content: `Too many creators think “sharing a link” equals marketing. It doesn’t. Marketing is about creating moments of discovery. That could be:`,
    points: [
      "Turning a five-minute highlight into a TikTok clip that sparks curiosity.",
      "Sharing a quote card on Instagram that inspires a save and a share.",
      "Writing show notes that don’t just describe—but rank on search engines."
    ],
    lastcontent: `The secret isn’t shouting louder—it’s being found more often.`
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
          <h1 className="image-title" data-aos="zoom-in" style={{color:"#660033"}}>{activeTab.title}</h1>
          <p className="image-description" data-aos="zoom-in">{activeTab.content}</p>
          {/* UL List */}
          <ul className="content-list" data-aos="fade-up">
            {activeTab.points.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <p className="image-description" data-aos="fade-up">{activeTab.lastcontent}</p>
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
