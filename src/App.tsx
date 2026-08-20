import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
      </main>
    </>
  )
}

export default App
