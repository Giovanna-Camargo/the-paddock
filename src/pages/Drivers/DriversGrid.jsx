import { useMemo, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, ChevronDown, Flag, Users } from 'lucide-react'

// Entry list de 2026 conforme o Media Guide oficial da FIA para o GP do México.
// Fotografias oficiais serão adicionadas quando houver arquivos licenciados/autorizados.
const drivers2026 = [
  { name: 'Lando Norris', number: '01', country: 'Reino Unido', flag: '🇬🇧', team: 'McLaren', color: '#ff8700', short: 'LN' },
  { name: 'Oscar Piastri', number: '81', country: 'Austrália', flag: '🇦🇺', team: 'McLaren', color: '#ff8700', short: 'OP' },
  { name: 'Charles Leclerc', number: '16', country: 'Mônaco', flag: '🇲🇨', team: 'Ferrari', color: '#e8002d', short: 'CL' },
  { name: 'Lewis Hamilton', number: '44', country: 'Reino Unido', flag: '🇬🇧', team: 'Ferrari', color: '#e8002d', short: 'LH' },
  { name: 'Max Verstappen', number: '03', country: 'Países Baixos', flag: '🇳🇱', team: 'Red Bull Racing', color: '#3671c6', short: 'MV' },
  { name: 'Isack Hadjar', number: '06', country: 'França', flag: '🇫🇷', team: 'Red Bull Racing', color: '#3671c6', short: 'IH' },
  { name: 'George Russell', number: '63', country: 'Reino Unido', flag: '🇬🇧', team: 'Mercedes', color: '#27f4d2', short: 'GR' },
  { name: 'Kimi Antonelli', number: '12', country: 'Itália', flag: '🇮🇹', team: 'Mercedes', color: '#27f4d2', short: 'KA' },
  { name: 'Fernando Alonso', number: '14', country: 'Espanha', flag: '🇪🇸', team: 'Aston Martin', color: '#229971', short: 'FA' },
  { name: 'Lance Stroll', number: '18', country: 'Canadá', flag: '🇨🇦', team: 'Aston Martin', color: '#229971', short: 'LS' },
  { name: 'Pierre Gasly', number: '10', country: 'França', flag: '🇫🇷', team: 'Alpine', color: '#ff87bc', short: 'PG' },
  { name: 'Franco Colapinto', number: '43', country: 'Argentina', flag: '🇦🇷', team: 'Alpine', color: '#ff87bc', short: 'FC' },
  { name: 'Esteban Ocon', number: '31', country: 'França', flag: '🇫🇷', team: 'Haas', color: '#b6babd', short: 'EO' },
  { name: 'Oliver Bearman', number: '87', country: 'Reino Unido', flag: '🇬🇧', team: 'Haas', color: '#b6babd', short: 'OB' },
  { name: 'Arvid Lindblad', number: '41', country: 'Reino Unido', flag: '🇬🇧', team: 'Racing Bulls', color: '#6692ff', short: 'AL' },
  { name: 'Liam Lawson', number: '30', country: 'Nova Zelândia', flag: '🇳🇿', team: 'Racing Bulls', color: '#6692ff', short: 'LL' },
  { name: 'Alexander Albon', number: '23', country: 'Tailândia', flag: '🇹🇭', team: 'Williams', color: '#1868db', short: 'AA' },
  { name: 'Carlos Sainz', number: '55', country: 'Espanha', flag: '🇪🇸', team: 'Williams', color: '#1868db', short: 'CS' },
  { name: 'Nico Hülkenberg', number: '27', country: 'Alemanha', flag: '🇩🇪', team: 'Audi', color: '#d7ff00', short: 'NH' },
  { name: 'Gabriel Bortoleto', number: '05', country: 'Brasil', flag: '🇧🇷', team: 'Audi', color: '#d7ff00', short: 'GB' },
  { name: 'Sergio Pérez', number: '11', country: 'México', flag: '🇲🇽', team: 'Cadillac', color: '#e7e7e7', short: 'SP' },
  { name: 'Valtteri Bottas', number: '77', country: 'Finlândia', flag: '🇫🇮', team: 'Cadillac', color: '#e7e7e7', short: 'VB' },
]

const teams = ['Todas as equipes', ...new Set(drivers2026.map(driver => driver.team))]

function DriverCard({ driver, index }) {
  return (
    <article className="grid-driver-card" style={{ '--team-color': driver.color, '--card-index': index }}>
      <div className="grid-driver-art" aria-hidden="true">
        <span className="grid-driver-art-number">{driver.number}</span>
        <span className="grid-driver-monogram">{driver.short}</span>
        <span className="grid-driver-art-line" />
        <span className="grid-driver-art-label">THE PADDOCK / 2026</span>
      </div>
      <div className="grid-driver-info">
        <div className="grid-driver-heading">
          <div>
            <span className="grid-driver-team">{driver.team}</span>
            <h3>{driver.name}</h3>
          </div>
          <span className="grid-driver-number">{driver.number}</span>
        </div>
        <div className="grid-driver-country"><span>{driver.flag}</span>{driver.country}</div>
      </div>
      <div className="grid-driver-accent" />
    </article>
  )
}

export default function DriversGrid() {
  const [selectedTeam, setSelectedTeam] = useState('Todas as equipes')
  const [showAll, setShowAll] = useState(false)
  const filteredDrivers = useMemo(
    () => selectedTeam === 'Todas as equipes' ? drivers2026 : drivers2026.filter(driver => driver.team === selectedTeam),
    [selectedTeam],
  )
  const visibleDrivers = showAll ? filteredDrivers : filteredDrivers.slice(0, 8)

  return (
    <section className="drivers-grid-section" id="the-2026-grid">
      <div className="drivers-grid-topline"><span>THE PADDOCK / SEASON 2026</span><span>01 — 11 TEAMS · 22 DRIVERS</span></div>
      <div className="drivers-grid-layout">
        <header className="drivers-grid-intro">
          <span className="drivers-grid-eyebrow"><i /> PILOTOS DA TEMPORADA</span>
          <h2>THE 2026 <strong>GRID</strong></h2>
          <p>Conheça os pilotos que formam o grid da temporada 2026 da Fórmula 1.</p>
          <div className="drivers-grid-count"><Users size={15} /><span><b>22</b> PILOTOS</span><span className="count-divider" /><span><b>11</b> EQUIPES</span></div>
        </header>

        <div className="drivers-grid-content">
          <div className="drivers-grid-toolbar">
            <div className="drivers-grid-toolbar-copy"><span>01 / {String(filteredDrivers.length).padStart(2, '0')}</span><b>THE STARTING LINEUP</b></div>
            <label className="drivers-grid-select-wrap">
              <span>FILTRAR EQUIPE</span>
              <span className="drivers-grid-select"><Flag size={14} /><select value={selectedTeam} onChange={event => { setSelectedTeam(event.target.value); setShowAll(false) }} aria-label="Filtrar pilotos por equipe">
                {teams.map(team => <option key={team} value={team}>{team}</option>)}
              </select><ChevronDown size={14} /></span>
            </label>
          </div>

          <div className="drivers-grid-cards">
            {visibleDrivers.map((driver, index) => <DriverCard key={driver.name} driver={driver} index={index} />)}
          </div>

          <div className="drivers-grid-footer">
            <span>EXIBINDO {visibleDrivers.length.toString().padStart(2, '0')} DE {filteredDrivers.length.toString().padStart(2, '0')} PILOTOS</span>
            {filteredDrivers.length > 8 && (
              <button type="button" className="drivers-grid-more" onClick={() => setShowAll(value => !value)}>
                {showAll ? 'MOSTRAR MENOS' : 'EXPLORAR TODOS OS PILOTOS'} {showAll ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              </button>
            )}
          </div>
        </div>
      </div>
      <p className="drivers-grid-source">LISTA DE INSCRITOS DA TEMPORADA 2026 · FIA / MEDIA GUIDE · GP DO MÉXICO</p>
    </section>
  )
}
