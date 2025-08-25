import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MemberForm } from './form/MemberForm';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TiTick } from "react-icons/ti";

import { Pagination } from "swiper/modules";

const testimonials = [
    {
        name: "Lorem Ipsum",
        subtitle: "dummy text",
        image: "https://i.pravatar.cc/50?img=1",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        name: "Lorem Ipsum",
        subtitle: "dummy text",
        image: "https://i.pravatar.cc/50?img=2",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        name: "Lorem Ipsum",
        subtitle: "dummy text",
        image: "https://i.pravatar.cc/50?img=2",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
];

const featuresLeft = [
    {
        title: "Two Professionally Edited Episodes Every Month",
        subtitle: "Clean, sharp, audience-ready.",
    },
    {
        title: "Partner Studio Access",
        subtitle: "Book our partner studio space to record in a pro environment.",
    },
    {
        title: "CRM & Newsletter Management",
        subtitle: "We manage your subscribers and keep your listeners engaged.",
    },
    {
        title: "Automated Reviews",
        subtitle: "Collect and showcase reviews effortlessly.",
    },
];

const featuresRight = [
    {
        title: "Social Media Reels & Posting",
        subtitle: "Scroll-stopping content cut straight from your episodes.",
    },
    {
        title: "Awareness Campaigns",
        subtitle: "Get your podcast discovered by the right audience.",
    },
    {
        title: "Guest Management",
        subtitle: "We connect you with guests — and line up guest appearances for you on other podcasts.",
    },
    {
        title: "Personalised Landing Page",
        subtitle: "Your own profile page, linked to your socials and podcast channel.",
    },
];

const Welcome = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);
    return (
        <div>
            <div className="welcome-first">
                <div className="content">
                    <h1>welcome to members club</h1>
                </div>
            </div>
            <div className="about-third">
                <div className="about-container about-third-section">

                    <div className="text-section" data-aos="zoom-in-right" style={{ marginBottom: "0" }}>
                        <h1>
                            Why Join <span className="highlight">PodsMembership?</span>
                        </h1>
                        <div className="paragraph guest-fifth">
                            {/* <div className="straight-line"></div> */}
                            <p style={{ marginBottom: "15px" }}>
                                Most podcasters quit because of the workload: editing, finding guests, posting clips, running campaigns, chasing reviews. It’s too much.
                            </p>
                            <p style={{ marginBottom: "15px" }}>With PodsMembership, you don’t have to.</p>
                            <p>We take the chaos off your plate — so <span className="highlight">your podcast not only survives, it thrives.</span></p>
                        </div>
                        <button className="button menu-button mt-6 help-button" style={{ marginBottom: "0" }}>
                            <a href="/contact_us">Join Us</a>
                        </button>
                    </div>

                    <div className="image-section" data-aos="zoom-in-left">
                        <img src="/images/two.png" alt="" />
                    </div>

                </div>
            </div>
            <div className="testimonial-section">
                <img src="/images/white-bg.png" alt="" className='testimonial-section-img' />
                <div className="testimonial-title">
                    <h1>
                        What  <span className="highlight">You Get</span>
                    </h1>
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="testimonial-swiper"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 }
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <img src={item.image} alt="Client" className="client-img" />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <span className="subtitle">{item.subtitle}</span>
                                    </div>
                                </div>
                                <p className="testimonial-text">{item.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
            

            <section className="wy-section" aria-labelledby="wy-title">
                <div className="wy-container">
                    <header className="wy-header">
                        <h2 id="wy-title">What <span style={{ color: "#e0afff" }}>You’ll Get</span></h2>
                        <p className="wy-subtitle">
                            A complete, done-for-you stack—from recording to growth.
                        </p>
                    </header>

                    <div className="wy-grid">
                        {/* Left column */}
                        <ul className="wy-list" aria-label="Included benefits" data-aos="fade-up-right">
                            {featuresLeft.map((item, idx) => (
                                <li className="wy-item" key={`L-${idx}`}>
                                    <span className="wy-icon" aria-hidden="true">
                                        <TiTick />
                                    </span>
                                    <div className="wy-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Center image */}
                        <figure className="wy-figure" data-aos="zoom-in">
                            <div className="wy-imageWrap">
                                <img
                                    src="/images/alaka.jpeg"
                                    alt="Studio session snapshot"
                                    loading="lazy"
                                />
                                <div className="wy-imageGlow" aria-hidden="true" />
                            </div>

                        </figure>

                        {/* Right column */}
                        <ul className="wy-list" aria-label="More benefits" data-aos="fade-up-left">
                            {featuresRight.map((item, idx) => (
                                <li className="wy-item" key={`R-${idx}`}>
                                    <span className="wy-icon" aria-hidden="true">
                                        <TiTick />
                                    </span>
                                    <div className="wy-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
            </section>

            <section className="investment-section" aria-labelledby="investment-heading" style={{ background: "#f9f9f9" }}>
                <div className="investment-container">
                    <div className="investment-card" role="region" aria-label="Investment offering" data-aos="fade-up">
                        <div className="investment-content">
                            <h2 id="investment-heading" className="investment-title">The Investment</h2>
                            <p className="investment-subtitle">
                                All of this — production, post-production, marketing, and growth — for:
                            </p>

                            <div className="investment-price" aria-hidden>
                                <span className="price-icon">💰</span>
                                <span className="price-amount">$1,899</span>
                                <span className="price-period">per month</span>
                            </div>

                            <ul className="investment-list" aria-hidden>
                                <li>✔ Production</li>
                                <li>✔ Post-production</li>
                                <li>✔ Marketing</li>
                                <li>✔ Growth</li>
                            </ul>

                            <div className="investment-actions">
                                <a href="/contact_us" className="cta-button" role="button">
                                    👉 Let us be your Own-Own PodsTeam
                                </a>
                                

                                <div className="limited-box" aria-live="polite">
                                    ⚡️ Limited to <strong>10 members</strong> only.
                                </div>
                            </div>

                            <p className="investment-note">Because we believe in quality, not quantity.</p>
                        </div>

                        <div className="investment-includes" aria-label="What's included">
                            <h3>What's included</h3>
                            <ol>
                                <li>✅ Dedicated Producer</li>
                                <li>✅ 8 episodes/month</li>
                                <li>✅ Distribution + Ads</li>
                                <li>✅ Monthly growth report</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <MemberForm />
        </div >
    )
}

export default Welcome
