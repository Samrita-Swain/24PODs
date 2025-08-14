import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { IoMegaphoneSharp } from "react-icons/io5";

const services = [
    { name: "Studio", icon: "/images/studio.png" },
    { name: "Shoot", icon: "/images/shoot.png" },
    { name: "Editing", icon: "s/images/video-editing.png" },
    { name: "Ads", icon: "/images/ads.png" },
    { name: "Marketing", icon: "/images/marketing.png" },
];


const Help = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);
    return (
        <div>
            <div className="our-guest-first">
                <div className="content">
                    <h1>Be Our Guest</h1>
                </div>
            </div>
            <div className="about-third guest-second">
                 <img src="/images/microphone.png" alt="" className='guest-second-section-img'/>
                 <img src="/images/sound-img.png" alt="" className='guest-second-section-second-img'/>
                <div className="about-container guest-second-section container">
                   <div className="editing-content">
                        <div className="heading" style={{textAlign:"center"}}>
                            <h5 style={{color: "#6a063a", fontSize:"28px"}}>From Guest Spots to Great Stories</h5>
                        <p className="subheading">Whether you want to tell your story or learn from others, we’ve got you covered.</p>
                        </div>
                        <div className="guest-second-boxes">
                            <div className="first-box" data-aos="fade-right">
                                <h1> Your Consultant for Guest Spots</h1>
                                <p style={{marginBottom:"0"}}>We help you find the right podcasts to share your voice, connect with the right audiences, and grow your influence. From research to introductions, we handle the legwork so you can focus on showing up and shining.</p>
                            </div>
                            <div className="second-box" data-aos="fade-left">
                                <h1> Join Us on Inspire from Reality</h1>
                                <p style={{marginBottom:"0"}}>Our own podcast, hosted by Alaka, is where raw truth meets real stories. No filters. No sugar-coating. Just conversations that matter.</p>
                            </div>
                        </div>
                        {/* <button className="button menu-button mt-6 help-button">
                           <a href="/contact_us">Join Us</a>
                        </button> */}
                    </div>

                    {/* <div className="image-section">
                        <img src="/images/guest-img.png" alt="" />
                    </div> */}

                </div>
            </div>
            <div className="video-container guest-third-section">
                        <img src="/images/podcast-gif.gif" alt="Animated Background" className="gif-bg" />
            
                        <div className="overlay" />
            
                        <div className="home-content guest-third">
                            <h5 data-aos="fade-down">Lorem Ipsum</h5>
                            <h2 data-aos="zoom-in" className='video-text'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</h2>
                            <button className="button home-button" data-aos="fade-up">
                               <a href="/contact_us">Join Us</a>
                            </button>
                        </div>
                    </div>
            <div className="help-fourth">
                <div className="editing-container container">
                    <div className="editing-image">
                        <div className="image-border" data-aos="flip-left">
                            <img src="/images/help-editing.png" alt="Editing" />
                        </div>
                    </div>
                    <div className="editing-content" data-aos="zoom-in-left">
                        {/* <h5>Editing</h5> */}
                        <h1 className="subheading" style={{color:"#660033"}}>Why Inspire from Reality?</h1>
                        <p>
                            Alaka, our founder, believes you don’t need to fit in—you’re meant to stand out. Every person carries a unique set of traits shaped by the paths they’ve walked. That’s reality.<br></br> <span style={{color:"#660033", fontWeight:"800"}}>That’s the naked truth.</span> And somewhere out there, someone needs to hear your journey to find the courage for their own.
                        </p>
                        <div className="messages">
                            <img src="/images/message-gif.gif" alt="" />
                            <p>If your story can spark a change, let’s share it.</p>
                        </div>
                        <button className="button menu-button mt-6 help-button">
                            <a href="/contact_us">Join Us</a>
                        </button>
                    </div>
                </div>
            </div>
             {/* <div className="about-third">
                <div className="about-container about-third-section container">
                   
                    <div className="text-section">
                        <h1>
                            Why Choose <span className="highlight">US?</span>
                        </h1>
                        <div className="paragraph guest-fifth">
                            <div className="straight-line" style={{ height: "145px" }}></div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <button className="button menu-button mt-6 help-button">
                           <a href="/contact_us">Join Us</a>
                        </button>
                    </div>

                    <div className="image-section">
                        <img src="/images/about-third.png" alt="" />
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default Help