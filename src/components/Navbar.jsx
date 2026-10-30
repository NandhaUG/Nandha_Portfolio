import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'

const LINKS = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.toLowerCase())).filter(Boolean)
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={close} aria-label="Go to top">
          <span className="logo">N.</span>
          <span className="brand-text">
            <strong>Nandhakumar N</strong>
            <small>Java Developer</small>
          </span>
        </a>

        <nav className={`pill ${open ? 'open' : ''}`} aria-label="Main">
          {LINKS.map((l) => {
            const id = l.toLowerCase()
            return (
              <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={close}>
                {l}
              </a>
            )
          })}
        </nav>

        <a className="btn-resume" href="/Nandhakumar_N_Resume.pdf" download="Nandhakumar_N_Resume.pdf">
          <Download size={15} /> <span>Resume</span>
        </a>
        <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  )
}
