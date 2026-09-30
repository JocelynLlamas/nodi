import ConnectNode from '../components/ConnectNode'
import Reveal from '../components/Reveal'

const INDUSTRIES = [
  'Restaurantes', 'Cafeterías', 'Hoteles', 'Airbnb', 'Retail',
  'Salones de belleza', 'Barberías', 'Gimnasios', 'Consultorios',
  'Eventos', 'Ferias', 'Oficinas', 'Marcas personales',
]

export default function AnywherePlace() {
  return (
    <section id="negocios" className="relative overflow-hidden" style={{ background: 'var(--navy-deep)' }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="giant" style={{ fontSize: 'clamp(3rem, 16vw, 13rem)', color: 'rgba(255,255,255,0.035)' }}>
          EN CUALQUIER
        </span>
      </div>

      <div className="container relative py-32 md:py-44">
        <Reveal className="text-center">
          <span className="eyebrow" style={{ color: 'var(--aqua-light)' }}>Dónde vive NODI</span>
          <h2 className="giant mt-4" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)', color: '#fff' }}>
            EN CUALQUIER LUGAR.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
          {INDUSTRIES.map((label, i) => (
            <Reveal key={label} delay={i * 40} y={14}>
              <ConnectNode radius={110} strength={6} as="span" className="inline-block">
                <span
                  className="inline-flex items-center rounded-full px-5 py-3 text-[14px] font-medium cursor-default"
                  style={{
                    background: 'color-mix(in srgb, rgba(255,255,255,0.05) calc(100% - var(--intensity) * 100%), var(--aqua) calc(var(--intensity) * 100%))',
                    border: '1px solid rgba(255,255,255,0.14)',
                    color: 'color-mix(in srgb, rgba(255,255,255,0.82) calc(100% - var(--intensity) * 100%), var(--navy) calc(var(--intensity) * 100%))',
                    transition: 'background 0.25s var(--ease-out), color 0.25s var(--ease-out)',
                  }}
                >
                  {label}
                </span>
              </ConnectNode>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 text-center">
          <p className="font-round text-[20px] font-semibold" style={{ color: 'var(--aqua)' }}>
            "Ah, yo podría usar esto."
          </p>
        </Reveal>
      </div>
    </section>
  )
}
