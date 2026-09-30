import { useEffect, useRef } from 'react'
import { useField } from '../lib/field'

export default function FieldCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const field = useField()
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })

  useEffect(() => {
    if (field.isTouch) return
    const unsub = field.subscribe((pointer) => {
      if (!pointer.active) return
      pos.current = { x: pointer.x, y: pointer.y }
      ring.current.x += (pos.current.x - ring.current.x) * 0.18
      ring.current.y += (pos.current.y - ring.current.y) * 0.18
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
    })
    return unsub
  }, [field])

  if (field.isTouch) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]" aria-hidden="true">
      <div
        ref={ringRef}
        className="absolute rounded-full"
        style={{
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          border: '1.5px solid rgba(76,186,177,0.55)',
          transform: 'translate(-100px,-100px)',
        }}
      />
      <div
        ref={dotRef}
        className="absolute rounded-full"
        style={{
          width: 5,
          height: 5,
          marginLeft: -2.5,
          marginTop: -2.5,
          background: 'var(--aqua)',
          transform: 'translate(-100px,-100px)',
        }}
      />
    </div>
  )
}
