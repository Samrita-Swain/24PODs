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
        <h1 style={{ color: '#fff' }}>
          Be open: Welcome creative and <br />
          <span>"out of the box"</span> ideas
        </h1>
        <a href="/how_can_we_help" class="home-button">
          Explore More
          <svg stroke="currentColor" fill="currentColor" stroke-width="0"
            viewBox="0 0 24 24" class="home-icon" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M8.59 16.59 13.17 12 8.59 7.41 
             10 6l6 6-6 6-1.41-1.41z"></path>
          </svg>
        </a>

      </div>
    </div>
  );
};

export default Home;
