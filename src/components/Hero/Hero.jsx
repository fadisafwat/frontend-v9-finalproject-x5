
import Button from './Button'
import StatCard from './StatCard'
import './Hero.css'


export default function Hero() {
  return (
    <section className="rr-hero rr-marginLeftRight">
      <div className="rr-hero-text">
        
        <div className="rr-H1SPAN">
          <h1 className="rr-H1">ELEVATE YOUR STYLE WITH KLOTHINK </h1>
          <span className="rr-label rr-SPAN">STYLE REDEFINED.</span>

        </div>
        
        
        <p>Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.</p>

        <div className="rr-actions">
          <div className="iconwithshop">
          <Button variant="rr-primary "><img src="/assets/img/Icon.svg" className="IconHero" /><span className="ShopNow">Shop Now</span></Button>
          </div>
          <Button variant="rr-secondary ">Contact Us</Button>
        </div>

        <div className="rr-stats">
          <StatCard title="OVER 1000+" subtitle="Trendsetting Styles" />
          <StatCard title="99%" subtitle="Customer Satisfaction Rate" />
          <StatCard title="24/7" subtitle="Shopping Convenience" />
          <StatCard title="30-DAY" subtitle="Hassle-Free Returns" />
          
          
        </div>
      </div>

      <div className="rr-hero-image">
         <picture>
              {/* الصورة للشاشات الصغيرة (أقل من 768 بكسل) */}
              <source media="(max-width: 768px)" srcSet="/assets/img/heromobile.png" />
              
              {/* الصورة الافتراضية للشاشات الكبيرة */}
              <img src="/assets/img/hero.png" alt="Elevate Your Style" />
        </picture>
      </div>
    </section>
  )
}
