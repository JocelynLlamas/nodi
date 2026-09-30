import { useEffect, useRef, useState } from 'react'
import { useScroll } from 'framer-motion'
import PhoneFrame from '../components/PhoneFrame'
import NodiTag from '../components/NodiTag'
import {
  GoogleReviewsScreen,
  MenuScreen,
  WifiScreen,
  InstagramScreen,
  WhatsappScreen,
  CatalogScreen,
} from '../components/ScreenContent'

const CASES = [
  { title: 'GOOGLE REVIEWS', Screen: GoogleReviewsScreen },
  { title: 'INSTAGRAM', Screen: InstagramScreen },
  { title: 'WHATSAPP', Screen: WhatsappScreen },
  { title: 'MENÚ DIGITAL', Screen: MenuScreen },
  { title: 'WIFI', Screen: WifiScreen },
  { title: 'CATÁLOGO', Screen: CatalogScreen },
]

export default function OneNodi() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const [active, setActive] = useState(0)
  const [pulseKey, setPulseKey] = useState(0)

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      const idx = Math.min(CASES.length - 1, Math.floor(v * CASES.length))
      setActive((prev) => {
        if (prev !== idx) setPulseKey((k) => k + 1)
        return idx
      })
    })
    return unsub
  }, [scrollYProgress])

  const ActiveScreen = CASES[active].Screen

  return (
    <section id="soluciones" ref={ref} className="relative" style={{ height: `${CASES.length * 85}vh`, background: 'var(--navy-deep)' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(50% 45% at 50% 50%, rgba(76,186,177,0.1), transparent 65%)' }}
        />

        <div className="absolute top-14 left-0 right-0 text-center px-6">
          <span className="eyebrow" style={{ color: 'var(--aqua-light)' }}>Un NODI. Muchas posibilidades.</span>
        </div>

        {/* giant case label, crossfading */}
        <div className="absolute inset-0 flex items-center justify-center px-6 overflow-hidden">
          <h3
            key={active}
            className="giant text-center select-none"
            style={{
              fontSize: 'clamp(2.2rem, 9vw, 6.5rem)',
              color: 'rgba(255,255,255,0.06)',
              animation: 'caseIn 0.7s var(--ease-out)',
            }}
          >
            {CASES[active].title}
          </h3>
        </div>

        <div className="relative h-full flex items-center justify-center gap-10 md:gap-20">
          <div className="relative">
            <NodiTag key={pulseKey} pulsing size={80} />
          </div>
          <PhoneFrame className="scale-[0.8] md:scale-100">
            <ActiveScreen key={active} />
          </PhoneFrame>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-2">
          {CASES.map((c, i) => (
            <span
              key={c.title}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                background: i === active ? 'var(--aqua)' : 'rgba(255,255,255,0.25)',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes caseIn{
          from{ opacity: 0; transform: scale(0.94); }
          to{ opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  )
}
