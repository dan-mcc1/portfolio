import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Outside } from './components/Outside'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Nav />
      <main>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Outside />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
