import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Innovation from './components/Innovation'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.body.dataset.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="min-h-screen bg-sage">
      <Header />
      <main>
        <Hero />
        <Industries />
        <Innovation />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
