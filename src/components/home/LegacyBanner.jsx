import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function LegacyBanner() {
  return (
    <section className="legacy section-wide" id="senna">
      <img src="https://images.unsplash.com/photo-1532906619279-a4b7267c7b8a?auto=format&fit=crop&w=1800&q=85" alt="" loading="lazy"/>
      <div className="legacy-overlay"/>
      <div className="legacy-content"><span className="eyebrow">UM LEGADO ETERNO</span><h2>AYRTON<br/><span>SENNA</span></h2>
        <p>Mais do que títulos e vitórias: uma história que ultrapassou as pistas e marcou gerações.</p>
        <Link className="primary-button" to="/senna">Conheça sua história <ArrowUpRight size={18}/></Link>
      </div>
    </section>
  )
}
