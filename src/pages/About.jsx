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
                    <img src="/images/white-bg.png" alt="" className='about-second-section-img' />
                    <div className="image-section">
                        <div className="main-image-wrapper">
                            <img src="/images/group-img.jpeg" alt="Main" className="main-image" data-aos="zoom-in" />
                            <img src="/images/rachecl-garima-small.png" alt="Small1" className="small-image top-circle" data-aos="zoom-in" />
                            <img src="/images/alka-about.png" alt="Small2" className="small-image bottom-circle" data-aos="zoom-in" />
                        </div>
                        <div className="experience-box" data-aos="fade-right">
                            <span className="years">10</span>
                            <span className="exp-text">Years Of <br />Experience</span>
                        </div>
                    </div>

                    <div className="about-second-text-section" style={{ marginBottom: "0", position: "relative" }} data-aos="fade-left">
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
            <section className="podcast-hero" aria-labelledby="podcast-heading" style={{ background: "#f3f3f3" }}>
                <style>{`
        .podcast-hero{--card-bg:linear-gradient(135deg,#1f1144 0%,#4b2a86 50%,#8a4bf0 100%);display:flex;align-items:center;justify-content:center;padding:48px 20px;}
        .podcast-card{position:relative;max-width:980px;width:100%;background:rgba(255,255,255,0.04);backdrop-filter:blur(6px);border-radius:18px;padding:36px;display:grid;grid-template-columns:1fr 360px;gap:28px;box-shadow:0 10px 30px rgba(13,8,31,0.6);overflow:hidden}
        

        .left{display:flex;flex-direction:column;gap:18px}
        h2{font-family:"Jost", sans-serif; color:#660033;margin:0;font-size:28px;line-height:1.05;letter-spacing:-0.4px}
        p.lead{color:#000;margin:0;font-size:16px}
        p.small{color:#000;margin:0;font-size:14px}

        .bullets{display:flex;flex-direction:row;gap:10px;margin-top:6px}
        .bullet{display:flex;gap:12px;align-items:flex-start}
        .dot{width:10px;height:10px;border-radius:50%;background:linear-gradient(180deg,#ffd17a,#ff7ab6);margin-top:6px;box-shadow:0 4px 14px rgba(255,122,182,0.15)}

        .actions{display:flex;gap:12px;align-items:center;margin-top:18px}
        .btn{padding:12px 18px;border-radius:12px;border:0;cursor:pointer;font-weight:600;font-size:15px}
        .btn-primary{background:linear-gradient(90deg,#ff7ab6,#7a5cff);color:white;box-shadow:0 8px 30px rgba(122,92,255,0.22);}
        .btn-ghost{background:transparent;color:#000;border:1px solid rgba(255,255,255,0.08)}

        .meta{display:flex;gap:18px;align-items:center;color:#000;margin-top:10px}
        .meta small{display:block}

        .right{display:flex;flex-direction:column;gap:14px;background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));padding:18px;border-radius:12px}
        .wave-wrap{display:flex;align-items:center;gap:12px}
        .play{width:64px;height:64px;border-radius:12px;background:linear-gradient(180deg,#fff,#f3f3f3);display:grid;place-items:center;box-shadow:0 6px 18px rgba(16,9,60,0.4);}
        .play svg{width:28px;height:28px}
        .wave{flex:1;background:#660033;height:72px;border-radius:10px;display:flex;align-items:center;padding:12px 16px;gap:8px}
        .wave svg{height:48px;width:100%;opacity:0.95}

        .tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
        .tag{font-size:13px;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.9);border:1px solid rgba(255,255,255,0.03)}

        @media (max-width:900px){
          .podcast-card{grid-template-columns:1fr;}
          .right{order:-1}
        }
      `}</style>

                <div className="podcast-card" role="region" aria-label="Podcast service overview" data-aos="zoom-in">



                    <div className="left">
                        <h2 id="podcast-heading">Show Up. Talk. Leave the rest to us.</h2>
                        <p className="lead">Born from Digiware’s creative powerhouse, <strong>24 Pods</strong> exists to take the heavy lifting off your shoulders so you can focus on what matters — showing up and talking.</p>

                        <div className="bullets">
                            <div className="bullet"><span className="dot" aria-hidden></span><p className="small"><strong>We shoot.</strong> </p></div>
                            <div className="bullet"><span className="dot" aria-hidden></span><p className="small"><strong>We edit.</strong></p></div>
                            <div className="bullet"><span className="dot" aria-hidden></span><p className="small"><strong>We post.</strong></p></div>
                            <div className="bullet"><span className="dot" aria-hidden></span><p className="small"><strong>We market.</strong></p></div>
                        </div>
                    </div>

                    <aside className="right" aria-label="Podcast preview">
                        <div className="wave-wrap">
                            <div className="play" role="button" aria-label="Play preview">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7L8 5z" fill="#660033" /></svg>
                            </div>

                            <div className="wave" aria-hidden>
                                {/* simple waveform made with SVG bars */}
                                <svg viewBox="0 0 200 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="g1" x1="0" x2="1">
                                            <stop offset="0%" stopColor="#e0afff" />
                                            <stop offset="100%" stopColor="#660033" />
                                        </linearGradient>
                                    </defs>
                                    <g fill="url(#g1)">
                                        {/* repeat bars */}
                                        {Array.from({ length: 30 }).map((_, i) => {
                                            const h = 6 + Math.abs(Math.sin(i * 0.6)) * 36;
                                            const x = 4 + i * 6;
                                            return <rect key={i} x={x} y={48 - h} width={4} height={h} rx={2} />
                                        })}
                                    </g>
                                </svg>
                            </div>
                        </div>


                    </aside>
                </div>
            </section>
            <div className="about-third">
                <div className="about-container about-third-section container">

                    <div className="text-section" style={{ marginBottom: "0" }} data-aos="fade-right">
                        <h1>
                            The Story Behind <span className="highlight">24 Pods</span>
                        </h1>
                        <div className="paragraph">

                            <p style={{ marginBottom: '0' }}>
                                <span style={{ color: "#e0afff", fontWeight: "700" }}>The 24PODS,</span><br></br> 24 comes from our founder Alaka’s birth date. Pods is our shorthand for what we live and breathe — podcasts.<br></br>
                                For over 10 years, Alka has been obsessed with how stories land. In branding, in campaigns, in content — she’s seen that the real magic doesn’t happen when you talk. It happens when you listen.<br></br><br></br>

                                <span style={{ color: "#e0afff", fontWeight: "700" }}> At 24PODS,</span><br></br> We start by listening to your raw recording. We hear where the emotion builds, where the curiosity spikes, where the audience will lean in… and where they might drop off. Then we shape it. Cut it. Colour it. Package it. Market it.<br></br>

                                AI is part of our toolkit, but it’s never the driver. Because podcasts are human conversations — and only a human ear knows when something truly clicks.
                            </p>
                        </div>
                    </div>
                    <div className="image-section" data-aos="fade-left">
                        <img src="/images/alka-img.jpeg" alt="" />
                    </div>



                </div>
            </div>
            <div className="video-container guest-third-section">
                <video
                    className="bg-video"
                    src="/videos/garima-and-rachecl.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        objectPosition: "center"
                    }}
                />
                <div className="overlay" style={{ backgroundColor: "#f3f3f33d" }} />

                <div className="home-content guest-third">
                    <h5 style={{ color: "#660033", paddingBottom: "10px" }} data-aos="fade-down">Why We Exist</h5>
                    <p className='about-gif-pargharph' data-aos="zoom-in" style={{ margin: "0" }}>We’re here so your podcast doesn’t just “go live” — it lives in people’s heads.
                        We don’t want you to be another show in the feed. We want you to be the show people tell their friends about.</p>
                    <button className="button home-button" data-aos="fade-up">
                        <a href="/contact_us">Join Us</a>
                    </button>
                </div>
            </div>
            <div className="about-third">
                <div className="about-container about-third-section container">

                    <div className="text-section" style={{ marginBottom: "0" }}>
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
                                <li style={{ marginBottom: "0" }} data-aos="fade-right"><span><HiOutlineSpeakerphone /></span> Ads can get reach… but if the story doesn’t hook, no one sticks.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="image-section about-image-section" data-aos="zoom-in">
                        <img src="/images/team.jpeg" alt="" />
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
                                <h2 style={{ color: "#fff" }}>Lorem Ipsum</h2>
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
                                <h2 style={{ color: "#fff" }}>Lorem Ipsum</h2>
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
                                <h2 style={{ color: "#fff" }}>Lorem Ipsum</h2>
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
                                <h2 style={{ color: "#fff" }}>Lorem Ipsum</h2>
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


