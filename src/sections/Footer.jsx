import { Phone } from 'lucide-react'
import { InstagramIcon } from '../components/CustomIcons'
import logoWhite from '../assets/brand/nodi-logo-white.png'
import WavePulse from '../components/WavePulse'

export default function Footer() {
  return (
    <footer id="contacto" className="relative" style={{ background: 'var(--navy-deep)' }}>
      <div className="container pt-4 pb-16 grid md:grid-cols-[1.2fr_1fr_1fr] gap-10" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="pt-10">
          <img src={logoWhite} alt="NODI" style={{ height: 60, width: 'auto' }} />
        </div>

        <div className="pt-10 flex flex-col gap-3 text-[13px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
          <span className="uppercase tracking-widest text-[11px] font-semibold" style={{ color: 'rgba(255,255,255,0.3)' }}>Explorar</span>
          <a href="#top">Inicio</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#negocios">Para negocios</a>
          <a href="#producto">Producto</a>
        </div>

        <div
          className="pt-10 flex flex-col gap-3 text-[13px]"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          <span
            className="uppercase tracking-widest text-[11px] font-semibold"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Contacto
          </span>

          <a
            href="tel:+524181189299"
            className="inline-flex items-center gap-2"
          >
            <Phone size={14} />
            418 118 9299
          </a>

          <a href="https://www.instagram.com/nodi_oficial/" className="inline-flex items-center gap-2">
            <InstagramIcon size={14} />
            @nodi_oficial
          </a>
        </div>

        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} NODI. Todos los derechos reservados.
          </span>
          <WavePulse size={26} />
        </div>
      </div>
    </footer>
  )
}
