export default function NodiTag({ pulsing = false, size = 92 }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {pulsing && (
        <>
          <span className="ripple-ring" style={{ animationDelay: '0s' }} />
          <span className="ripple-ring" style={{ animationDelay: '0.6s' }} />
          <span className="ripple-ring" style={{ animationDelay: '1.2s' }} />
        </>
      )}
      <div
        className="relative rounded-2xl flex items-center justify-center"
        style={{
          width: size,
          height: size,
          background: 'linear-gradient(155deg, var(--navy-soft), var(--navy))',
          boxShadow: '0 18px 30px -12px rgba(4,41,71,0.5)',
        }}
      >
        <svg width={size * 0.42} height={size * 0.42} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="18" r="1.6" fill="var(--aqua)" />
          <path d="M7.5 13.5c2.5-2.6 6.5-2.6 9 0" stroke="var(--aqua)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4.5 9.5c4.4-4.6 10.6-4.6 15 0" stroke="var(--aqua)" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
        </svg>
      </div>
      <style>{`
        .ripple-ring{
          position:absolute;
          inset:0;
          border-radius: 1rem;
          border: 2px solid var(--aqua);
          animation: rippleOut 1.8s var(--ease-out) infinite;
        }
        @keyframes rippleOut{
          0%{ transform: scale(1); opacity: 0.55; }
          100%{ transform: scale(1.9); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
