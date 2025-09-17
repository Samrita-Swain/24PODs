import React from "react";

const Home = () => {
    return (
        <section className="hero-section">
            {/* ✅ Desktop Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video d-none d-lg-block"
            >
                <source src="/videos/Sequence 01_2.mp4" type="video/mp4" />
            </video>

            {/* ✅ Tablet Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video d-none d-md-block d-lg-none"
            >
                <source src="/videos/tab.mp4" type="video/mp4" />
            </video>

            {/* ✅ Mobile Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video d-block d-md-none"
            >
                <source src="/videos/mob.mp4" type="video/mp4" />
            </video>

            {/* ✅ Overlay Content */}
            <div className="hero-overlay d-flex align-items-center">
                <div className="container text-white">
                    <div className="col-lg-8">
                        <h1 className="fw-bold mb-3"> Be open: Welcome creative and <br />
                            <span className="highlight">"out of the box"</span> ideas </h1>
                        <a href="/how_can_we_help" className="home-button">
                            Explore More
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                viewBox="0 0 24 24" className="home-icon" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M8.59 16.59 13.17 12 8.59 7.41 
             10 6l6 6-6 6-1.41-1.41z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
