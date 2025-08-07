import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div className="video-container">
            <img src="/images/home-gif.gif" alt="Animated Background" className="gif-bg" />

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
