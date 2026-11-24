import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'

const links = [
  ['Início', '/'], ['Carros', '/carros'], ['Pistas', '/pistas'],
  ['Pilotos', '/pilotos'], ['Equipes', '/equipes'],
  ['Calendário', '/calendario'], ['Senna', '/senna']
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>THE <span>PADDOCK</span><i>.</i></Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
      </nav>
      <button className="search-button" aria-label="Pesquisa (em desenvolvimento)"><Search size={19} /></button>
    </header>
  )
}
