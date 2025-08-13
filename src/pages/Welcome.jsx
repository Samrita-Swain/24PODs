import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { MemberForm } from './form/MemberForm';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

                    <div className="text-section" data-aos="zoom-in-right" style={{marginBottom:"0"}}>
                        <h1>
                            Why Choose <span className="highlight">US?</span>
                        </h1>
                        <div className="paragraph guest-fifth">
                            {/* <div className="straight-line"></div> */}
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <button className="button menu-button mt-6 help-button" style={{marginBottom:"0"}}>
                            <a href="/contact_us">Join Us</a>
                        </button>
                    </div>

                    <div className="image-section" data-aos="zoom-in-left">
                        <img src="/images/about-third.png" alt="" />
                    </div>

                </div>
            </div>
            <div className="testimonial-section">
                <img src="/images/white-bg.png" alt="" className='testimonial-section-img'/>
                <div className="testimonial-title">
                    <h1>
                    What <span className="highlight">Our Client</span> Say’s
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
            <MemberForm />
        </div>
    )
}

export default Welcome
