import { useMemo, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Flag, Gauge, MapPin, Route, CalendarDays, Search, X } from 'lucide-react'
import './circuits.css'

const featuredCircuits = [
  {
    id: 'spa',
    name: 'Spa-Francorchamps',
    country: 'Bélgica',
    location: 'Stavelot, Bélgica',
    length: '7.004 km',
    turns: '20',
    lap: '1:44.701',
    description: 'Entre florestas, mudanças de elevação e curvas lendárias, Spa é um dos traçados mais emblemáticos do automobilismo.',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2400&q=90',
    note: 'CIRCUITO HISTÓRICO',
  },
  {
    id: 'suzuka',
    name: 'Suzuka International Racing Course',
    country: 'Japão',
    location: 'Suzuka, Japão',
    length: '5.807 km',
    turns: '18',
    lap: '1:30.983',
    description: 'Um circuito técnico e fluido, conhecido pelo traçado em formato de oito e por suas sequências de curvas desafiadoras.',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2400&q=90',
    note: 'CIRCUITO INTERNACIONAL',
  },
  {
    id: 'monza',
    name: 'Autodromo Nazionale Monza',
    country: 'Itália',
    location: 'Monza, Itália',
    length: '5.793 km',
    turns: '11',
    lap: '1:21.046',
    description: 'Conhecido como Templo da Velocidade, Monza combina longas retas, frenagens intensas e uma história incomparável.',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2400&q=90',
    note: 'TEMPLO DA VELOCIDADE',
  },
]

const calendar2026 = [
  { round: 1, gp: 'Grande Prêmio da Austrália', circuit: 'Albert Park Grand Prix Circuit', place: 'Melbourne, Austrália', date: '06–08 MAR', flag: '🇦🇺', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { round: 2, gp: 'Grande Prêmio da China', circuit: 'Shanghai International Circuit', place: 'Xangai, China', date: '13–15 MAR', flag: '🇨🇳', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85' },
  { round: 3, gp: 'Grande Prêmio do Japão', circuit: 'Suzuka International Racing Course', place: 'Suzuka, Japão', date: '27–29 MAR', flag: '🇯🇵', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { round: 4, gp: 'Grande Prêmio de Miami', circuit: 'Miami International Autodrome', place: 'Miami, Estados Unidos', date: '01–03 MAI', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85' },
  { round: 5, gp: 'Grande Prêmio do Canadá', circuit: 'Circuit Gilles-Villeneuve', place: 'Montreal, Canadá', date: '22–24 MAI', flag: '🇨🇦', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85' },
  { round: 6, gp: 'Grande Prêmio de Mônaco', circuit: 'Circuit de Monaco', place: 'Monte Carlo, Mônaco', date: '05–07 JUN', flag: '🇲🇨', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { round: 7, gp: 'Grande Prêmio de Barcelona-Catalunha', circuit: 'Circuit de Barcelona-Catalunya', place: 'Barcelona, Espanha', date: '12–14 JUN', flag: '🇪🇸', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { round: 8, gp: 'Grande Prêmio da Áustria', circuit: 'Red Bull Ring', place: 'Spielberg, Áustria', date: '26–28 JUN', flag: '🇦🇹', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85' },
  { round: 9, gp: 'Grande Prêmio da Grã-Bretanha', circuit: 'Silverstone Circuit', place: 'Silverstone, Reino Unido', date: '03–05 JUL', flag: '🇬🇧', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85' },
  { round: 10, gp: 'Grande Prêmio da Bélgica', circuit: 'Circuit de Spa-Francorchamps', place: 'Stavelot, Bélgica', date: '17–19 JUL', flag: '🇧🇪', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { round: 11, gp: 'Grande Prêmio da Hungria', circuit: 'Hungaroring', place: 'Budapeste, Hungria', date: '24–26 JUL', flag: '🇭🇺', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85' },
  { round: 12, gp: 'Grande Prêmio dos Países Baixos', circuit: 'Circuit Zandvoort', place: 'Zandvoort, Países Baixos', date: '21–23 AGO', flag: '🇳🇱', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85' },
  { round: 13, gp: 'Grande Prêmio da Itália', circuit: 'Autodromo Nazionale Monza', place: 'Monza, Itália', date: '04–06 SET', flag: '🇮🇹', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { round: 14, gp: 'Grande Prêmio da Espanha', circuit: 'Madring', place: 'Madri, Espanha', date: '11–13 SET', flag: '🇪🇸', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { round: 15, gp: 'Grande Prêmio do Azerbaijão', circuit: 'Baku City Circuit', place: 'Baku, Azerbaijão', date: '24–26 SET', flag: '🇦🇿', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85' },
  { round: 16, gp: 'Grande Prêmio do Bahrein', circuit: 'Sepang International Circuit', place: 'Sepang, Malásia', date: '02–04 OUT', flag: '🇲🇾', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85' },
  { round: 17, gp: 'Grande Prêmio de Singapura', circuit: 'Marina Bay Street Circuit', place: 'Singapura', date: '09–11 OUT', flag: '🇸🇬', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { round: 18, gp: 'Grande Prêmio dos Estados Unidos', circuit: 'Circuit of The Americas', place: 'Austin, Estados Unidos', date: '23–25 OUT', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { round: 19, gp: 'Grande Prêmio da Cidade do México', circuit: 'Autódromo Hermanos Rodríguez', place: 'Cidade do México, México', date: '30 OUT–01 NOV', flag: '🇲🇽', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85' },
  { round: 20, gp: 'Grande Prêmio de São Paulo', circuit: 'Autódromo José Carlos Pace', place: 'São Paulo, Brasil', date: '06–08 NOV', flag: '🇧🇷', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85' },
  { round: 21, gp: 'Grande Prêmio de Las Vegas', circuit: 'Las Vegas Strip Circuit', place: 'Las Vegas, Estados Unidos', date: '19–21 NOV', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85' },
  { round: 22, gp: 'Grande Prêmio do Catar', circuit: 'Lusail International Circuit', place: 'Lusail, Catar', date: '27–29 NOV', flag: '🇶🇦', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { round: 23, gp: 'Grande Prêmio de Abu Dhabi', circuit: 'Yas Marina Circuit', place: 'Abu Dhabi, Emirados Árabes Unidos', date: '04–06 DEZ', flag: '🇦🇪', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
]


const circuitArchive = [
  { id: 'monaco', name: 'Circuit de Monaco', country: 'Mônaco', flag: '🇲🇨', region: 'Europa', status: 'Atual', length: '3,337 km', turns: '19', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { id: 'monza', name: 'Autodromo Nazionale Monza', country: 'Itália', flag: '🇮🇹', region: 'Europa', status: 'Atual', length: '5,793 km', turns: '11', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { id: 'suzuka', name: 'Suzuka International Racing Course', country: 'Japão', flag: '🇯🇵', region: 'Ásia', status: 'Atual', length: '5,807 km', turns: '18', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85' },
  { id: 'spa', name: 'Circuit de Spa-Francorchamps', country: 'Bélgica', flag: '🇧🇪', region: 'Europa', status: 'Atual', length: '7,004 km', turns: '20', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { id: 'silverstone', name: 'Silverstone Circuit', country: 'Reino Unido', flag: '🇬🇧', region: 'Europa', status: 'Atual', length: '5,891 km', turns: '18', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85' },
  { id: 'interlagos', name: 'Autódromo José Carlos Pace', country: 'Brasil', flag: '🇧🇷', region: 'Américas', status: 'Atual', length: '4,309 km', turns: '15', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { id: 'cota', name: 'Circuit of The Americas', country: 'Estados Unidos', flag: '🇺🇸', region: 'Américas', status: 'Atual', length: '5,513 km', turns: '20', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { id: 'marina-bay', name: 'Marina Bay Street Circuit', country: 'Singapura', flag: '🇸🇬', region: 'Ásia', status: 'Atual', length: '4,940 km', turns: '19', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85' },
  { id: 'nurburgring', name: 'Nürburgring Nordschleife', country: 'Alemanha', flag: '🇩🇪', region: 'Europa', status: 'Histórico', length: '22,835 km', turns: '154', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85' },
  { id: 'hockenheim', name: 'Hockenheimring', country: 'Alemanha', flag: '🇩🇪', region: 'Europa', status: 'Histórico', length: '4,574 km', turns: '17', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { id: 'estoril', name: 'Autódromo do Estoril', country: 'Portugal', flag: '🇵🇹', region: 'Europa', status: 'Histórico', length: '4,360 km', turns: '13', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85' },
  { id: 'watkins-glen', name: 'Watkins Glen International', country: 'Estados Unidos', flag: '🇺🇸', region: 'Américas', status: 'Histórico', length: '5,435 km', turns: '11', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
]

export default function CircuitsPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [archiveVisibleCount, setArchiveVisibleCount] = useState(3)
  const [archiveSearch, setArchiveSearch] = useState('')
  const [archiveFilter, setArchiveFilter] = useState('Todos')
  const circuit = featuredCircuits[activeIndex]
  const visibleCircuits = useMemo(() => calendar2026.slice(0, visibleCount), [visibleCount])
  const filteredArchive = useMemo(() => {
    const term = archiveSearch.trim().toLocaleLowerCase('pt-BR')
    return circuitArchive.filter(item => {
      const matchesFilter = archiveFilter === 'Todos' || item.status === archiveFilter || item.region === archiveFilter
      const matchesSearch = !term || `${item.name} ${item.country} ${item.region}`.toLocaleLowerCase('pt-BR').includes(term)
      return matchesFilter && matchesSearch
    })
  }, [archiveSearch, archiveFilter])
  const visibleArchive = filteredArchive.slice(0, archiveVisibleCount)
  const changeCircuit = (direction) => setActiveIndex(index => (index + direction + featuredCircuits.length) % featuredCircuits.length)

  return (
    <main className="circuits-page">
      <section className="circuit-experience" style={{ '--circuit-image': `url("${circuit.image}")` }}>
        <div className="circuit-experience__shade" />
        <div className="circuit-experience__content" key={circuit.id}>
          <span className="circuit-eyebrow">
            <i /> CIRCUIT EXPERIENCE <b> / 01</b>
          </span>
          <h1>{circuit.name}</h1>
          <div className="circuit-location"><MapPin size={15} strokeWidth={1.6} /> {circuit.location}</div>
          <p className="circuit-description">{circuit.description}</p>
          <div className="circuit-stats">
            <div><Route />
              <span>
                <strong>{circuit.length}</strong>
                <small>EXTENSÃO</small>
              </span>
            </div>
            <div><Gauge /><span><strong>{circuit.turns}</strong><small>CURVAS</small></span></div>
            <div><Flag /><span><strong>{circuit.lap}</strong><small>VOLTA DE REFERÊNCIA*</small></span></div>
          </div>
          <a className="circuit-cta" href="#circuit-overview">CONHEÇA O CIRCUITO <ArrowUpRight size={16}/></a>
          <span className="circuit-photo-note">{circuit.note} · IMAGEM ILUSTRATIVA</span>
        </div>

        <div className="circuit-experience__controls">
          <div className="circuit-pagination" aria-label="Selecionar circuito em destaque">
            {featuredCircuits.map((item, index) => (
              <button key={item.id} type="button" aria-label={`Mostrar ${item.name}`} aria-pressed={activeIndex === index} className={activeIndex === index ? 'is-active' : ''} onClick={() => setActiveIndex(index)} />
            ))}
          </div>
          <div className="circuit-arrows">
            <span>{String(activeIndex + 1).padStart(2, '0')} <i>/</i> {String(featuredCircuits.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => changeCircuit(-1)} aria-label="Circuito anterior"><ArrowLeft /></button>
            <button type="button" onClick={() => changeCircuit(1)} aria-label="Próximo circuito"><ArrowRight /></button>
          </div>
        </div>
        <a className="circuit-scroll" href="#circuit-overview"><ArrowDown size={15}/> ROLE PARA EXPLORAR</a>
      </section>

      <section className="circuit-intro section-wide" id="circuit-overview">
        <span className="eyebrow">THE PADDOCK · CIRCUITS</span>
        <h2>Mais do que pistas.<br/><em>Palcos de história.</em></h2>
        <p>Conheça os traçados que desafiam pilotos, definem temporadas e fazem parte da história da Fórmula 1. Explore cada circuito por sua arquitetura, características e legado.</p>
        <div className="circuit-intro__rule"><span/><small>01 — CIRCUIT EXPERIENCE</small></div>
      </section>

      <section className="circuit-calendar section-wide" id="calendar-2026">
        <div className="circuit-calendar__heading">
          <div>
            <span className="circuit-calendar__eyebrow"><i /> CALENDÁRIO 2026</span>
            <h2>2026 GRAND PRIX<br className="circuit-calendar__mobile-break" /> CIRCUITS</h2>
          </div>
          <p>Uma temporada global, <strong>23 etapas</strong>, uma paixão em comum.</p>
        </div>

        <div className="circuit-calendar__grid">
          {visibleCircuits.map((item) => (
            <article className="calendar-card" key={item.round}>
              <div className="calendar-card__image" style={{ backgroundImage: `url("${item.image}")` }}>
                <span className="calendar-card__round">ROUND {String(item.round).padStart(2, '0')}</span>
                <span className="calendar-card__date"><CalendarDays size={13} /> {item.date}</span>
                <div className="calendar-card__shade" />
              </div>
              <div className="calendar-card__body">
                <div className="calendar-card__country"><span>{item.flag}</span>{item.place}</div>
                <h3>{item.gp}</h3>
                <p>{item.circuit}</p>
                <div className="calendar-card__footer">
                  <span><MapPin size={14}/>{item.place.split(',')[0]}</span>
                  <span className="calendar-card__arrow" aria-hidden="true"><ArrowUpRight size={18}/></span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="circuit-calendar__more">
          <span>{visibleCircuits.length} DE {calendar2026.length} CIRCUITOS</span>
          {visibleCount < calendar2026.length ? (
            <button type="button" onClick={() => setVisibleCount(count => Math.min(count + 6, calendar2026.length))}>
              CARREGAR MAIS CIRCUITOS <ArrowDown size={15}/>
            </button>
          ) : (
            <button type="button" onClick={() => setVisibleCount(3)}>
              MOSTRAR MENOS <ArrowUpRight size={15}/>
            </button>
          )}
        </div>
        <p className="circuit-calendar__source">Calendário conforme a programação exibida pela Fórmula 1. Fotografias ilustrativas; datas e etapas podem sofrer alterações.</p>
      </section>

      <section className="circuit-archive section-wide" id="explore-circuits">
        <div className="circuit-archive__heading">
          <div>
            <span className="circuit-archive__eyebrow"><i /> THE PADDOCK · CIRCUIT ARCHIVE</span>
            <h2>EXPLORE THE<br/> CIRCUITS</h2>
          </div>
          <p>Descubra os circuitos atuais e históricos da Fórmula 1 e mergulhe na história de cada pista que faz parte desta categoria lendária.</p>
        </div>

        <label className="circuit-archive__search">
          <Search size={21} aria-hidden="true" />
          <input value={archiveSearch} onChange={event => { setArchiveSearch(event.target.value); setArchiveVisibleCount(3) }} placeholder="Buscar circuito..." aria-label="Buscar circuito por nome ou país" />
          {archiveSearch && <button type="button" onClick={() => setArchiveSearch('')} aria-label="Limpar busca"><X size={17}/></button>}
        </label>

        <div className="circuit-archive__filters" aria-label="Filtrar circuitos">
          {['Todos', 'Atual', 'Histórico', 'Europa', 'Américas', 'Ásia'].map(filter => (
            <button key={filter} type="button" className={archiveFilter === filter ? 'is-active' : ''} aria-pressed={archiveFilter === filter} onClick={() => { setArchiveFilter(filter); setArchiveVisibleCount(3) }}>{filter === 'Atual' ? 'Atuais' : filter === 'Histórico' ? 'Históricos' : filter}</button>
          ))}
        </div>

        <div className="circuit-archive__grid">
          {visibleArchive.map(item => (
            <article className="archive-card" key={item.id}>
              <div className="archive-card__image" style={{ backgroundImage: `url("${item.image}")` }}>
                <span className="archive-card__status">{item.status === 'Atual' ? 'NA F1 ATUAL' : 'LEGADO F1'}</span>
              </div>
              <div className="archive-card__body">
                <div className="archive-card__country"><span>{item.flag}</span>{item.country}</div>
                <h3>{item.name}</h3>
                <div className="archive-card__specs"><span><Route size={16}/>{item.length}</span><i/><span><Gauge size={16}/>{item.turns} curvas</span></div>
              </div>
            </article>
          ))}
        </div>

        {filteredArchive.length === 0 ? (
          <p className="circuit-archive__empty">Nenhum circuito encontrado. Tente outro nome ou filtro.</p>
        ) : (
          <div className="circuit-archive__more">
            <span>MOSTRANDO {visibleArchive.length} DE {filteredArchive.length} CIRCUITOS</span>
            {visibleArchive.length < filteredArchive.length && <button type="button" onClick={() => setArchiveVisibleCount(count => count + 6)}>CARREGAR MAIS CIRCUITOS <ArrowDown size={15}/></button>}
          </div>
        )}
      </section>
    </main>
  )
}
