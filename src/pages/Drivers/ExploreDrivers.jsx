import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, ArrowUpRight, X } from 'lucide-react'

const currentDrivers = [
  ['Lando Norris','01','Reino Unido','🇬🇧','McLaren','LN'],
  ['Oscar Piastri','81','Austrália','🇦🇺','McLaren','OP'],
  ['Charles Leclerc','16','Mônaco','🇲🇨','Ferrari','CL'],
  ['Lewis Hamilton','44','Reino Unido','🇬🇧','Ferrari','LH'],
  ['Max Verstappen','03','Países Baixos','🇳🇱','Red Bull Racing','MV'],
  ['Isack Hadjar','06','França','🇫🇷','Red Bull Racing','IH'],
  ['George Russell','63','Reino Unido','🇬🇧','Mercedes','GR'],
  ['Kimi Antonelli','12','Itália','🇮🇹','Mercedes','KA'],
  ['Fernando Alonso','14','Espanha','🇪🇸','Aston Martin','FA'],
  ['Lance Stroll','18','Canadá','🇨🇦','Aston Martin','LS'],
  ['Pierre Gasly','10','França','🇫🇷','Alpine','PG'],
  ['Franco Colapinto','43','Argentina','🇦🇷','Alpine','FC'],
  ['Esteban Ocon','31','França','🇫🇷','Haas','EO'],
  ['Oliver Bearman','87','Reino Unido','🇬🇧','Haas','OB'],
  ['Arvid Lindblad','41','Reino Unido','🇬🇧','Racing Bulls','AL'],
  ['Liam Lawson','30','Nova Zelândia','🇳🇿','Racing Bulls','LL'],
  ['Alexander Albon','23','Tailândia','🇹🇭','Williams','AA'],
  ['Carlos Sainz','55','Espanha','🇪🇸','Williams','CS'],
  ['Nico Hülkenberg','27','Alemanha','🇩🇪','Audi','NH'],
  ['Gabriel Bortoleto','05','Brasil','🇧🇷','Audi','GB'],
  ['Sergio Pérez','11','México','🇲🇽','Cadillac','SP'],
  ['Valtteri Bottas','77','Finlândia','🇫🇮','Cadillac','VB'],
].map(([name,number,country,flag,team,initials])=>({name,number,country,flag,team,initials,status:'active',decade:'2020',champion:['Lewis Hamilton','Max Verstappen'].includes(name),titles:name==='Lewis Hamilton'?7:name==='Max Verstappen'?4:0}))

const historicDrivers = [
  ['Ayrton Senna','12','Brasil','🇧🇷','McLaren','AS','1980',3],
  ['Michael Schumacher','5','Alemanha','🇩🇪','Ferrari','MS','1990',7],
  ['Juan Manuel Fangio','1','Argentina','🇦🇷','Mercedes','JF','1950',5],
  ['Alain Prost','2','França','🇫🇷','McLaren','AP','1980',4],
  ['Niki Lauda','1','Áustria','🇦🇹','Ferrari','NL','1970',3],
  ['Jackie Stewart','6','Reino Unido','🇬🇧','Tyrrell','JS','1960',3],
  ['Nelson Piquet','1','Brasil','🇧🇷','Brabham','NP','1970',3],
  ['Mika Häkkinen','8','Finlândia','🇫🇮','McLaren','MH','1990',2],
  ['Sebastian Vettel','5','Alemanha','🇩🇪','Red Bull Racing','SV','2000',4],
  ['Kimi Räikkönen','7','Finlândia','🇫🇮','Ferrari','KR','2000',1],
  ['Nigel Mansell','5','Reino Unido','🇬🇧','Williams','NM','1980',1],
  ['Emerson Fittipaldi','1','Brasil','🇧🇷','McLaren','EF','1970',2],
  ['Graham Hill','5','Reino Unido','🇬🇧','Lotus','GH','1960',2],
  ['Jim Clark','5','Reino Unido','🇬🇧','Lotus','JC','1960',2],
  ['Jenson Button','22','Reino Unido','🇬🇧','Brawn GP','JB','2000',1],
  ['Damon Hill','5','Reino Unido','🇬🇧','Williams','DH','1990',1],
  ['Jacques Villeneuve','3','Canadá','🇨🇦','Williams','JV','1990',1],
].map(([name,number,country,flag,team,initials,decade,titles])=>({name,number,country,flag,team,initials,status:'historic',decade,champion:titles>0,titles}))

const allDrivers = [...currentDrivers, ...historicDrivers]
const teams = [...new Set(allDrivers.map(d=>d.team))].sort()
const countries = [...new Set(allDrivers.map(d=>d.country))].sort()
const decades = ['1950','1960','1970','1980','1990','2000','2010','2020']

function DriverArchiveCard({driver,index}) {
  const tone = driver.status === 'active' ? 'active' : 'historic'
  return <article className={`archive-driver-card archive-driver-card--${tone}`} style={{'--archive-index':index}}>
    <div className="archive-driver-art">
      <span className="archive-driver-number">{driver.number}</span>
      <span className="archive-driver-era">{driver.status === 'active' ? '2026 GRID' : `${driver.decade} ERA`}</span>
      <span className="archive-driver-monogram">{driver.initials}</span>
      <span className="archive-driver-art-caption">{driver.team}</span>
    </div>
    <div className="archive-driver-info">
      <span className="archive-driver-team">{driver.team}</span>
      <div className="archive-driver-name-row"><h3>{driver.name}</h3>{driver.champion && <span className="archive-champion-mark" title={`${driver.titles} títulos mundiais`}>★</span>}</div>
      <div className="archive-driver-meta"><span>{driver.flag}</span>{driver.country}<span className="archive-driver-dot">·</span>{driver.status === 'active' ? 'Em atividade' : 'Histórico'}</div>
    </div>
    <div className="archive-driver-bottom"><span>{driver.champion ? `${driver.titles} ${driver.titles === 1 ? 'TÍTULO' : 'TÍTULOS'}` : driver.status === 'active' ? 'PILOTO 2026' : 'ARQUIVO F1'}</span><ArrowUpRight size={15}/></div>
  </article>
}

export default function ExploreDrivers() {
  const [query,setQuery] = useState('')
  const [category,setCategory] = useState('all')
  const [team,setTeam] = useState('all')
  const [country,setCountry] = useState('all')
  const [decade,setDecade] = useState('all')
  const [championsOnly,setChampionsOnly] = useState(false)
  const [showFilters,setShowFilters] = useState(false)
  const [limit,setLimit] = useState(12)

  const filtered = useMemo(()=>allDrivers.filter(driver=>{
    const term=query.trim().toLocaleLowerCase('pt-BR')
    return (!term || `${driver.name} ${driver.team} ${driver.country}`.toLocaleLowerCase('pt-BR').includes(term))
      && (category==='all' || driver.status===category)
      && (team==='all' || driver.team===team)
      && (country==='all' || driver.country===country)
      && (decade==='all' || driver.decade===decade)
      && (!championsOnly || driver.champion)
  }),[query,category,team,country,decade,championsOnly])

  const resetFilters=()=>{setQuery('');setCategory('all');setTeam('all');setCountry('all');setDecade('all');setChampionsOnly(false);setLimit(12)}
  const hasFilters=query || category!=='all' || team!=='all' || country!=='all' || decade!=='all' || championsOnly

  return <section className="explore-drivers-section" id="explore-drivers">
    <div className="explore-drivers-topline"><span>THE PADDOCK / DRIVER ARCHIVE</span><span>HISTORY · PEOPLE · RECORDS</span></div>
    <div className="explore-drivers-layout">
      <header className="explore-drivers-intro">
        <span className="explore-drivers-eyebrow"><i/> CATÁLOGO COMPLETO</span>
        <h2>EXPLORE <strong>THE DRIVERS</strong></h2>
        <p>Uma história contada por gerações de pilotos. Encontre nomes, equipes e campeões de todas as épocas da Fórmula 1.</p>
        <div className="explore-archive-total"><b>{allDrivers.length}</b><span>PERFIS NO CATÁLOGO INICIAL</span></div>
      </header>
      <div className="explore-drivers-content">
        <label className="archive-search"><Search size={17}/><input value={query} onChange={e=>{setQuery(e.target.value);setLimit(12)}} placeholder="Buscar piloto, equipe ou nacionalidade..." /><kbd>⌘ K</kbd></label>
        <div className="archive-toolbar">
          <div className="archive-tabs" role="group" aria-label="Filtrar por período">
            {[['all','Todos'],['active','Em atividade'],['historic','Históricos']].map(([value,label])=><button key={value} type="button" className={category===value?'is-active':''} onClick={()=>{setCategory(value);setLimit(12)}}>{label}</button>)}
          </div>
          <button className={`archive-filter-toggle ${showFilters?'is-open':''}`} type="button" onClick={()=>setShowFilters(v=>!v)}><SlidersHorizontal size={15}/> FILTROS <span>{showFilters?'−':'+'}</span></button>
        </div>
        {showFilters && <div className="archive-filter-panel">
          <label>EQUIPE<select value={team} onChange={e=>{setTeam(e.target.value);setLimit(12)}}><option value="all">Todas as equipes</option>{teams.map(v=><option key={v}>{v}</option>)}</select></label>
          <label>NACIONALIDADE<select value={country} onChange={e=>{setCountry(e.target.value);setLimit(12)}}><option value="all">Todas</option>{countries.map(v=><option key={v}>{v}</option>)}</select></label>
          <label>DÉCADA<select value={decade} onChange={e=>{setDecade(e.target.value);setLimit(12)}}><option value="all">Todas as décadas</option>{decades.map(v=><option key={v} value={v}>{v}s</option>)}</select></label>
          <label className="archive-champions-filter"><input type="checkbox" checked={championsOnly} onChange={e=>{setChampionsOnly(e.target.checked);setLimit(12)}}/> Apenas campeões</label>
          <button type="button" className="archive-reset" onClick={resetFilters}><X size={13}/> LIMPAR FILTROS</button>
        </div>}
        <div className="archive-results-line"><span>{filtered.length} RESULTADOS</span><span>ORDENADOS POR RELEVÂNCIA</span></div>
        {filtered.length ? <div className="archive-driver-grid">{filtered.slice(0,limit).map((driver,index)=><DriverArchiveCard key={`${driver.name}-${driver.status}`} driver={driver} index={index}/>)}</div> : <div className="archive-empty"><strong>NENHUM PILOTO ENCONTRADO</strong><span>Tente alterar a busca ou remover alguns filtros.</span><button type="button" onClick={resetFilters}>LIMPAR BUSCA</button></div>}
        {filtered.length>limit && <button type="button" className="archive-load-more" onClick={()=>setLimit(v=>v+12)}>CARREGAR MAIS PILOTOS <span>＋</span></button>}
        <p className="archive-data-note">CATÁLOGO INICIAL DEMONSTRATIVO · DADOS HISTÓRICOS E PERFIS COMPLETOS SERÃO EXPANDIDOS NA INTEGRAÇÃO COM A BASE DE DADOS.</p>
      </div>
    </div>
  </section>
}
