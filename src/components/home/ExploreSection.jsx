import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle.jsx'
const categories = [
  ['Carros', 'Engenharia, aerodinâmica e evolução', '/carros', 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85'],
  ['Pilotos', 'Os nomes por trás dos capacetes', '/pilotos', 'https://images.unsplash.com/photo-1532906619279-a4b7267c7b8a?auto=format&fit=crop&w=900&q=85'],
  ['Equipes', 'As escuderias e suas histórias', '/equipes', 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=85'],
  ['Pistas', 'Circuitos lendários pelo mundo', '/pistas', 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85'],
  ['Calendário', 'Etapas, sessões e resultados', '/calendario', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85'],
  ['Senna', 'A trajetória de um ícone', '/senna', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85']
]
export default function ExploreSection() {
  return (
    <section className="section section-wide" id="explorar">
      <SectionTitle eyebrow="DESCUBRA" title="Explore a Fórmula 1"/>
      <p className="section-intro">Do cockpit às arquibancadas: conheça cada parte do universo que faz da Fórmula 1 uma paixão mundial.</p>
      <div className="category-grid">
        {categories.map(([name, desc, path, image], i) => <Link to={path} className="category-card" key={name}>
          <img src={image} alt="" loading="lazy"/><span className="category-number">0{i + 1}</span>
          <div><h3>{name}</h3><p>{desc}</p></div><ArrowUpRight className="category-arrow" size={21}/>
        </Link>)}
      </div>
    </section>
  )
}
