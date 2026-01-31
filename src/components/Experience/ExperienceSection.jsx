import React, { useState, useEffect } from "react";
import "./ExperienceSection.css";

const arrowDown="/assets/img/arrow.png";

export default function ExperienceSection() {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const features = [
        { img: "craft.png", title: "Passionate Craftsmanship", description: "Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation." },
        { img: "fashion.png", title: "Fashion Forward", description: "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence." },
        { img: "customer.png", title: "Customer-Centric Approach", description: "At Klothink, our customers are at the heart of everything we do. Your satisfaction is our measure of success." },
        { img: "global.png", title: "Global Inspiration", description: "Influenced by global trends, we bring you a diverse and dynamic collection." },
        { img: "style.png", title: "Empowering Your Style", description: "Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression." },
        { img: "sustainable.png", title: "Sustainable Practices", description: "Klothink is committed to sustainability, integrating eco-friendly practices into our production process." }
    ];

    const visibleFeatures = isMobile && !showAll ? features.slice(0, 2) : features;

    return (
        
        <section className="gd-experience rr-marginLeftRight">
            <div className="gd-container">
                <div className="gd-header">
                    <h2 className="gd-title">THE KLOTHINK EXPERIENCE.</h2>
                    <span className="gd-about">ABOUT US</span>
                </div>

                <p className="gd-description">
                    At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story.
                </p>

                <div className="gd-cards">
                    {visibleFeatures.map((item, index) => (
                        <div className="gd-feature-card" key={index}>
                            <div className="header">
                                <img src={`/assets/img/${item.img}`} alt={item.title}  className="gd-icon"/>
                                <h3>{item.title}</h3>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {isMobile && (
                <button
                    className="gd-view-btn"
                    onClick={() => setShowAll(!showAll)}>
                    <span className="text">View All</span>
                    <img src={arrowDown} alt="arrow" className="icon" />
                </button>
            )}
        </section>
    );
}
