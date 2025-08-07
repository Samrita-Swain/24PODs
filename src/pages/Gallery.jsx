import React, { useState } from 'react';

const tabs = ['All', 'Lorem Ipsum', 'Lorem Ipsum 2', 'Lorem Ipsum 3'];

const galleryItems = [
    { id: 1, category: 'Lorem Ipsum', src: 'images/about-1.jpg' },
    { id: 2, category: 'Lorem Ipsum 2', src: 'images/about-2.jpg' },
    { id: 3, category: 'Lorem Ipsum 3', src: 'images/about-3.jpg' },
    { id: 4, category: 'Lorem Ipsum', src: 'images/about-2.jpg' },
    { id: 5, category: 'Lorem Ipsum', src: 'images/about-1.jpg' },
    { id: 6, category: 'Lorem Ipsum 2', src: 'images/about-3.jpg' },
    { id: 7, category: 'Lorem Ipsum 3', src: 'images/about-1.jpg' },
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('All');

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
            <div className="gallery-first">
                <div className="content">
                    <h1>Gallery</h1>
                </div>
            </div>
            <div className="gallery-wrapper">
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

                <div className="gallery-grid">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <img src={item.src} alt={`Gallery ${item.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery







