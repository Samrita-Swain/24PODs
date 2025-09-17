import React, { useState } from 'react';

// ✅ Import your images correctly
import thumbnail1 from '/images/IFR-1.png';
import thumbnail2 from '/images/about-2.jpg';
import thumbnail3 from '/images/about-3.jpg';
import { Container } from 'react-bootstrap';
import GuestForm from '../form/GuestForm';

const categories = ['All', 'Lorem Ipsum', 'Lorem Ipsum 2', 'Lorem Ipsum 3'];

// ✅ Use imported image references here
const videos = [
  { id: 1, category: 'Lorem Ipsum', thumbnail: thumbnail1 },
  { id: 2, category: 'Lorem Ipsum', thumbnail: thumbnail2 },
  { id: 3, category: 'Lorem Ipsum 2', thumbnail: thumbnail3 },
  { id: 4, category: 'Lorem Ipsum', thumbnail: thumbnail2 },
  { id: 5, category: 'Lorem Ipsum 3', thumbnail: thumbnail1 },
  { id: 6, category: 'Lorem Ipsum 3', thumbnail: thumbnail2 },
];

const Reality = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos =
    activeCategory === 'All'
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <section>
        <div className="reality-banner d-flex align-items-center justify-content-center text-center">
      <h1 className="reality-title">Inspire From Reality</h1>
    </div>
        {/* <div className="video-gallery-section">
      <Container>
        <div className="video-filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="video-grid">
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-card">
            <img src={video.thumbnail} alt="video thumbnail" className="video-thumbnail" />
            <div className="play-button">&#9658;</div>
          </div>
        ))}
      </div>
      </Container>
    </div> */}
    <GuestForm />
    </section>
  );
};

export default Reality;
