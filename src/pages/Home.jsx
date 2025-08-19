import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div className="video-container">
      {/* Desktop / Laptop */}
      <video
        className="bg-video video-desktop"
        src="/videos/main-video-laptop.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Tablet */}
      <video
        className="bg-video video-tablet"
        src="/videos/tab.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Mobile */}
      <video
        className="bg-video video-mobile"
        src="/videos/mob.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="overlay" />

      <div className="home-content">
        <h1>
          Be open: Welcome creative and <br />
          <span>"out of the box"</span> ideas
        </h1>
        <button className="button home-button">
          Explore More <MdKeyboardArrowRight className="home-icon" />
        </button>
      </div>
    </div>
    );
};

export default Home;
