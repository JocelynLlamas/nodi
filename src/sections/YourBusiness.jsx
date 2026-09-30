import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'

const PRESETS = [
  { name: 'Café Marea', color: '#c9752a', mark: 'M' },
  { name: 'Studio Lúa', color: '#7a4fd6', mark: 'L' },
  { name: 'Barbería Norte', color: '#1e6b4f', mark: 'N' },
  { name: 'NODI', color: '#4CBAB1', mark: 'n' },
]

export default function YourBusiness() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % PRESETS.length), 2600)
    return () => clearInterval(id)
  }, [])

  const preset = PRESETS[active]

  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--navy-deep)' }}>
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{ background: `radial-gradient(50% 45% at 50% 45%, ${preset.color}22, transparent 65%)` }}
      />
      <div className="container relative py-32 md:py-44 flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--aqua-light)' }}>Personalización</span>
          <h2 className="giant mt-4" style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)', color: '#fff' }}>
            TU NEGOCIO.<br />TU NODI.
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <div
            className="w-52 h-52 md:w-64 md:h-64 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 transition-colors duration-700 mx-auto"
            style={{ background: preset.color, boxShadow: '0 30px 60px -20px rgba(0,0,0,0.45)' }}
          >
            <span
              key={preset.mark}
              className="font-round text-white flex items-center justify-center rounded-2xl"
              style={{ fontSize: 44, fontWeight: 800, width: 84, height: 84, background: 'rgba(255,255,255,0.16)' }}
            >
              {preset.mark}
            </span>
            <span className="text-white text-[13px] font-semibold tracking-wide">{preset.name}</span>
          </div>
        </Reveal>

        <Reveal delay={260} className="mt-9 flex gap-3">
          {PRESETS.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              aria-label={p.name}
              className="w-3 h-3 rounded-full transition-transform duration-300"
              style={{ background: p.color, transform: active === i ? 'scale(1.5)' : 'scale(1)' }}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
