import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="footer">
      <Link className="brand" to="/">THE <span>PADDOCK</span><i>.</i></Link>
      <p>História, tecnologia e velocidade. Uma enciclopédia para quem vive a Fórmula 1.</p>
      <span>© {new Date().getFullYear()} THE PADDOCK · PROJETO INDEPENDENTE</span>
    </footer>
  )
}
