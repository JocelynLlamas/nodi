import { createContext, useContext, useEffect, useRef, useState } from 'react'

const FieldContext = createContext(null)

export function FieldProvider({ children }) {
  const pointer = useRef({ x: -9999, y: -9999, active: false })
  const subscribers = useRef(new Set())
  const raf = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const touch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    setIsTouch(touch)

    const loop = () => {
      subscribers.current.forEach((cb) => cb(pointer.current))
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    const onMove = (e) => {
      pointer.current = { x: e.clientX, y: e.clientY, active: true }
    }
    const onLeave = () => {
      pointer.current = { ...pointer.current, active: false }
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    window.addEventListener('blur', onLeave)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('blur', onLeave)
    }
  }, [])

  const api = useRef({
    subscribe: (cb) => {
      subscribers.current.add(cb)
      return () => subscribers.current.delete(cb)
    },
    getPointer: () => pointer.current,
    isTouch,
  })
  api.current.isTouch = isTouch

  return <FieldContext.Provider value={api.current}>{children}</FieldContext.Provider>
}

export function useField() {
  const ctx = useContext(FieldContext)
  if (!ctx) throw new Error('useField must be used within FieldProvider')
  return ctx
}

/**
 * Attaches proximity-reactive behavior to a DOM node: a subtle magnetic pull
 * toward the pointer and an intensity value (0-1) driven imperatively via
 * rAF, so it never triggers React re-renders.
 */
export function useProximityNode({ radius = 140, strength = 10, onEnter, onLeave } = {}) {
  const ref = useRef(null)
  const field = useField()
  const wasActive = useRef(false)

  useEffect(() => {
    const unsub = field.subscribe((pointer) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = pointer.x - cx
      const dy = pointer.y - cy
      const dist = Math.hypot(dx, dy)
      const active = pointer.active && dist < radius

      if (active) {
        const intensity = 1 - dist / radius
        const pull = intensity * strength
        const angle = Math.atan2(dy, dx)
        el.style.transform = `translate(${Math.cos(angle) * pull}px, ${Math.sin(angle) * pull}px)`
        el.style.setProperty('--intensity', intensity.toFixed(3))
        if (!wasActive.current) onEnter?.()
      } else {
        el.style.transform = ''
        el.style.setProperty('--intensity', '0')
        if (wasActive.current) onLeave?.()
      }
      wasActive.current = active
    })
    return unsub
  }, [field, radius, strength])

  return ref
}
