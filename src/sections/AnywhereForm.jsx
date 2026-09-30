import { Cable, Wrench, Smartphone, Palette } from 'lucide-react'
import { BatteryOffIcon } from '../components/CustomIcons'
import Reveal from '../components/Reveal'
import ConnectNode from '../components/ConnectNode'

const FORMATS = [
  { name: 'Stickers', shape: 'sticker' },
  { name: 'Cards', shape: 'card' },
  { name: 'Displays', shape: 'stand' },
  { name: 'Placas', shape: 'plate' },
]

const BENEFITS = [
  { icon: BatteryOffIcon, label: 'Sin batería' },
  { icon: Cable, label: 'Sin cables' },
  { icon: Wrench, label: 'Sin mantenimiento' },
  { icon: Smartphone, label: 'Compatible con smartphones modernos' },
  { icon: Palette, label: 'Personalizable para cada negocio' },
]

function WaveMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="18" r="1.5" fill="var(--aqua)" />
      <path d="M7.5 13.5c2.5-2.6 6.5-2.6 9 0" stroke="var(--aqua)" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4.5 9.5c4.4-4.6 10.6-4.6 15 0" stroke="var(--aqua)" strokeWidth="1.7" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}

function ProductShape({ shape }) {
  const base = { background: 'linear-gradient(155deg,#fff,#eef4f4)', boxShadow: 'inset 0 0 0 1px rgba(4,41,71,0.06), 0 20px 30px -14px rgba(4,41,71,0.2)' }
  if (shape === 'sticker') return <div className="w-28 h-28 rounded-full flex items-center justify-center" style={base}><WaveMark size={28} /></div>
  if (shape === 'card') return <div className="w-36 h-24 rounded-2xl flex items-center justify-center" style={base}><WaveMark size={26} /></div>
  if (shape === 'stand') {
    return (
      <div className="relative w-28 h-28 flex items-end justify-center">
        <div className="w-24 h-16 rounded-t-2xl" style={{ background: 'linear-gradient(155deg, var(--navy-soft), var(--navy))', boxShadow: '0 20px 30px -14px rgba(4,41,71,0.35)' }} />
        <div className="absolute top-3 flex items-center justify-center w-full"><WaveMark size={22} /></div>
      </div>
    )
  }
  return (
    <div className="w-32 h-32 rounded-3xl flex items-center justify-center" style={{ background: 'linear-gradient(155deg, var(--navy-soft), var(--navy))', boxShadow: '0 20px 30px -14px rgba(4,41,71,0.35)' }}>
      <WaveMark size={28} />
    </div>
  )
}

export default function AnywhereForm() {
  return (
    <section id="producto" className="relative" style={{ background: 'var(--paper)' }}>
      <div className="container py-32 md:py-44">
        <Reveal className="text-center">
          <span className="eyebrow" style={{ color: 'var(--aqua-dim)' }}>El producto físico</span>
          <h2 className="giant mt-4" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)', color: 'var(--navy)' }}>
            EN CUALQUIER FORMA.
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {FORMATS.map((f, i) => (
            <Reveal key={f.name} delay={i * 90}>
              <ConnectNode radius={140} strength={6} className="block">
                <div className="rounded-3xl p-8 flex flex-col items-center gap-6 transition-transform duration-300" style={{ background: 'var(--mist)' }}>
                  <ProductShape shape={f.shape} />
                  <span className="text-[13px] font-semibold" style={{ color: 'var(--navy)' }}>{f.name}</span>
                </div>
              </ConnectNode>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-5">
          {BENEFITS.map((b) => (
            <div key={b.label} className="flex items-center gap-2.5">
              <b.icon size={16} color="var(--navy)" />
              <span className="text-[13px] font-medium" style={{ color: 'var(--navy)' }}>{b.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
