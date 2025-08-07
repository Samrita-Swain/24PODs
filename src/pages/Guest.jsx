import React from 'react'

const services = [
    { name: "Studio", icon: "/images/studio.png" },
    { name: "Shoot", icon: "/images/shoot.png" },
    { name: "Editing", icon: "/images/video-editing.png" },
    { name: "Ads", icon: "/images/ads.png" },
    { name: "Marketing", icon: "/images/marketing.png" },
];


const Help = () => {
    return (
        <div>
            <div className="our-guest-first">
                <div className="content">
                    <h1>Be Our Guest</h1>
                </div>
            </div>
            <div className="about-third guest-second">
                <div className="about-container guest-second-section container">
                   <div className="editing-content">
                        <h5>Lorem Ipsum</h5>
                        <h1 className="subheading">Lorem Ipsum is simply dummy text</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>
                        <button className="button menu-button mt-6 help-button">
                           <a href="/contact_us">Join Us</a>
                        </button>
                    </div>

                    <div className="image-section">
                        <img src="images/guest-img.png" alt="" />
                    </div>

                </div>
            </div>
            <div className="video-container guest-third-section">
                        <img src="/images/podcast-gif.gif" alt="Animated Background" className="gif-bg" />
            
                        <div className="overlay" />
            
                        <div className="home-content guest-third">
                            <h5>Lorem Ipsum</h5>
                            <h1>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</h1>
                            <button className="button home-button">
                               <a href="/contact_us">Join Us</a>
                            </button>
                        </div>
                    </div>
            <div className="help-fourth">
                <div className="editing-container container">
                    <div className="editing-image">
                        <div className="image-border">
                            <img src="images/help-editing.png" alt="Editing" />
                        </div>
                    </div>
                    <div className="editing-content">
                        <h5>Editing</h5>
                        <h1 className="subheading">we edit and you manage</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>
                        <button className="button menu-button mt-6 help-button">
                            <a href="/contact_us">Join Us</a>
                        </button>
                    </div>
                </div>
            </div>
             <div className="about-third">
                <div className="about-container about-third-section container">
                   
                    <div className="text-section">
                        <h1>
                            Why Choose <span className="highlight">US?</span>
                        </h1>
                        <div className="paragraph guest-fifth">
                            <div className="straight-line"></div>
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
                        <img src="images/about-third.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Help