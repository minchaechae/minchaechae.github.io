import Navbar       from './components/Navbar'
import About        from './components/About'
import News         from './components/News'
import Publications from './components/Publications'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <About />
        <News />
        <Publications />
      </main>

      <Footer />
    </div>
  )
}
