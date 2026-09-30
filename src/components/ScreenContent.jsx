import { Star, Wifi, MessageCircle, BookOpen, ShoppingBag, Check } from 'lucide-react'
import { InstagramIcon } from './CustomIcons'

function ScreenShell({ eyebrow, icon: Icon, tint, children }) {
  return (
    <div className="w-full h-full flex flex-col pt-9" style={{ background: 'var(--mist)' }}>
      <div className="flex items-center gap-2 px-5 pb-4">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: tint }}
        >
          <Icon size={16} color="#fff" strokeWidth={2.4} />
        </div>
        <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: 'var(--navy)' }}>
          {eyebrow}
        </span>
      </div>
      <div className="flex-1 px-4 pb-4">{children}</div>
    </div>
  )
}

export function GoogleReviewsScreen() {
  return (
    <ScreenShell eyebrow="Google Reviews" icon={Star} tint="#f5a623">
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="text-[12px] font-semibold" style={{ color: 'var(--navy)' }}>¿Cómo fue tu visita?</p>
        <div className="flex gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} fill="#f5a623" color="#f5a623" />
          ))}
        </div>
        <div className="mt-4 h-9 rounded-full flex items-center justify-center text-[11px] font-semibold text-white" style={{ background: 'var(--navy)' }}>
          Publicar reseña
        </div>
      </div>
    </ScreenShell>
  )
}

export function MenuScreen() {
  return (
    <ScreenShell eyebrow="Menú digital" icon={BookOpen} tint="var(--aqua)">
      <div className="space-y-2">
        {['Entradas', 'Platos fuertes', 'Postres'].map((cat) => (
          <div key={cat} className="bg-white rounded-xl p-3 flex items-center justify-between shadow-sm">
            <span className="text-[11px] font-semibold" style={{ color: 'var(--navy)' }}>{cat}</span>
            <div className="w-10 h-8 rounded-lg" style={{ background: 'var(--mist-2)' }} />
          </div>
        ))}
      </div>
    </ScreenShell>
  )
}

export function WifiScreen() {
  return (
    <ScreenShell eyebrow="Wi-Fi" icon={Wifi} tint="#4a90d9">
      <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
        <Wifi size={30} color="var(--navy)" className="mx-auto" />
        <p className="text-[11px] mt-2 font-semibold" style={{ color: 'var(--navy)' }}>Conectado automáticamente</p>
        <div className="mt-3 h-9 rounded-full flex items-center justify-center gap-1 text-[11px] font-semibold" style={{ background: 'var(--mist-2)', color: 'var(--navy)' }}>
          <Check size={14} /> Sin buscar contraseñas
        </div>
      </div>
    </ScreenShell>
  )
}

export function InstagramScreen() {
  return (
    <ScreenShell eyebrow="Instagram" icon={InstagramIcon} tint="#d6478f">
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="w-12 h-12 rounded-full mx-auto" style={{ background: 'linear-gradient(135deg,#4CBAB1,#042947)' }} />
        <div className="grid grid-cols-3 gap-1 mt-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square rounded-md" style={{ background: 'var(--mist-2)' }} />
          ))}
        </div>
      </div>
    </ScreenShell>
  )
}

export function WhatsappScreen() {
  return (
    <ScreenShell eyebrow="WhatsApp" icon={MessageCircle} tint="#25b365">
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-2">
        <div className="rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] w-max" style={{ background: 'var(--mist-2)', color: 'var(--navy)' }}>
          Hola 👋 ¿en qué te ayudamos?
        </div>
        <div className="ml-auto rounded-2xl rounded-tr-sm px-3 py-2 text-[11px] w-max text-white" style={{ background: '#25b365' }}>
          Quiero más info
        </div>
      </div>
    </ScreenShell>
  )
}

export function CatalogScreen() {
  return (
    <ScreenShell eyebrow="Catálogo" icon={ShoppingBag} tint="var(--navy)">
      <div className="grid grid-cols-2 gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl p-2 shadow-sm">
            <div className="aspect-square rounded-lg" style={{ background: 'var(--mist-2)' }} />
            <div className="h-1.5 w-2/3 rounded-full mt-2" style={{ background: 'var(--mist-2)' }} />
          </div>
        ))}
      </div>
    </ScreenShell>
  )
}
