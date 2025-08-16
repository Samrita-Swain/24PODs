import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div className="video-container">
             <video
        className="bg-video"
        src="/videos/main-img.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{width:"100%", height:"100%", objectFit: "cover",
    objectPosition: "center"}}
      />

            <div className="overlay" />

            <div className="home-content">
                <h1>Be open: Welcome creative and <br></br><span>"out of the box"</span> ideas </h1>
                <button className="button home-button">
                    Explore More <MdKeyboardArrowRight className='home-icon'/>
                </button>
            </div>
        </div>
    );
};

export default Home;
