import { useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Mouse, MoveUpRight } from 'lucide-react'
import './drivers.css'
import civilianPortrait from '../../assets/drivers/driver-civilian.jpg'
import racingPortrait from '../../assets/drivers/driver-racewear.jpg'

// Conteúdo demonstrativo. Os perfis reais serão conectados à API/banco de dados.
const demoDrivers = [
  { id: 'demo-01', firstName: 'MARCUS', lastName: 'VALE', team: 'SCUDERIA ROSSA', number: '07', nationality: 'ITÁLIA', country: 'IT', tagline: 'Velocidade, precisão e uma história em construção.' },
  { id: 'demo-02', firstName: 'ALEX', lastName: 'MORGAN', team: 'NORTHSTAR RACING', number: '18', nationality: 'REINO UNIDO', country: 'GB', tagline: 'Foco absoluto. Cada volta conta uma nova história.' },
  { id: 'demo-03', firstName: 'NOAH', lastName: 'SILVA', team: 'APEX MOTORSPORT', number: '24', nationality: 'BRASIL', country: 'BR', tagline: 'Talento, coragem e a busca constante pelo limite.' },
]

export default function DriversPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [position, setPosition] = useState({ x: 68, y: 43 })
  const [touchReveal, setTouchReveal] = useState(false)
  const stageRef = useRef(null)
  const activeDriver = demoDrivers[activeIndex]
  const progress = useMemo(() => `${String(activeIndex + 1).padStart(2, '0')} / ${String(demoDrivers.length).padStart(2, '0')}`, [activeIndex])

  const moveReveal = (event) => {
    if (!stageRef.current || event.pointerType === 'touch') return
    const bounds = stageRef.current.getBoundingClientRect()
    setPosition({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    })
  }

  const changeDriver = (direction) => {
    setActiveIndex(current => (current + direction + demoDrivers.length) % demoDrivers.length)
    setTouchReveal(false)
    setPosition({ x: 68, y: 43 })
  }

  return (
    <main className="drivers-page">
      <section
        className={`drivers-stage ${touchReveal ? 'drivers-stage--touch-reveal' : ''}`}
        ref={stageRef}
        onPointerMove={moveReveal}
        onPointerDown={(event) => { if (event.pointerType === 'touch') setTouchReveal(value => !value) }}
        aria-label="Apresentação interativa dos pilotos"
        style={{ '--reveal-x': `${position.x}%`, '--reveal-y': `${position.y}%` }}
      >
        <div className="drivers-backdrop" />
        <div className="drivers-photo drivers-photo--civilian" style={{ backgroundImage: `url(${civilianPortrait})` }} />
        <div className="drivers-photo drivers-photo--racewear" style={{ backgroundImage: `url(${racingPortrait})` }} />
        <div className="drivers-vignette" />

        <div className="drivers-copy" key={activeDriver.id}>
          <span className="drivers-eyebrow"><i /> DRIVER PROFILE / 2026</span>
          <h1><span>{activeDriver.firstName}</span><strong>{activeDriver.lastName}</strong></h1>
          <div className="drivers-meta">
            <span>{activeDriver.team}</span><b>·</b><span>#{activeDriver.number}</span><b>·</b><span>{activeDriver.nationality}</span>
          </div>
          <p>{activeDriver.tagline}</p>
          <span className="drivers-demo-note">PERFIL FICTÍCIO · CONTEÚDO DEMONSTRATIVO</span>
        </div>

        <div className="drivers-hint" aria-hidden="true">
          <Mouse size={26} strokeWidth={1.4} />
          <span />
          <strong> {touchReveal ? 'TOQUE PARA ALTERNAR A REVELAÇÃO' : 'MOVA O CURSOR PARA REVELAR O PILOTO'}</strong>
        </div>

        <div className="drivers-controls" onPointerDown={event => event.stopPropagation()} onClick={event => event.stopPropagation()}>
          <div className="drivers-counter">{progress}</div>
          <div className="drivers-progress" aria-hidden="true">
            {demoDrivers.map((driver, index) => <span key={driver.id} className={index === activeIndex ? 'is-active' : ''} />)}
          </div>
          <div className="drivers-arrows">
            <button type="button" onClick={() => changeDriver(-1)} aria-label="Piloto anterior"><ArrowLeft /></button>
            <button type="button" onClick={() => changeDriver(1)} aria-label="Próximo piloto"><ArrowRight /></button>
          </div>
        </div>

        <div className="drivers-side-label">THE PADDOCK <span>—</span> DRIVERS</div>
        <div className="drivers-touch-instruction"><MoveUpRight size={14}/> Toque na imagem para revelar</div>
      </section>
    </main>
  )
}
