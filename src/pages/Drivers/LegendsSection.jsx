import { ArrowUpRight, ArrowRight } from 'lucide-react'

const legends = [
  { name: 'Michael Schumacher', surname: 'SCHUMACHER', country: 'ALEMANHA', flag: '🇩🇪', titles: '7 TÍTULOS', years: '1991 — 2012', initials: 'MS', number: '01', tone: 'schumacher' },
  { name: 'Lewis Hamilton', surname: 'HAMILTON', country: 'REINO UNIDO', flag: '🇬🇧', titles: '7 TÍTULOS', years: '2007 — ATUAL', initials: 'LH', number: '44', tone: 'hamilton' },
  { name: 'Alain Prost', surname: 'PROST', country: 'FRANÇA', flag: '🇫🇷', titles: '4 TÍTULOS', years: '1980 — 1993', initials: 'AP', number: '02', tone: 'prost' },
  { name: 'Juan Manuel Fangio', surname: 'FANGIO', country: 'ARGENTINA', flag: '🇦🇷', titles: '5 TÍTULOS', years: '1950 — 1958', initials: 'JF', number: '05', tone: 'fangio' },
]

export default function LegendsSection() {
  return (
    <section className="legends-section" id="legends-of-f1" aria-labelledby="legends-heading">
      <div className="legends-topline"><span>THE PADDOCK / HALL OF FAME</span><span>HERITAGE · EXCELLENCE · LEGACY</span></div>
      <div className="legends-heading-row">
        <div>
          <span className="legends-eyebrow"><i /> GRANDES NOMES, HISTÓRIAS ETERNAS</span>
          <h2 id="legends-heading">LEGENDS OF <strong>FORMULA 1</strong></h2>
        </div>
        <p>Alguns pilotos vão além dos resultados. Eles definem épocas, inspiram gerações e transformam para sempre a história do automobilismo.</p>
      </div>

      <article className="legend-feature">
        <div className="legend-feature-art" aria-label="Arte editorial inspirada no legado de Ayrton Senna">
          <span className="legend-feature-number">12</span>
          <span className="legend-feature-monogram">AS</span>
          <span className="legend-feature-caption">BRAZIL · 1960—1994</span>
        </div>
        <div className="legend-feature-copy">
          <span className="legend-feature-kicker">A LENDA BRASILEIRA <b>01 / 05</b></span>
          <h3>AYRTON <strong>SENNA</strong></h3>
          <p>Velocidade, precisão e uma determinação que marcou gerações. Tricampeão mundial, Senna permanece como um dos nomes mais emblemáticos da história da Fórmula 1.</p>
          <div className="legend-feature-stats"><div><strong>3</strong><span>TÍTULOS MUNDIAIS</span></div><div><strong>41</strong><span>VITÓRIAS</span></div><div><strong>65</strong><span>POLES</span></div></div>
          <a className="legend-profile-link" href="/senna">CONHEÇA SUA HISTÓRIA <ArrowRight size={16}/></a>
        </div>
      </article>

      <div className="legends-list-heading"><div><span>OUTROS NOMES IMORTAIS</span><h3>UM LEGADO <strong>SEM FRONTEIRAS</strong></h3></div><span>04 PERFIS EM DESTAQUE</span></div>
      <div className="legends-grid">
        {legends.map((driver, index) => (
          <a className={`legend-card legend-card--${driver.tone}`} href="#explore-drivers" key={driver.tone} aria-label={`Explorar ${driver.name} no catálogo de pilotos`}>
            <div className="legend-card-art"><span className="legend-card-number">{driver.number}</span><span className="legend-card-monogram">{driver.initials}</span><span className="legend-card-years">{driver.years}</span></div>
            <div className="legend-card-copy"><span>{driver.titles}</span><h4>{driver.surname}</h4><div><span>{driver.flag} {driver.country}</span><ArrowUpRight size={17}/></div></div>
            <span className="legend-card-index">0{index + 2}</span>
          </a>
        ))}
      </div>
      <a className="legends-archive-link" href="#explore-drivers">EXPLORAR TODOS OS PILOTOS <ArrowRight size={16}/></a>
    </section>
  )
}
