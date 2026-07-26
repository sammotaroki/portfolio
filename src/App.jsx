import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Console from './components/Console'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Console />
        <Contact />
      </main>
    </>
  )
}
