import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
export default function PlaceholderPage({ title, description }) {
  return (
    <main className="placeholder-page">
      <span className="eyebrow">THE PADDOCK · EM CONSTRUÇÃO</span>
      <h1>{title}</h1><p>{description}</p>
      <Link className="outline-button" to="/"><ArrowLeft size={16}/> Voltar para a página inicial</Link>
    </main>
  )
}
