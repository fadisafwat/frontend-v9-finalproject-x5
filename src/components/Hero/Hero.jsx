
import Button from './Button'
import StatCard from './StatCard'
import './Hero.css'


export default function Hero() {
  return (
    <section className="rr-hero marginLeftRight">
      <div className="rr-hero-text">
        
        <div className="rr-H1SPAN">
          <h1 className="rr-H1">ELEVATE YOUR STYLE WITH KLOTHINK </h1>
          <span className="rr-label rr-SPAN">STYLE REDEFINED.</span>

        </div>
        
        
        <p>Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.</p>

        <div className="rr-actions">
          <Button variant="rr-primary rr-action"><img src="/assets/img/Icon.svg" />Shop Now</Button>
          <Button variant="rr-secondary">Contact Us</Button>
        </div>

        <div className="rr-stats">
          <StatCard title="OVER 1000+" subtitle="Trendsetting Styles" />
          <StatCard title="99%" subtitle="Customer Satisfaction Rate" />
          <StatCard title="24/7" subtitle="Shopping Convenience" />
          <StatCard title="30-DAY" subtitle="Hassle-Free Returns" />
        </div>
      </div>

      <div className="rr-hero-image">
        <img src="/assets/img/hero.png" />
      </div>
    </section>
  )
}
