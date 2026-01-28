import React, { useState, useEffect } from 'react';
import './SliderTestimonials.css';
import './Cards.css';
import Cards from './Cards';
import testimonials from '../../Data/ib_data_card_slider'
import next from '/assets/img/nextbtn.png'
import previous from '/assets/img/prevbtn.png'



function SliderTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 992) {
                setCardsPerView(1);
            } else {
                setCardsPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const nextSlide = () => {
        setCurrentIndex((prev) =>
            (prev < testimonials.length - cardsPerView + 6 ? prev + 1 : prev)
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div className="ib-testimonial-slider">
            <button className="ib-pre-btn" onClick={prevSlide}>
                <img src={previous} alt="Previous" />
            </button>
            <button className="ib-next-btn" onClick={nextSlide}>
                <img src={next} alt="Next" />
            </button>
            <div className="ib-testimonial-container">
                <Cards currentIndex={currentIndex}
                    cardsPerView={cardsPerView} />
            </div>
        </div>
    );
}

export default SliderTestimonials;





















