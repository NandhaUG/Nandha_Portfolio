import { useEffect, useRef } from 'react'

// Gaussian-ish random number in roughly [-1, 1]
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5
const FRAME_MS = 1000 / 30 // draw at ~30fps; the motion is slow so this looks identical

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let ctx
    try {
      ctx = canvas.getContext('2d')
    } catch {
      return
    }
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let raf = 0
    let last = 0
    let inView = true
    let particles = []

    const build = () => {
      const count = w < 700 ? 220 : 460
      particles = Array.from({ length: count }, () => {
        const r = Math.random()
        const hue = r < 0.08 ? 190 + Math.random() * 15 : r < 0.5 ? 220 + Math.random() * 30 : 255 + Math.random() * 40
        return {
          t: Math.random(),
          spread: gauss(),
          size: 0.5 + Math.random() * 1.6,
          alpha: 0.25 + Math.random() * 0.75,
          color: (a) => `hsla(${hue}, 95%, 70%, ${a})`,
          phase: Math.random() * Math.PI * 2,
          speed: 0.15 + Math.random() * 0.35,
          amp: 2 + Math.random() * 7,
        }
      })
    }

    const draw = (now) => {
      const time = reduced ? 0 : now / 1000
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        const x = p.t * w
        const wave = Math.sin(p.t * Math.PI * 1.7 + 0.6 + time * 0.12)
        const band = 0.35 + 0.65 * Math.sin(p.t * Math.PI)
        const y =
          h * 0.66 - wave * h * 0.13 - p.t * h * 0.12 + p.spread * h * 0.11 * band +
          Math.sin(time * p.speed + p.phase) * p.amp
        ctx.fillStyle = p.color(p.alpha * 0.85)
        ctx.beginPath()
        ctx.arc(x, y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = (now) => {
      raf = requestAnimationFrame(loop)
      if (now - last < FRAME_MS) return
      last = now
      draw(now)
    }
    const start = () => {
      if (!raf && !reduced && inView && !document.hidden) raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = Math.max(1, rect.width)
      h = Math.max(1, rect.height)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
      draw(performance.now())
    }

    // Pause the loop when the hero is off-screen or the tab is hidden
    const onVisibility = () => (document.hidden ? stop() : start())
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement)
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting
      inView ? start() : stop()
    })
    io.observe(canvas.parentElement)
    document.addEventListener('visibilitychange', onVisibility)
    start()

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="particles" aria-hidden="true">
      <div className="particle-glow" />
      <canvas ref={canvasRef} />
    </div>
  )
}
