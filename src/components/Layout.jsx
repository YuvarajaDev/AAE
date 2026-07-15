import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
