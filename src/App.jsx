import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SectorPage from './pages/SectorPage'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.body.dataset.lang = i18n.language
  }, [i18n.language])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sector/:key" element={<SectorPage />} />
    </Routes>
  )
}

export default App
