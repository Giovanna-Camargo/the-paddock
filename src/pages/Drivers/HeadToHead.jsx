import { useMemo, useState } from 'react'
import { ArrowLeftRight, Trophy, Flag, Award, Medal, Timer, Info, ChevronDown } from 'lucide-react'

const drivers = [
  { name: 'Ayrton Senna', country: 'Brasil', flag: '🇧🇷', titles: 3, wins: 41, poles: 65, podiums: 80, fastest: 19, years: [1988, 1990, 1991] },
  { name: 'Michael Schumacher', country: 'Alemanha', flag: '🇩🇪', titles: 7, wins: 91, poles: 68, podiums: 155, fastest: 77, years: [1994, 1995, 2000, 2001, 2002, 2003, 2004] },
  { name: 'Lewis Hamilton', country: 'Reino Unido', flag: '🇬🇧', titles: 7, wins: 106, poles: 105, podiums: 209, fastest: null, years: [2008, 2014, 2015, 2017, 2018, 2019, 2020] },
  { name: 'Alain Prost', country: 'França', flag: '🇫🇷', titles: 4, wins: 51, poles: 33, podiums: 106, fastest: null, years: [1985, 1986, 1989, 1993] },
  { name: 'Juan Manuel Fangio', country: 'Argentina', flag: '🇦🇷', titles: 5, wins: 24, poles: 29, podiums: 35, fastest: null, years: [1951, 1954, 1955, 1956, 1957] },
  { name: 'Max Verstappen', country: 'Países Baixos', flag: '🇳🇱', titles: 4, wins: 75, poles: 51, podiums: 140, fastest: null, years: [2021, 2022, 2023, 2024] },
  { name: 'Sebastian Vettel', country: 'Alemanha', flag: '🇩🇪', titles: 4, wins: 53, poles: 57, podiums: 122, fastest: null, years: [2010, 2011, 2012, 2013] },
  { name: 'Niki Lauda', country: 'Áustria', flag: '🇦🇹', titles: 3, wins: 25, poles: 24, podiums: 54, fastest: null, years: [1975, 1977, 1984] },
  { name: 'Jackie Stewart', country: 'Reino Unido', flag: '🇬🇧', titles: 3, wins: 27, poles: 17, podiums: 43, fastest: null, years: [1969, 1971, 1973] },
  { name: 'Nelson Piquet', country: 'Brasil', flag: '🇧🇷', titles: 3, wins: 23, poles: 24, podiums: 60, fastest: null, years: [1981, 1983, 1987] },
  { name: 'Mika Häkkinen', country: 'Finlândia', flag: '🇫🇮', titles: 2, wins: 20, poles: 26, podiums: 51, fastest: null, years: [1998, 1999] },
  { name: 'Kimi Räikkönen', country: 'Finlândia', flag: '🇫🇮', titles: 1, wins: 21, poles: 18, podiums: 103, fastest: null, years: [2007] },
  { name: 'Fernando Alonso', country: 'Espanha', flag: '🇪🇸', titles: 2, wins: 32, poles: 22, podiums: 106, fastest: null, years: [2005, 2006] },
  { name: 'Emerson Fittipaldi', country: 'Brasil', flag: '🇧🇷', titles: 2, wins: 14, poles: 6, podiums: 35, fastest: null, years: [1972, 1974] },
  { name: 'Jenson Button', country: 'Reino Unido', flag: '🇬🇧', titles: 1, wins: 15, poles: 8, podiums: 50, fastest: null, years: [2009] },
  { name: 'Damon Hill', country: 'Reino Unido', flag: '🇬🇧', titles: 1, wins: 22, poles: 20, podiums: 42, fastest: null, years: [1996] },
  { name: 'Jacques Villeneuve', country: 'Canadá', flag: '🇨🇦', titles: 1, wins: 11, poles: 13, podiums: 23, fastest: null, years: [1997] },
  { name: 'Graham Hill', country: 'Reino Unido', flag: '🇬🇧', titles: 2, wins: 14, poles: 13, podiums: 36, fastest: null, years: [1962, 1968] },
  { name: 'Jim Clark', country: 'Reino Unido', flag: '🇬🇧', titles: 2, wins: 25, poles: 33, podiums: 32, fastest: null, years: [1963, 1965] },
  { name: 'Nigel Mansell', country: 'Reino Unido', flag: '🇬🇧', titles: 1, wins: 31, poles: 32, podiums: 59, fastest: null, years: [1992] },
]

const metrics = [
  { id: 'titles', label: 'Títulos mundiais', icon: Trophy },
  { id: 'wins', label: 'Vitórias', icon: Flag },
  { id: 'poles', label: 'Poles', icon: Award },
  { id: 'podiums', label: 'Pódios', icon: Medal },
  { id: 'fastest', label: 'Voltas mais rápidas', icon: Timer },
]

function DriverSelect({ value, onChange, side, selected }) {
  return <label className={`h2h-driver-select h2h-driver-select--${side}`}>
    <span className="h2h-driver-monogram">{value.name.split(' ').map(part => part[0]).slice(0,2).join('')}</span>
    <span className="h2h-driver-details"><b>{value.name}</b><small>{value.flag} {value.country}</small></span>
    <ChevronDown size={17}/>
    <select aria-label={`Selecionar ${side === 'left' ? 'primeiro' : 'segundo'} piloto`} value={value.name} onChange={event => onChange(drivers.find(driver => driver.name === event.target.value))}>
      {drivers.filter(driver => driver.name !== selected).map(driver => <option key={driver.name} value={driver.name}>{driver.name}</option>)}
    </select>
  </label>
}

export default function HeadToHead() {
  const [leftName, setLeftName] = useState('Ayrton Senna')
  const [rightName, setRightName] = useState('Michael Schumacher')
  const [activeMetric, setActiveMetric] = useState('titles')
  const left = drivers.find(driver => driver.name === leftName) || drivers[0]
  const right = drivers.find(driver => driver.name === rightName) || drivers[1]
  const metric = metrics.find(item => item.id === activeMetric) || metrics[0]
  const Icon = metric.icon
  const a = left[activeMetric]
  const b = right[activeMetric]
  const max = Math.max(a || 0, b || 0, 1)
  const summary = useMemo(() => metrics.map(item => ({ ...item, left: left[item.id], right: right[item.id] })), [left, right])

  const selectLeft = driver => { setLeftName(driver.name); if (driver.name === rightName) setRightName(leftName) }
  const selectRight = driver => { setRightName(driver.name); if (driver.name === leftName) setLeftName(rightName) }

  return <section className="h2h-section" id="head-to-head" aria-labelledby="h2h-heading">
    <div className="h2h-hero">
      <span className="h2h-eyebrow">HEAD TO HEAD</span>
      <h2 id="h2h-heading">PILOT <strong>COMPARISON</strong></h2>
      <p>Compare as trajetórias dos grandes nomes da história da Fórmula 1.</p>
      <i/>
    </div>

    <div className="h2h-pair">
      <DriverSelect value={left} onChange={selectLeft} side="left" selected={rightName}/>
      <div className="h2h-versus"><span>VS</span></div>
      <DriverSelect value={right} onChange={selectRight} side="right" selected={leftName}/>
    </div>

    <div className="h2h-dashboard">
      <nav className="h2h-metric-nav" aria-label="Categorias da comparação">
        {metrics.map(item => { const MetricIcon = item.icon; return <button type="button" key={item.id} className={activeMetric === item.id ? 'is-active' : ''} onClick={() => setActiveMetric(item.id)}><MetricIcon size={18}/><span>{item.label}</span></button> })}
      </nav>

      <section className="h2h-focus" aria-live="polite">
        <div className="h2h-focus-heading"><Icon size={27}/><div><h3>{metric.label}</h3><p>Comparação direta de resultados oficiais.</p></div></div>
        <div className="h2h-focus-values">
          <div><strong className="h2h-value-left">{a ?? '—'}</strong><span>{left.name}</span></div>
          <div className="h2h-focus-divider"/>
          <div><strong className="h2h-value-right">{b ?? '—'}</strong><span>{right.name}</span></div>
        </div>
        <div className="h2h-bars" aria-label="Barras proporcionais de comparação">
          <div><span style={{width: `${((a || 0) / max) * 100}%`}}/></div>
          <div><span style={{width: `${((b || 0) / max) * 100}%`}}/></div>
        </div>
        {activeMetric === 'titles' && <div className="h2h-years">
          <div><span className="h2h-year-label">{left.name}</span>{left.years.map(year => <b key={year}>{year}</b>)}</div>
          <div><span className="h2h-year-label">{right.name}</span>{right.years.map(year => <b key={year}>{year}</b>)}</div>
        </div>}
      </section>

      <aside className="h2h-summary">
        <h3>RESUMO DA COMPARAÇÃO</h3>
        {summary.map(item => <div className="h2h-summary-row" key={item.id}>
          <span>{item.label}</span><div className="h2h-summary-tracks"><i style={{width: `${((item.left || 0) / Math.max(item.left || 0,item.right || 0,1))*100}%`}}/><b style={{width: `${((item.right || 0) / Math.max(item.left || 0,item.right || 0,1))*100}%`}}/></div><strong>{item.left ?? '—'} <small>/</small> {item.right ?? '—'}</strong>
        </div>)}
      </aside>
    </div>
    <p className="h2h-source"><Info size={16}/> Dados demonstrativos do catálogo inicial. Valores ausentes são indicados por traço; revisar e validar a base histórica antes da publicação definitiva.</p>
  </section>
}
