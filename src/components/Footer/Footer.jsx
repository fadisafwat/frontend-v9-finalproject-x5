import './Footer.css'
function Footer() {
    return (
        <>
            <div className="ib-footer">

                <div className="ib-top-footer">
                    <div className="ib-left-top-footer">
                        <div className="ib-logo-hiddenitm">
                            <div className="ib-shop-logo">
                                <img src="./assets/img/shoplogo.svg" alt="shoplogo" className="ib-shop-logo-img" />
                            </div>
                            <div className="ib-small-screen">
                                <div className="ib-applications">
                                    <img src="./assets/img/facebook.svg" alt="facebook" />
                                    <img src="./assets/img/twitter.svg" alt="twitter" />
                                    <img src="./assets/img/in.svg" alt="in" />
                                </div>
                            </div>
                        </div>
                        <div className="ib-email-sub-btn">
                            <input className="ib_user_email" type="email" placeholder='Enter Your Email' />
                            <button className="ib-subscribe-btn">Subscribe</button>
                        </div>
                    </div>
                    <div className="ib-right-top-footer">
                        <div className="ib-links">
                            <h3>Home</h3>
                            <div className="ib-link-itms">
                                <p>Features</p>
                                <p>Popular Products</p>
                                <p>Testimonials</p>
                                <p>FAQ</p>
                            </div>
                        </div>
                        <div className="ib-links">
                            <h3>Menswear</h3>
                            <div className="ib-link-itms">
                                <p>Casual</p>
                                <p>Formal</p>
                                <p>Party</p>
                                <p>Business</p>
                            </div>
                        </div>
                        <div className="ib-links">
                            <h3>Womenswear</h3>
                            <div className="ib-link-itms">
                                <p>Casual</p>
                                <p>Formal</p>
                                <p>Party</p>
                                <p>Business</p>
                            </div>
                        </div>
                        <div className="ib-small-link">
                            <h3>Kidswear</h3>
                            <div className="ib-link-itms">
                                <p>Casual</p>
                                <p>Formal</p>
                                <p>Party</p>
                            </div>
                        </div>
                        <div className="ib-home-prod-cont">
                            <h3>Home</h3>
                            <h3>Products</h3>
                            <h3>Contact</h3>
                        </div>

                    </div>
                </div>
                <div className="ib-buttom-footer">
                    <div className="ib-term-priv" >
                        <div className="ib-p-ter">
                            <p>Terms & Conditions</p>
                        </div>
                        <div className="ib-p-priv">
                            <p>Privacy Policy</p>
                        </div>

                    </div>
                    <div className="ib-big-screen">
                        <div className="ib-applications">
                            <img src="./assets/img/facebook.svg" alt="facebook" />
                            <img src="./assets/img/twitter.svg" alt="twitter" />
                            <img src="./assets/img/in.svg" alt="in" />
                        </div>
                    </div>
                    <div className="ib-klothink">
                        <p>© 2024 Klothink. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
