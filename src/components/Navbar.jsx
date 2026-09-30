import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import logoWhite from '../assets/brand/nodi-logo-white.png'

const CHAPTERS = [
  { label: 'Inicio', href: '#top' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Negocios', href: '#negocios' },
  { label: 'Producto', href: '#producto' },
  { label: 'Conectar', href: '#cta' },
]

export default function Navbar() {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => setVisible(v > 0.03))
    return unsub
  }, [scrollYProgress])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container flex items-center justify-between pt-6">
        <a
          href="#top"
          className="pointer-events-auto transition-opacity duration-500"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <img src={logoWhite} alt="NODI" style={{ height: 45, width: 'auto' }} />
        </a>

        <nav
          className="hidden md:flex items-center gap-1 rounded-full px-2 py-2 pointer-events-auto transition-all duration-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            background: 'rgba(4,41,71,0.55)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {CHAPTERS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-colors"
              style={{ color: 'rgba(255,255,255,0.75)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >
              {c.label}
            </a>
          ))}
        </nav>
      </div>

      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{ scaleX: scrollYProgress, background: 'var(--aqua)' }}
      />
    </header>
  )
}
