import './CustomersLove.css'
import ViewAllButton from './ViewAllButton'
const CustomersLove = () => {
    return (
        <div className="ib-customers-love">
            <div className="ib-container-items">
                <div className="ib-title-container">
                    <h1>CUSTOMERS LOVE.</h1>
                    <p className="ib-small-text">TESTIMONIALS</p>
                </div>
                <p className="ib-description">
                    At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion.
                </p>
            </div>
            <ViewAllButton />
        </div>
    )
}

export default CustomersLove
