import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaXTwitter, FaInstagram, FaMobileScreenButton } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { ImMobile2 } from "react-icons/im";
import { FaMicrophoneAlt } from "react-icons/fa";

const About = () => {
   useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });
}, []);
    
    return (
        <div>
            <div className="about-first">
                <div className="content">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about-second">
                <div className="about-container container">
                    <img src="/images/white-bg.png" alt="" className='about-second-section-img'/>
                    <div className="image-section">
                        <div className="main-image-wrapper">
                            <img src="/images/about-1.jpg" alt="Main" className="main-image"  data-aos="zoom-in"/>
                            <img src="/images/about-2.jpg" alt="Small1" className="small-image top-circle" data-aos="zoom-in"/>
                            <img src="/images/about-3.jpg" alt="Small2" className="small-image bottom-circle" data-aos="zoom-in"/>
                        </div>
                        <div className="experience-box" data-aos="fade-right">
                            <span className="years">30</span>
                            <span className="exp-text">Years Of <br />Experience</span>
                        </div>
                    </div>

                    <div className="about-second-text-section" style={{marginBottom:"0", position:"relative"}} data-aos="fade-left">
                        <h5>About Us</h5>
                        <h1>24 Pods — Turning <span className="highlight">Your Ideas into Must-Listen Podcasts</span></h1>
                        <p>
                            <p>Podcasts are everywhere. But let’s be honest — most of them never make it past a few episodes. Not because the ideas aren’t good. Not because the guests aren’t interesting.
                            It’s because creating a podcast that people actually want to hear takes more than a mic and a Zoom link.</p><br></br>

                            It takes story craft. It takes editing precision. It takes knowing exactly how to turn one conversation into something binge-worthy.<br></br><br></br>

                            <span
                                className="highlight"
                                style={{
                                    fontWeight: "800",
                                    fontSize: "17px"
                                }}
                            >
                                That’s where 24 Pods comes in.
                            </span>

                        </p>
                        {/* <ul>
                            <li><span>01.</span> Lorem Ipsum is simply dummy text</li>
                            <li><span>02.</span> Lorem Ipsum is simply dummy text</li>
                        </ul> */}
                    </div>
                </div>
            </div>
            <div className="about-third">
                <div className="about-container about-third-section container">

                    <div className="text-section" style={{marginBottom:"0"}} data-aos="fade-right">
                        <h1>
                            The Story Behind <span className="highlight">24 Pods</span>
                        </h1>
                        <div className="paragraph">

                            <p style={{marginBottom:'0'}}>
                                <span style={{color:"#e0afff" , fontWeight:"700"}}>The 24PODS,</span><br></br> 24 comes from our founder Alka’s birth date. Pods is our shorthand for what we live and breathe — podcasts.<br></br>
                                For over 10 years, Alka has been obsessed with how stories land. In branding, in campaigns, in content — she’s seen that the real magic doesn’t happen when you talk. It happens when you listen.<br></br><br></br>

                               <span style={{color:"#e0afff" , fontWeight:"700"}}> At 24PODS,</span><br></br> We start by listening to your raw recording. We hear where the emotion builds, where the curiosity spikes, where the audience will lean in… and where they might drop off. Then we shape it. Cut it. Colour it. Package it. Market it.<br></br>

                                AI is part of our toolkit, but it’s never the driver. Because podcasts are human conversations — and only a human ear knows when something truly clicks.
                            </p>
                        </div>
                    </div>
                    <div className="image-section" data-aos="fade-left">
                        <img src="/images/about-third.png" alt="" />
                    </div>



                </div>
            </div>
            <div className="video-container guest-third-section">
                <img src="/images/podcast-gif.gif" alt="Animated Background" className="gif-bg" />

                <div className="overlay" style={{ backgroundColor: "#f3f3f33d" }} />

                <div className="home-content guest-third">
                    <h5 style={{ color: "#660033" , paddingBottom:"10px"}} data-aos="fade-down">Why We Exist</h5>
                    <p className='about-gif-pargharph' data-aos="zoom-in" style={{margin:"0"}}>We’re here so your podcast doesn’t just “go live” — it lives in people’s heads.
                        We don’t want you to be another show in the feed. We want you to be the show people tell their friends about.</p>
                    <button className="button home-button" data-aos="fade-up">
                        <a href="/contact_us">Join Us</a>
                    </button>
                </div>
            </div>
            <div className="about-third">
                <div className="about-container about-third-section container">

                    <div className="text-section" style={{marginBottom:"0"}}>
                        <h1>
                            The Problem <span className="highlight">We Solve</span>
                        </h1>
                        <div className="paragraph">

                            <p>
                                Most creators get stuck in the grind:
                            </p>
                            <ul>
                                <li data-aos="fade-right"><span><FaMicrophoneAlt /></span> Recording is fun… but editing is exhausting.
                                </li>
                                <li data-aos="fade-right"><span><ImMobile2 /></span>Posting once is easy… but building a following takes daily effort.</li>
                                <li style={{marginBottom:"0"}} data-aos="fade-right"><span><HiOutlineSpeakerphone /></span> Ads can get reach… but if the story doesn’t hook, no one sticks.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="image-section" data-aos="zoom-in">
                        <img src="/images/gif-podcast.gif" alt="" />
                    </div>

                </div>
            </div>


            {/* <div className="about-fourth">
                <div className="about-fourth-section container">
                    <div className="text-section">
                        <h1>
                            Our <span className="highlight">Team</span>
                        </h1>
                    </div>
                    <div className="about-fourth-cards">
                        <div className="profile-card" data-aos="zoom-in">
                            <img
                                src="/images/people.png"
                                alt="Profile"
                                className="profile-img"
                            />

                            <div className="about-social-icons">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaXTwitter /></a>
                            </div>

                            <div className="card-footer">
                                <h2>Lorem Ipsum</h2>
                                <p>Consultant</p>
                            </div>
                        </div>
                        <div className="profile-card" data-aos="zoom-in">
                            <img
                                src="/images/people.png"
                                alt="Profile"
                                className="profile-img"
                            />

                            <div className="about-social-icons">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaXTwitter /></a>
                            </div>

                            <div className="card-footer">
                                <h2>Lorem Ipsum</h2>
                                <p>Consultant</p>
                            </div>
                        </div>
                        <div className="profile-card" data-aos="zoom-in">
                            <img
                                src="/images/people.png"
                                alt="Profile"
                                className="profile-img"
                            />

                            <div className="about-social-icons">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaXTwitter /></a>
                            </div>

                            <div className="card-footer">
                                <h2>Lorem Ipsum</h2>
                                <p>Consultant</p>
                            </div>
                        </div>
                        <div className="profile-card" data-aos="zoom-in">
                            <img
                                src="/images/people.png"
                                alt="Profile"
                                className="profile-img"
                            />

                            <div className="about-social-icons">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaXTwitter /></a>
                            </div>

                            <div className="card-footer">
                                <h2>Lorem Ipsum</h2>
                                <p>Consultant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default About;


