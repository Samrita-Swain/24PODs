import React, { useState } from 'react';

const tabs = ['All', 'Lorem Ipsum', 'Lorem Ipsum 2', 'Lorem Ipsum 3'];

// src/data.js
const videoData = [
  {
    id: 1,
    tab: "All",
    thumbnail: "/images/IFR-1.png",
    videoUrl: "/images/garima & rachecl.mp4"
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
  const [selectedTab, setSelectedTab] = useState('All');
  const [currentVideo, setCurrentVideo] = useState(null);

  const filteredVideos =
    selectedTab === 'All'
      ? videoData
      : videoData.filter(video => video.tab === selectedTab);

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
    </div>
  )
}

export default FromReality


