import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
