
export default function Button({ children, variant = 'primary' }) {
  return (
    <button className={variant}>
      {children}
    </button>
  )
}
