import React, { useState } from 'react';

// src/data.js
const tabData = [
    {
        id: 1,
        title: "Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/images/about-1.jpg",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/images/about-2.jpg",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/images/about-3.jpg",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        id: 4,
        title: "Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/images/about-2.jpg",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }
];



const Vblogs = () => {
    const [activeTab, setActiveTab] = useState(tabData[0]);


    return (
        <div>
            <div className="vblogs-first">
                <div className="content">
                    <h1>Vblogs</h1>
                </div>
            </div>
            <div className="vertical-tabs-container ">
                <div className="left-panel">
                    <img src={activeTab.image} alt={activeTab.title} className="main-image" />
                    <h1 className="image-title">{activeTab.title}</h1>
                    <p className="image-description">{activeTab.content}</p>
                </div>

                <div className="right-panel">
                    {tabData.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tab-item ${activeTab.id === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <img src={tab.image} alt={tab.title} />
                            <div className="tab-text">
                                <h4>{tab.title}</h4>
                                <p>{tab.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Vblogs






