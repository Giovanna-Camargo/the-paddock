import { Flag, Timer, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function NextRaceSection() {
  return (
    <section className="race-section section-wide" id="proxima-corrida">
      <div className="race-image"><img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85" alt="Imagem ilustrativa de automobilismo" loading="lazy"/></div>
      <div className="race-content">
        <span className="eyebrow">NO RADAR</span><h2>Próxima<br/><em>corrida.</em></h2>
        <p className="race-note">Acompanhe a próxima etapa do campeonato, os horários das sessões e os resultados.</p>
        <div className="race-meta">
          <div><Flag size={17}/><span><small>ETAPA</small><strong>Calendário da temporada</strong></span></div>
          <div><Timer size={17}/><span><small>PROGRAMAÇÃO</small><strong>Treinos · Classificação · Corrida</strong></span></div>
        </div>
        <Link className="outline-button" to="/calendario">Ver calendário completo <ArrowUpRight size={17}/></Link>
        <small className="data-note">Conteúdo ilustrativo até a integração com a API.</small>
      </div>
    </section>
  )
}
