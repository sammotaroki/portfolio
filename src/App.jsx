import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Console from './components/Console'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  // Subtle ambient parallax on the fixed grid texture — moves at a fraction of raw
  // scroll distance (not scroll progress) so the drift rate stays constant regardless
  // of total page height, and wraps every 60px (the grid's own tile size) since the
  // pattern repeats seamlessly at any offset.
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const st = ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const shift = (self.scroll() * 0.15) % 60
          document.body.style.setProperty('--grid-shift', `${(-shift).toFixed(2)}px`)
        },
      })
      return () => st.kill()
    })
    return () => mm.revert()
  }, [])

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
