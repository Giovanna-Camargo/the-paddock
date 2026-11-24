import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function SectionTitle({ eyebrow, title, linkTo, linkLabel = 'Explorar tudo' }) {
  return (
    <div className="section-title">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {linkTo && <Link className="text-link" to={linkTo}>{linkLabel} <ArrowUpRight size={16}/></Link>}
    </div>
  )
}
