import React, { useRef, useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import emailjs from "@emailjs/browser";
import { FromRealityForm } from "./form/FromRealityForm";

const tabs = ['All', 'Lorem Ipsum', 'Lorem Ipsum 2', 'Lorem Ipsum 3'];

// src/data.js
const videoData = [
  {
    id: 1,
    tab: "All",
    thumbnail: "/images/IFR-1.png",
    videoUrl: "/videos/garima & rachecl.mp4"
  },
  {
    id: 2,
    tab: "Lorem Ipsum",
    thumbnail: "/images/about-2.jpg",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 3,
    tab: "Lorem Ipsum 3",
    thumbnail: "/images/about-3.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 4,
    tab: "Lorem Ipsum 2",
    thumbnail: "/images/about-2.jpg",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 5,
    tab: "Lorem Ipsum 2",
    thumbnail: "/images/about-3.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];


const FromReality = () => {
  useEffect(() => {
          AOS.init({
              duration: 1000,
              once: false,
              mirror: true
          });
      }, []);
  const [selectedTab, setSelectedTab] = useState('All');
  const [currentVideo, setCurrentVideo] = useState(null);

  const filteredVideos =
    selectedTab === 'All'
      ? videoData
      : videoData.filter(video => video.tab === selectedTab);

       const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccessMsg("Your form has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          setErrorMsg("Failed to send. Please try again later.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="gallery-first from-reality-first">
        <div className="content">
          <h1>Inspire From Reality</h1>
        </div>
      </div>
      <div className="tabs-container" >
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={selectedTab === tab ? 'tab active' : 'tab'}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {!currentVideo ? (
          <div className="videos-grid">
            {filteredVideos.map(video => (
              <div key={video.id} className="video-card">
                <img
                  src={video.thumbnail}
                  alt="Thumbnail"
                  onClick={() => setCurrentVideo(video.videoUrl)}
                />
                <button className="play-btn" onClick={() => setCurrentVideo(video.videoUrl)}>
                  ▶
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="fullscreen-video">
            <video controls autoPlay src={currentVideo} />
            <button className="cancel-btn" onClick={() => setCurrentVideo(null)}>Cancel</button>
          </div>
        )}
      </div>
      <FromRealityForm />
    </div>
  )
}

export default FromReality


