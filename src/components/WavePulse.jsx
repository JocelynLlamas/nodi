export default function WavePulse({ size = 64, color = 'var(--aqua)', active = true, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="78" r="6" fill={color} />
      <path
        d="M35 55c8-9 22-9 30 0"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        style={active ? { transformOrigin: '50px 78px', animation: 'wavePulse 2.2s var(--ease-out) infinite' } : undefined}
      />
      <path
        d="M22 40c17-18 39-18 56 0"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.75"
        style={active ? { transformOrigin: '50px 78px', animation: 'wavePulse 2.2s var(--ease-out) 0.25s infinite' } : undefined}
      />
      <style>{`
        @keyframes wavePulse{
          0%{ opacity: .25; transform: scale(.85); }
          40%{ opacity: 1; transform: scale(1); }
          100%{ opacity: .25; transform: scale(.85); }
        }
      `}</style>
    </svg>
  )
}
