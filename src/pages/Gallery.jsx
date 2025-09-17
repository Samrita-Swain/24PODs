import React, { useState } from "react";

const categories = ["All", "Our Lunch", "BTS Moments"];

const videos = [
  { id: 1, category: "Our Lunch", src: "/images/garima-alka-vblogs.png" },
  { id: 2, category: "Our Lunch", src: "/images/garima-rachecl.png" },
  { id: 3, category: "BTS Moments", src: "/images/team.jpeg" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [modalImage, setModalImage] = useState(null);

  const filteredVideos =
    activeTab === "All"
      ? videos
      : videos.filter((video) => video.category === activeTab);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  
  return (
    <section>
      {/* Banner */}
      <div className="gallery-banner d-flex align-items-center justify-content-center text-center">
        <h1 className="gallery-title">Gallery</h1>
      </div>

      <div className="gallery-section container py-5">
        {/* Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn rounded-pill px-4 py-2 fw-medium tab-btn ${
                activeTab === category ? "active-tab" : "outline-tab"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="row g-4 justify-content-center">
          {filteredVideos.map((video) => (
            <div key={video.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div
                className="video-card"
                onClick={() => openModal(video.src)}
                role="button"
              >
                <img
                  src={video.src}
                  alt="Thumbnail"
                  className="video-thumbnail"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {modalImage && (
        <div className="custom-modal" onClick={closeModal}>
          <span
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            &times;
          </span>
          <img src={modalImage} alt="Preview" className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
