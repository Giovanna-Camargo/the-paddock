import { useMemo, useState } from 'react'
import { Trophy, Flag, Award, Medal, Info } from 'lucide-react'

const records = [
  { label: 'TÍTULOS MUNDIAIS', value: '7', holder: 'Hamilton / Schumacher', icon: Trophy },
  { label: 'VITÓRIAS', value: '106', holder: 'Lewis Hamilton', icon: Flag },
  { label: 'POLES', value: '105', holder: 'Lewis Hamilton', icon: Award },
  { label: 'PÓDIOS', value: '209', holder: 'Lewis Hamilton', icon: Medal },
]

const leaderboards = {
  wins: { label: 'VITÓRIAS', rows: [['Lewis Hamilton',106],['Michael Schumacher',91],['Max Verstappen',75],['Sebastian Vettel',53],['Alain Prost',51]] },
  titles: { label: 'TÍTULOS MUNDIAIS', rows: [['Michael Schumacher',7],['Lewis Hamilton',7],['Juan Manuel Fangio',5],['Alain Prost',4],['Max Verstappen',4]] },
  poles: { label: 'POLES', rows: [['Lewis Hamilton',105],['Michael Schumacher',68],['Ayrton Senna',65],['Sebastian Vettel',57],['Max Verstappen',51]] },
  podiums: { label: 'PÓDIOS', rows: [['Lewis Hamilton',209],['Michael Schumacher',155],['Max Verstappen',140],['Sebastian Vettel',122],['Alain Prost',106]] },
}

const tabs = [
  { id: 'wins', label: 'Vitórias' },
  { id: 'titles', label: 'Títulos' },
  { id: 'poles', label: 'Poles' },
  { id: 'podiums', label: 'Pódios' },
]

export default function TheNumbers() {
  const [activeTab, setActiveTab] = useState('wins')
  const current = leaderboards[activeTab]
  const max = useMemo(() => Math.max(...current.rows.map(([, value]) => value)), [current])

  return (
    <section className="numbers-section" id="the-numbers" aria-labelledby="numbers-heading">
      <div className="numbers-hero">
        <div className="numbers-hero-copy">
          <span className="numbers-eyebrow">THE NUMBERS</span>
          <h2 id="numbers-heading">THE <strong>NUMBERS</strong></h2>
          <p>Os recordes que definem a história da Fórmula 1.</p>
          <i />
        </div>
      </div>

      <div className="numbers-record-grid">
        {records.map(({ label, value, holder, icon: Icon }) => (
          <article className="numbers-record-card" key={label}>
            <Icon aria-hidden="true" />
            <div><strong>{value}</strong><span>{label}</span><small>{holder}</small></div>
          </article>
        ))}
      </div>

      <div className="numbers-dashboard">
        <section className="numbers-panel numbers-ranking" aria-labelledby="numbers-ranking-title">
          <span className="numbers-panel-accent" />
          <h3 id="numbers-ranking-title">MAIS VITÓRIAS NA HISTÓRIA</h3>
          <ol>
            {leaderboards.wins.rows.map(([name, value], index) => (
              <li key={name}>
                <span className="numbers-rank">{index + 1}.</span><span className="numbers-driver-name">{name}</span>
                <span className="numbers-track"><i style={{ width: `${(value / 106) * 100}%` }} /></span><b>{value}</b>
              </li>
            ))}
          </ol>
        </section>

        <section className="numbers-panel numbers-chart" aria-labelledby="numbers-chart-title">
          <span className="numbers-panel-accent" />
          <div className="numbers-chart-heading">
            <h3 id="numbers-chart-title">{current.label}</h3>
            <div className="numbers-tabs" role="tablist" aria-label="Categoria de recordes">
              {tabs.map(tab => <button key={tab.id} type="button" role="tab" aria-selected={activeTab === tab.id} className={activeTab === tab.id ? 'is-active' : ''} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>)}
            </div>
          </div>
          <div className="numbers-bars" role="img" aria-label={`Ranking de ${current.label.toLowerCase()}`}>
            {current.rows.map(([name, value]) => (
              <div className="numbers-bar-column" key={name}>
                <b>{value}</b><div className="numbers-bar-track"><i style={{ height: `${(value / max) * 100}%` }} /></div><span>{name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <p className="numbers-source"><Info size={17} /> <span>Recordes históricos até o GP de Las Vegas de 2026. Estatísticas de Grandes Prêmios; sprints não incluídos.</span></p>
    </section>
  )
}
