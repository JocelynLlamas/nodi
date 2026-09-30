import { useState } from 'react'
import { Star, Wifi, MessageCircle, BookOpen, ShoppingBag, ArrowRight } from 'lucide-react'
import { InstagramIcon } from '../components/CustomIcons'
import PhoneFrame from '../components/PhoneFrame'
import NodiTag from '../components/NodiTag'
import Reveal from '../components/Reveal'
import ConnectNode from '../components/ConnectNode'
import {
  GoogleReviewsScreen,
  MenuScreen,
  WifiScreen,
  InstagramScreen,
  WhatsappScreen,
  CatalogScreen,
} from '../components/ScreenContent'

const OPTIONS = [
  { label: 'Google Reviews', icon: Star, Screen: GoogleReviewsScreen },
  { label: 'Instagram', icon: InstagramIcon, Screen: InstagramScreen },
  { label: 'WhatsApp', icon: MessageCircle, Screen: WhatsappScreen },
  { label: 'Menú', icon: BookOpen, Screen: MenuScreen },
  { label: 'Wi-Fi', icon: Wifi, Screen: WifiScreen },
  { label: 'Catálogo', icon: ShoppingBag, Screen: CatalogScreen },
]

export default function FinalConnect() {
  const [active, setActive] = useState(null)
  const current = active !== null ? OPTIONS[active] : null
  const ActiveScreen = current?.Screen

  return (
    <section id="cta" className="relative overflow-hidden" style={{ background: 'var(--navy-deep)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(55% 45% at 50% 20%, rgba(76,186,177,0.16), transparent 65%)' }}
      />

      <div className="container relative pt-32 pb-20 md:pt-44 text-center">
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--aqua-light)' }}>Pruébalo tú mismo</span>
          <h2 className="giant mt-4" style={{ fontSize: 'clamp(2.6rem, 8vw, 5.5rem)', color: '#fff' }}>
            ¿QUÉ QUIERES
            <br />CONECTAR?
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-12 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {OPTIONS.map((opt, i) => (
            <ConnectNode key={opt.label} as="button" radius={110} strength={8} onClick={() => setActive(i)}>
              <span
                className="flex items-center gap-2 rounded-full px-5 py-3.5 text-[13px] font-semibold transition-all duration-300"
                style={{
                  background: active === i ? 'var(--aqua)' : 'rgba(255,255,255,0.06)',
                  color: active === i ? 'var(--navy)' : 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <opt.icon size={15} />
                {opt.label}
              </span>
            </ConnectNode>
          ))}
        </Reveal>

        <div className="relative mt-16 flex items-center justify-center" style={{ minHeight: 480 }}>
          <div className="absolute z-0" style={{ left: 'calc(50% - 150px)', bottom: '8%' }}>
            <NodiTag pulsing={active !== null} size={84} />
          </div>
          <div className="relative z-10" style={{ transform: 'translateX(30px)' }}>
            <PhoneFrame>
              {ActiveScreen ? (
                <ActiveScreen key={active} />
              ) : (
                <div className="w-full h-full flex items-center justify-center px-6 text-center" style={{ background: 'var(--mist)' }}>
                  <span className="text-[13px] font-medium" style={{ color: '#7c8894' }}>
                    Elige una opción arriba
                  </span>
                </div>
              )}
            </PhoneFrame>
          </div>
        </div>

        <Reveal delay={100} className="mt-20">
          <p className="max-w-lg mx-auto text-[16px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Convierte cualquier punto de tu negocio en una experiencia digital con NODI.
          </p>
          {/* <ConnectNode
            as="a"
            href="#contacto"
            radius={130}
            strength={10}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold mt-8"
            style={{ background: 'var(--aqua)', color: 'var(--navy)' }}
          >
            Quiero mi NODI <ArrowRight size={17} />
          </ConnectNode> */}
        </Reveal>
      </div>
    </section>
  )
}
