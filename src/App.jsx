import { useState } from 'react'
import { Search, Menu, ArrowUpRight, ChevronDown, Flag, Timer, Trophy } from 'lucide-react'

const highlights = [
  {
    tag: 'LEGADO',
    title: 'Ayrton Senna: velocidade que virou eternidade',
    image: 'https://images.unsplash.com/photo-1532906619279-a4b7267c7b8a?auto=format&fit=crop&w=1200&q=85',
    size: 'feature-large'
  },
  {
    tag: 'TEMPORADA',
    title: 'Os protagonistas de uma nova era',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85'
  },
  {
    tag: 'HISTÓRIA',
    title: 'Circuitos que desafiam os limites',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85'
  }
]

const categories = [
  ['Carros', 'Engenharia, aerodinâmica e evolução', 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85'],
  ['Pilotos', 'Os nomes por trás dos capacetes', 'https://images.unsplash.com/photo-1532906619279-a4b7267c7b8a?auto=format&fit=crop&w=900&q=85'],
  ['Equipes', 'As escuderias e suas histórias', 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=85'],
  ['Pistas', 'Circuitos lendários pelo mundo', 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85'],
  ['Calendário', 'Etapas, sessões e resultados', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85'],
  ['Senna', 'A trajetória de um ícone', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85']
]

function Header() {
  const [open, setOpen] = useState(false)
  const links = ['Início', 'Carros', 'Pistas', 'Pilotos', 'Equipes', 'Calendário', 'Senna']
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="The Paddock — início">THE <span>PADDOCK</span><i>.</i></a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Abrir menu"><Menu /></button>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        {links.map((link, index) => <a className={index === 0 ? 'active' : ''} href={`#${index === 0 ? 'inicio' : link.toLowerCase()}`} key={link}>{link}</a>)}
      </nav>
      <button className="search-button" aria-label="Pesquisar"><Search size={19} /></button>
    </header>
  )
}

function SectionTitle({ eyebrow, title, link }) {
  return <div className="section-title"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{link && <a className="text-link" href="#explorar">Explorar tudo <ArrowUpRight size={16}/></a>}</div>
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-shade" />
      <Header />
      <div className="hero-content">
        <span className="eyebrow hero-eyebrow">FÓRMULA 1 · HISTÓRIA · VELOCIDADE · EMOÇÃO</span>
        <h1>THE<br/><span>PADDOCK</span></h1>
        <p>Uma enciclopédia completa da Fórmula 1. História, atualidade e tudo sobre o maior espetáculo do automobilismo.</p>
        <a className="primary-button" href="#explorar">Explore o universo da F1 <ArrowUpRight size={18}/></a>
      </div>
      <a className="scroll-cue" href="#destaques"><span /> ROLE PARA EXPLORAR <ChevronDown size={15}/></a>
      <div className="hero-index">01 <span>/ 07</span></div>
    </section>
  )
}

function Highlights() {
  return (
    <section className="section section-wide" id="destaques">
      <SectionTitle eyebrow="CURADORIA THE PADDOCK" title="Em destaque" link />
      <div className="highlights-grid">
        {highlights.map((item, i) => <a className={`highlight-card ${item.size || ''}`} href="#explorar" key={item.title}>
          <img src={item.image} alt="" loading="lazy"/>
          <div className="card-gradient"/>
          <div className="card-copy"><span className="eyebrow">{item.tag}</span><h3>{item.title}</h3><span className="card-read">Ler conteúdo <ArrowUpRight size={15}/></span></div>
        </a>)}
      </div>
    </section>
  )
}

function Explore() {
  return (
    <section className="section section-wide" id="explorar">
      <SectionTitle eyebrow="DESCUBRA" title="Explore a Fórmula 1" />
      <p className="section-intro">Do cockpit às arquibancadas: conheça cada parte do universo que faz da Fórmula 1 uma paixão mundial.</p>
      <div className="category-grid">
        {categories.map(([name, desc, image], i) => <a href={`#${name.toLowerCase()}`} className="category-card" key={name}>
          <img src={image} alt="" loading="lazy"/>
          <span className="category-number">0{i + 1}</span>
          <div><h3>{name}</h3><p>{desc}</p></div><ArrowUpRight className="category-arrow" size={21}/>
        </a>)}
      </div>
    </section>
  )
}

function NextRace() {
  return (
    <section className="race-section section-wide" id="calendário">
      <div className="race-image"><img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85" alt="Carro esportivo em pista" loading="lazy"/></div>
      <div className="race-content">
        <span className="eyebrow">NO RADAR</span>
        <h2>Próxima<br/><em>corrida.</em></h2>
        <p className="race-note">Acompanhe a próxima etapa do campeonato, os horários das sessões e os resultados.</p>
        <div className="race-meta">
          <div><Flag size={17}/><span><small>ETAPA</small><strong>Calendário da temporada</strong></span></div>
          <div><Timer size={17}/><span><small>PROGRAMAÇÃO</small><strong>Treinos · Classificação · Corrida</strong></span></div>
        </div>
        <a className="outline-button" href="#calendario">Ver calendário completo <ArrowUpRight size={17}/></a>
        <small className="data-note">Informações de corrida serão integradas à API na etapa de backend.</small>
      </div>
    </section>
  )
}

function Legacy() {
  return (
    <section className="legacy section-wide" id="senna">
      <img src="https://images.unsplash.com/photo-1532906619279-a4b7267c7b8a?auto=format&fit=crop&w=1800&q=85" alt="" loading="lazy"/>
      <div className="legacy-overlay"/>
      <div className="legacy-content"><span className="eyebrow">UM LEGADO ETERNO</span><h2>AYRTON<br/><span>SENNA</span></h2><p>Mais do que títulos e vitórias: uma história que ultrapassou as pistas e marcou gerações.</p><a className="primary-button" href="#senna">Conheça sua história <ArrowUpRight size={18}/></a></div>
    </section>
  )
}

function Footer() {
  return <footer className="footer"><a className="brand" href="#inicio">THE <span>PADDOCK</span><i>.</i></a><p>História, tecnologia e velocidade. Uma enciclopédia para quem vive a Fórmula 1.</p><span>© {new Date().getFullYear()} THE PADDOCK · PROJETO INDEPENDENTE</span></footer>
}

export default function App() {
  return <><Hero/><main><Highlights/><Explore/><NextRace/><Legacy/></main><Footer/></>
}
