export default function PhoneFrame({ children, className = '', tilt = 0 }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `rotate(${tilt}deg)`, transition: 'transform 0.6s var(--ease-out)' }}
    >
      <div
        className="relative rounded-[2.6rem] p-[10px]"
        style={{
          width: 260,
          height: 540,
          background: 'linear-gradient(155deg, #14324e, #061b30)',
          boxShadow: '0 30px 60px -20px rgba(4,41,71,0.45), 0 8px 20px -8px rgba(4,41,71,0.35)',
        }}
      >
        <div
          className="relative w-full h-full rounded-[2.1rem] overflow-hidden"
          style={{ background: 'var(--paper)' }}
        >
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 z-20 rounded-full"
            style={{ width: 70, height: 18, background: '#061b30' }}
          />
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  )
}
