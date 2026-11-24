import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout.jsx'
import Home from './pages/Home/Home.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import DriversPage from './pages/Drivers/DriversPage.jsx'

const sections = [
  { path: '/carros', title: 'Carros', description: 'Engenharia, aerodinâmica e a evolução dos carros da Fórmula 1.' },
  { path: '/pistas', title: 'Pistas', description: 'Conheça os circuitos que fazem parte da história da categoria.' },
  { path: '/equipes', title: 'Equipes', description: 'As escuderias, suas histórias e temporadas.' },
  { path: '/calendario', title: 'Calendário', description: 'Etapas, sessões, classificações e resultados.' },
  { path: '/senna', title: 'Ayrton Senna', description: 'Uma seção especial dedicada à trajetória e ao legado de Ayrton Senna.' },
]

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pilotos" element={<DriversPage />} />
        {sections.map(section => (
          <Route key={section.path} path={section.path} element={<PlaceholderPage {...section} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
