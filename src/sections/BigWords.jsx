import Reveal from '../components/Reveal'

const WORDS = [
  { top: 'UN', bottom: 'TOQUE.' },
  { top: 'UNA', bottom: 'CONEXIÓN.' },
  { top: 'INFINITAS', bottom: 'POSIBILIDADES.' },
]

export default function BigWords() {
  return (
    <>
      {WORDS.map((w, i) => (
        <section
          key={w.bottom}
          className="relative h-screen flex items-center justify-center"
          style={{ background: 'var(--navy-deep)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                i === WORDS.length - 1
                  ? 'radial-gradient(60% 50% at 50% 55%, rgba(76,186,177,0.14), transparent 65%)'
                  : 'none',
            }}
          />
          <Reveal y={40} className="text-center px-6">
            <p
              className="giant"
              style={{
                fontSize: 'clamp(2.8rem, 11vw, 8rem)',
                color: i === WORDS.length - 1 ? 'var(--aqua)' : '#fff',
              }}
            >
              {w.top}
              <br />
              {w.bottom}
            </p>
          </Reveal>
        </section>
      ))}
    </>
  )
}
