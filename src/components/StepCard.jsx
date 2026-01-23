
export default function StepCard({ number, title, desc }) {
  return (
    <div className="rr-step-card">
      <span className="rr-number">{number}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
