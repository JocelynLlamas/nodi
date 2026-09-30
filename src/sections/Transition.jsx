import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import NodiTag from '../components/NodiTag'

// hand-placed starting positions (percent) for the converging particles
const PARTICLES = [
  { x: 8, y: 18 }, { x: 92, y: 14 }, { x: 15, y: 82 }, { x: 88, y: 86 },
  { x: 50, y: 6 }, { x: 4, y: 50 }, { x: 96, y: 50 }, { x: 50, y: 94 },
  { x: 25, y: 30 }, { x: 75, y: 25 }, { x: 22, y: 70 }, { x: 78, y: 72 },
  { x: 38, y: 12 }, { x: 62, y: 88 },
]

export default function Transition() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const bgOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const tagScale = useTransform(scrollYProgress, [0.62, 0.82], [0, 1])
  const tagOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1])
  const textOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 1])
  const textY = useTransform(scrollYProgress, [0.8, 0.95], [16, 0])

  return (
    <section id="toque" ref={ref} className="relative" style={{ height: '240vh', background: 'var(--navy-deep)' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0" style={{ opacity: bgOpacity, background: 'var(--navy-deep)' }} />

        <div className="absolute inset-0">
          {PARTICLES.map((p, i) => (
            <Particle key={i} start={p} progress={scrollYProgress} index={i} />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.div style={{ scale: tagScale, opacity: tagOpacity }}>
            <NodiTag pulsing size={110} />
          </motion.div>
          <motion.p
            style={{ opacity: textOpacity, y: textY, fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 700, color: '#fff' }}
            className="font-round mt-8"
          >
            Todo empieza con un toque.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function Particle({ start, progress, index }) {
  const x = useTransform(progress, [0, 0.55], [`${start.x}%`, '50%'])
  const y = useTransform(progress, [0, 0.55], [`${start.y}%`, '50%'])
  const opacity = useTransform(progress, [0, 0.1, 0.45, 0.6], [0, 0.9, 0.9, 0])
  const size = 4 + (index % 4)

  return (
    <motion.span
      className="absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        background: 'var(--aqua)',
        opacity,
        boxShadow: '0 0 12px rgba(76,186,177,0.7)',
      }}
    />
  )
}
