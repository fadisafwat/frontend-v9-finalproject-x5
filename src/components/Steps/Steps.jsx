
import StepCard from './StepCard'
import './Steps.css'


export default function Steps() {
  const steps = [
    { number: '01', title: 'Discover Trends', desc: 'Explore our curated collection of over 1000 styles' },
    { number: '02', title: 'Secure Checkout', desc: 'Add your items to the cart and proceed to our secure checkout' },
    { number: '03', title: 'Swift Dispatch', desc: 'Experience 95% same-day dispatch on orders.' },
    { number: '04', title: 'Unbox Happiness', desc: 'Receive your carefully packaged Klothink order.' }
  ]

  return (
    <section className="rr-steps rr-marginLeftRight">
      <div className="rr-H1SPAN">
      
        <h1  className="rr-SeamContent rr-H1" >SEAMLESS EXPERIENCE.</h1>
        <p className="rr-SPAN">How it Works ?</p>
      </div>
      
      <p className="rr-PContent">At Klothink, we've designed a straightforward shopping experience to make fashion accessible. Explore the journey from discovering the latest trends to receiving your handpicked styles with ease.</p>
      <div className="rr-steps-grid">
        {steps.map(step => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>
    </section>
  )
}
