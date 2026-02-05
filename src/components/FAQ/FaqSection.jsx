import { useState } from "react";
import "./FaqSection.css";


const plusIcon ="./assets/img/plus.png";
const closeIcon ="./assets/img/close.png";

const faqData = [
    {
        question: "How can I place an order on Klothink?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Ordering"
    },
    {
        question: "How can I place an order on Klothink?",
        answer: "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Ordering"
    },
    {
        question: "Are there any additional fees for returns?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Shipping"
    },
    {
        question: "How do I initiate a return?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Returns"
    },
    {
        question: "What payment methods do you accept?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Customer Support"
    },
    {
        question: "How do I create an account on Klothink?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Customer Support"
    },
    {
        question: "How can I unsubscribe from the newsletter?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Customer Support"
    },
    {
        question: "How can I track my order?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Customer Support"
    },
    {
        question: "Can I change my account information?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Customer Support"
    },
    {
        question: "Do you offer exchanges for products?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Customer Support"
    },
    {
        question: "What is your shipping policy?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Customer Support"
    },
    {
        question: "Are my personal details secure on Klothink?",
        answer:"Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Customer Support"
    },
];

function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeTab, setActiveTab] = useState("All");
    const [showAllMobile, setShowAllMobile] = useState(false);

    const filteredFaqs =
        activeTab === "All"
            ? faqData
            : faqData.filter(item => item.category === activeTab);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="gd-faq rr-marginLeftRight">
            <div className="gd-containerr">
            <div className="gd-faq-header">
                <div className="gd-faq-title-row">
                <h2 className="gd-faq-title">Questions? We Have Answers.</h2>
                <span className="gd-faq-small">FAQ</span>
                </div>
                <p className="gd-faq-description">
                    Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience.
                </p>
                            
                <button className="gd-faq-viewall"  onClick={() => setShowAllMobile(!showAllMobile)}>
                            {showAllMobile ? " View Less FAQ’s" : "View All FAQ’s"} </button>
            </div>
            
            


            <div className="gd-faq-tabs">
                {["All", "Ordering", "Shipping", "Returns", "Customer Support"].map(tab => (
                    <button
                        key={tab}
                        className={activeTab === tab ? "active" : ""}
                        onClick={() => {
                            setActiveTab(tab);
                            setActiveIndex(null);
                            setShowAllMobile(false);
                        }}>
                        {tab}
                    </button>
                ))}
            </div>
            

            <div className={`gd-faq-list ${showAllMobile ? "show-all" :""}`}>
                {filteredFaqs.map((item, index) => (
                    <div className="gd-faq-item" key={index}>
                        <div
                            className="gd-faq-question"
                            onClick={() => toggleItem(index)}>
                        
                            <h4>{item.question}</h4>
                            <img
                                src={activeIndex === index ? closeIcon : plusIcon}
                                alt="toggle"
                            />
                        </div>
                        

                        {activeIndex === index && (
                            <p className="gd-faq-answer">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}
export default FaqSection;

