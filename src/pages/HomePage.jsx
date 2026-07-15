import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SectorHub from '../components/SectorHub'
import Innovation from '../components/Innovation'
import About from '../components/About'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <SectorHub />
      <Innovation />
      <About />
      <Contact />
    </Layout>
  )
}
