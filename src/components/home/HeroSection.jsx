import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-shade" />
      <div className="hero-content">
        <span className="eyebrow hero-eyebrow">FÓRMULA 1 · HISTÓRIA · VELOCIDADE · EMOÇÃO</span>
        <h1>THE<br/><span>PADDOCK</span></h1>
        <p>Uma enciclopédia completa da Fórmula 1. História, atualidade e tudo sobre o maior espetáculo do automobilismo.</p>
        <Link className="primary-button" to="/carros">Explore o universo da F1 <ArrowUpRight size={18}/></Link>
      </div>
      <a className="scroll-cue" href="#destaques"><span /> ROLE PARA EXPLORAR <ChevronDown size={15}/></a>
      <div className="hero-index">01 <span>/ 07</span></div>
    </section>
  )
}
