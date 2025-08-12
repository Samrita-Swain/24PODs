import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const tabs = ['All', 'Lorem Ipsum', 'Lorem Ipsum 2', 'Lorem Ipsum 3'];

const galleryItems = [
    { id: 1, category: 'Lorem Ipsum', src: '/images/about-1.jpg' },
    { id: 2, category: 'Lorem Ipsum 2', src: '/images/about-2.jpg' },
    { id: 3, category: 'Lorem Ipsum 3', src: '/images/about-3.jpg' },
    { id: 4, category: 'Lorem Ipsum', src: '/images/about-2.jpg' },
    { id: 5, category: 'Lorem Ipsum', src: '/images/about-1.jpg' },
    { id: 6, category: 'Lorem Ipsum 2', src: '/images/about-3.jpg' },
    { id: 7, category: 'Lorem Ipsum 3', src: '/images/about-1.jpg' },
];

const Gallery = () => {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                once: false,
                mirror: true
            });
        }, []);
        
    const [activeTab, setActiveTab] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems =
        activeTab === 'All'
            ? galleryItems
            : galleryItems.filter(
                (item) =>
                    item.category.trim().toLowerCase() ===
                    activeTab.trim().toLowerCase()
            );

    return (
        <div>
            {/* Banner */}
            <div className="gallery-first">
                <div className="content">
                    <h1>Gallery</h1>
                </div>
            </div>

            {/* Tabs */}
            <div className="gallery-wrapper" data-aos="zoom-in">
                <div className="tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item"
                            onClick={() => setSelectedImage(item.src)}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={item.src} alt={`Gallery ${item.id}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Lightbox */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="lightbox-close"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        <img src={selectedImage} alt="Enlarged view" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
