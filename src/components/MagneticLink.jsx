import { useRef } from 'react'
import gsap from 'gsap'

export default function MagneticLink({ href, children, className, ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.28
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.28
    gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
  }

  return (
    <a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={className} {...rest}>
      {children}
    </a>
  )
}
