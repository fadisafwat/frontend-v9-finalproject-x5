import './Cards.css';
import testimonials from '../../Data/ib_data_card_slider'


function Cards({ currentIndex, cardsPerView }) {
    const movePercent = cardsPerView === 1 ? 104.5 : 35.6;
    return (
        <>
            <div className="ib-cont-card">
                {testimonials.map((testimonial, index) => {
                    return (
                        <div className="ib-card" key={index}
                            style={{
                                transform: `translateX(-${currentIndex * movePercent}%)`
                            }}
                        >

                            <div className="ib-card-top">
                                <div className="ib-card-personalinfo">
                                    <img src={testimonial.image} alt="personalphoto" className="ib-personalphoto" />
                                    <div className="ib-nameandstar">
                                        <h2>{testimonial.name}</h2>
                                        <img src="/assets/img/stars.svg" alt="stars" className="ib-stars" />
                                    </div>
                                </div>
                                <img src="/assets/img/Doublequotes.svg" alt="quotes" className="ib-quotes" />
                            </div>
                            <p className="ib-description">{testimonial.text}</p>
                        </div>

                    )
                })}
            </div>
        </>
    );
}

export default Cards;