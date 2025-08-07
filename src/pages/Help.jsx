import React from 'react'

const services = [
    { name: "Studio", icon: "src/assets/images/studio.png" },
    { name: "Shoot", icon: "src/assets/images/shoot.png" },
    { name: "Editing", icon: "src/assets/images/video-editing.png" },
    { name: "Ads", icon: "src/assets/images/ads.png" },
    { name: "Marketing", icon: "src/assets/images/marketing.png" },
];


const Help = () => {
    return (
        <div>
            <div className="help-first">
                <div className="content">
                    <h1>How Can we Help</h1>
                </div>
            </div>
            <div className="help-second section-container">
                <div className="help-second left-content">
                    <div className="text-section">
                        <h1>
                            All that you <span className="highlight">need</span>
                        </h1>
                    </div>
                    <div className="service-grid">
                        {services.map((service) => (
                            <div className="service-box" key={service.name}>
                                <img src={service.icon} alt={service.name} />
                                <p>{service.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right-content">
                    <div className="image-stack">
                        <img src="src/assets/images/1st-img.jpg" alt="Host 1" className="host-img" />
                        <img src="src/assets/images/2nd-img.jpg" alt="Host 2" className="host-img second-img
                        "/>
                        <div className="play-button">&#9658;</div>
                    </div>
                </div>
            </div>
            <div className="help_third">
                <div className="help-third-section">
                    <div className="text-section">
                    <h1>
                        Post Production
                    </h1>
                </div>
                <div className="help-third-boxes">
                    <div className="box">
                        <h1>Editing</h1>
                        <div className="paragraph">
                            <div className="straight-line"></div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div className="box second-box">
                        <h1>Editing</h1>
                        <div className="paragraph">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <h1>Editing</h1>
                        <div className="paragraph">
                            <div className="straight-line"></div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>

                </div>
                </div>
            </div>
            <div className="help-fourth">
                <div className="editing-container container">
                    <div className="editing-image">
                        <div className="image-border">
                            <img src="src/assets/images/help-editing.png" alt="Editing" />
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
             <div className="help-fifth about-third">
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
                        <button className="button menu-button mt-6 help-button">
                           <a href="/contact_us">Join Us</a>
                        </button>
                    </div>

                    <div className="image-section">
                        <img src="src/assets/images/social media.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Help