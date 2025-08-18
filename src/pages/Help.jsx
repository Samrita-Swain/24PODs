import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const services = [
    { name: "Studio", icon: "/images/studio.png", content: " Professional, fully equipped, and ready to make you look & sound your best." },
    { name: "Shoot", icon: "/images/shoot.png", content: "High-quality recording with the right angles, lighting, and sound." },
    { name: "Editing", icon: "/images/editing.png", content: "Crisp, polished, and on-brand." },
    { name: "Ads", icon: "/images/ads.png", content: " Campaigns that get your content seen by the right people." },
    { name: "Marketing", icon: "/images/marketing.png", content: " Distribution strategies that grow your audience and authority." },
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
            <div className="help-first">
                <div className="content">
                    <h1 style={{textAlign:"center"}}>How Can we Help</h1>
                </div>
            </div>
            <div className="help-second section-container">
                <div className="left-content">
                    <div className="text-section">
                        <h1>
                            All that you <span className="highlight">need</span>
                        </h1>
                        <p>From the first click of the camera to your audience hitting “play,” we handle it all.</p>
                    </div>

                    <div className="service-grid">
                        {services.map((service) => (
                            <div className="service-box" key={service.name}>
                                <div className="service-front">
                                    <img src={service.icon} alt={service.name} />
                                    <p>{service.name}</p>
                                </div>
                                <div className="service-back">
                                    <p>{service.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right-content" data-aos="zoom-out">
                    <div className="image-stack">
                        <img src="/images/garima.jpg" alt="Host 1" className="host-img" />
                        <img src="/images/alka.jpg" alt="Host 2" className="host-img second-img" />
                        <a href="/inspire_from_reality"><div className="play-button">&#9658;</div></a>
                    </div>
                </div>
            </div>
            <div className="help_third">
                <div className="help_third">
                    <div className="help-third-section">
                        <div className="text-section">
                            <h1>
                                Post Production
                            </h1>
                        </div>
                        <div className="help-third-boxes">
                            <div className="box" data-aos="zoom-in-right">
                                <h1>Editing</h1>
                                <div className="paragraph">
                                    <div className="straight-line"></div>
                                    <p>
                                       Most videos lose viewers in the first 10 seconds. We keep them watching with sharp cuts, clean audio, and visuals that feel premium from start to finish—so your content holds attention, not dust.

                                    </p>
                                </div>
                            </div>
                            <div className="box second-box" data-aos="zoom-in-down">
                                <h1>Social Media</h1>
                                <div className="paragraph">
                                    <p>
                                       Good content is wasted if it never reaches the right eyes. We tailor reels, captions, thumbnails, and hashtags for each platform, turning casual scrollers into engaged followers and loyal listeners.

                                    </p>
                                </div>
                            </div>
                            <div className="box" data-aos="zoom-in-left">
                                <h1>Ads </h1>
                                <div className="paragraph">
                                    <div className="straight-line"></div>
                                    <p>
                                        Throwing money at ads without strategy is a fast way to get nothing back. We create campaigns built for your audience, delivering attention that translates into clicks, conversations, and conversions.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="help-fourth">
                <img src="/images/dots.png" alt="" className='help-fourth-img'/>
                <div className="editing-container container">
                    <div className="editing-image" data-aos="zoom-in-right">
                        <div className="image-border">
                            <img src="/images/help-editing.png" alt="Editing" />
                        </div>
                    </div>
                    <div className="editing-content" data-aos="zoom-in-left">
                        <h5>Editing</h5>
                        <h1 className="subheading">We edit and you manage</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>
                        <button className="button menu-button mt-6 help-button" style={{marginBottom:"0"}}>
                            <a href="/contact_us">Join Us</a>
                        </button>
                    </div>
                </div>
            </div> */}
            {/* <div className="help-fifth about-third">
                <div className="about-container about-third-section container">
                    <div className="editing-content">
                        <h5>Podcast marketing</h5>
                        <h1 className="subheading">Let us handle your socials and ads</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>
                        <button className="button menu-button mt-6 help-button" style={{marginBottom:"0"}}>
                            <a href="/contact_us">Join Us</a>
                        </button>
                    </div>

                    <div className="image-section">
                        <img src="/images/social media.png" alt="" />
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default Help