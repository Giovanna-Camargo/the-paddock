import SectionTitle from '../common/SectionTitle.jsx'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
const items = [
  { tag: 'LEGADO', title: 'Ayrton Senna: velocidade que virou eternidade', image: 'https://images.unsplash.com/photo-1532906619279-a4b7267c7b8a?auto=format&fit=crop&w=1200&q=85', large: true },
  { tag: 'TEMPORADA', title: 'Os protagonistas de uma nova era', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85' },
  { tag: 'HISTÓRIA', title: 'Circuitos que desafiam os limites', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85' }
]
export default function FeaturedSection() {
  return (
    <section className="section section-wide" id="destaques">
      <SectionTitle eyebrow="CURADORIA THE PADDOCK" title="Em destaque" linkTo="/senna"/>
      <div className="highlights-grid">
        {items.map(item => <article className={`highlight-card ${item.large ? 'feature-large' : ''}`} key={item.title}>
          <img src={item.image} alt="" loading="lazy"/><div className="card-gradient"/>
          <div className="card-copy"><span className="eyebrow">{item.tag}</span><h3>{item.title}</h3><Link className="card-read" to="/senna">Explorar conteúdo <ArrowUpRight size={15}/></Link></div>
        </article>)}
      </div>
    </section>
  )
}
