import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ConnectNode from '../components/ConnectNode'
import WavePulse from '../components/WavePulse'

const NODES = [
  { label: 'Google Reviews', x: 12, y: 22 },
  { label: 'Instagram', x: 86, y: 18 },
  { label: 'WhatsApp', x: 8, y: 68 },
  { label: 'WiFi', x: 90, y: 64 },
  { label: 'Menú', x: 20, y: 88 },
  { label: 'Contacto', x: 80, y: 90 },
]

const ANCHOR = { x: 58.5, y: 33 }

export default function Hero() {
  const ref = useRef(null)
  const [dims, setDims] = useState({ w: 1, h: 1 })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.86])

  useEffect(() => {
    const onResize = () => setDims({ w: window.innerWidth, h: window.innerHeight })
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section id="top" ref={ref} className="relative h-screen overflow-hidden" style={{ background: 'var(--navy-deep)' }}>
      <motion.div style={{ opacity: fade, scale }} className="absolute inset-0">
        {/* faint dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(55% 55% at 58% 33%, rgba(76,186,177,0.16), transparent 65%)' }}
        />

        {/* connection lines — same percent-space as the node labels below */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {NODES.map((n) => (
            <line
              key={n.label}
              x1={ANCHOR.x}
              y1={ANCHOR.y}
              x2={n.x}
              y2={n.y}
              stroke="rgba(76,186,177,0.35)"
              strokeWidth="0.12"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* floating connected labels */}
        {NODES.map((n, i) => (
          <ConnectNode
            key={n.label}
            radius={150}
            strength={14}
            className="absolute"
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%,-50%)' }}
          >
            <FieldLabel label={n.label} delay={0.6 + i * 0.08} />
          </ConnectNode>
        ))}

        {/* giant wordmark */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="giant relative select-none"
            style={{ fontSize: 'clamp(4.5rem, 20vw, 15rem)', color: '#fff' }}
          >
            nod
            <span className="relative inline-block">
              i
              <span
                className="absolute left-1/2"
                style={{ bottom: '0.92em', transform: 'translateX(-50%)', width: '0.5em', height: '0.5em' }}
              >
                <WavePulse size="100%" color="var(--aqua)" />
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 eyebrow"
            style={{ color: 'var(--aqua-light)', letterSpacing: '0.3em' }}
          >
            todo conecta
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
            mueve el cursor · scroll
          </span>
          <span className="w-px h-8 scroll-line" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
        </motion.div>
      </motion.div>

      <style>{`
        .connect-node{ cursor: default; }
        .connect-node:hover .field-label, .connect-node:hover .field-dot{ }
      `}</style>
    </section>
  )
}

function FieldLabel({ label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className="field-label flex items-center gap-2"
    >
      <span
        className="field-dot rounded-full block"
        style={{
          width: 7,
          height: 7,
          background: 'var(--aqua)',
          boxShadow: '0 0 calc(4px + var(--intensity) * 14px) rgba(76,186,177, calc(0.4 + var(--intensity) * 0.6))',
          transform: 'scale(calc(1 + var(--intensity) * 0.6))',
          transition: 'transform 0.2s var(--ease-out)',
        }}
      />
      <span
        className="text-[12px] md:text-[13px] font-medium whitespace-nowrap"
        style={{
          color: 'color-mix(in srgb, rgba(255,255,255,0.55) calc(100% - var(--intensity) * 100%), var(--aqua-light) calc(var(--intensity) * 100%))',
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}
