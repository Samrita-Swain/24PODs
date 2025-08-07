import React from 'react';
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const About = () => {
    return (
        <div>
            <div className="about-first">
                <div className="content">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about-second">
                <div className="about-container container">
                    <div className="image-section">
                        <div className="main-image-wrapper">
                            <img src="images/about-1.jpg" alt="Main" className="main-image" />
                            <img src="images/about-2.jpg" alt="Small1" className="small-image top-circle" />
                            <img src="images/about-3.jpg" alt="Small2" className="small-image bottom-circle" />
                        </div>
                        <div className="experience-box">
                            <span className="years">30</span>
                            <span className="exp-text">Years Of <br />Experience</span>
                        </div>
                    </div>

                    <div className="text-section">
                        <h5>About Us</h5>
                        <h1>
                            Lorem Ipsum is <span className="highlight">simply dummy</span> text of the printing
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                        </p>
                        <ul>
                            <li><span>01.</span> Lorem Ipsum is simply dummy text</li>
                            <li><span>02.</span> Lorem Ipsum is simply dummy text</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-third">
                <div className="about-container about-third-section container">
                   
                    <div className="text-section">
                        <h1>
                            Why Choose <span className="highlight">US?</span>
                        </h1>
                        <div className="paragraph">
                            <div className="straight-line"></div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>

                    <div className="image-section">
                        <img src="images/about-third.png" alt="" />
                    </div>

                </div>
            </div>
            <div className="about-fourth">
                <div className="about-fourth-section container">
                    <div className="text-section">
                        <h1>
                            Our <span className="highlight">Team</span>
                        </h1>
                    </div>
                    <div className="about-fourth-cards">
                            <div className="profile-card">
                                <img
                                    src="images/people.png"
                                    alt="Profile"
                                    className="profile-img"
                                />

                                <div className="about-social-icons">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaXTwitter /></a>
                                </div>

                                <div className="card-footer">
                                    <h1>Lorem Ipsum</h1>
                                    <p>Consultant</p>
                                </div>
                            </div>
                            <div className="profile-card">
                                <img
                                    src="images/people.png"
                                    alt="Profile"
                                    className="profile-img"
                                />

                                <div className="about-social-icons">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaXTwitter /></a>
                                </div>

                                <div className="card-footer">
                                    <h1>Lorem Ipsum</h1>
                                    <p>Consultant</p>
                                </div>
                            </div>
                            <div className="profile-card">
                                <img
                                    src="images/people.png"
                                    alt="Profile"
                                    className="profile-img"
                                />

                                <div className="about-social-icons">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaXTwitter /></a>
                                </div>

                                <div className="card-footer">
                                    <h1>Lorem Ipsum</h1>
                                    <p>Consultant</p>
                                </div>
                            </div>
                            <div className="profile-card">
                                <img
                                    src="images/people.png"
                                    alt="Profile"
                                    className="profile-img"
                                />

                                <div className="about-social-icons">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaXTwitter /></a>
                                </div>

                                <div className="card-footer">
                                    <h1>Lorem Ipsum</h1>
                                    <p>Consultant</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default About;


