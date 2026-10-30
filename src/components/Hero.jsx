import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import ParticleBackground from './ParticleBackground.jsx'
import CodeCard from './CodeCard.jsx'

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="home" className="hero">
      <ParticleBackground />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge">
            <span className="status-dot" aria-hidden="true" /> Open to entry-level opportunities
          </span>
          <h1>
            Hi, I'm Nandhakumar <span className="grad">N.</span>
          </h1>
          <p className="hero-title">Java Developer</p>
          <p className="hero-intro">
            Building reliable backend applications with Java, Spring Boot, REST APIs, and MySQL. Focused on clean
            code, practical solutions, and continuous learning.
          </p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="socials">
            <a href="https://github.com/NandhaUG" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/nandhakumar-n-50750028b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:nandhakumar241003@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
            <span className="loc">
              <MapPin size={14} /> Salem, India
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className={`visual-stack ${photoOk ? 'has-photo' : ''}`}>
            {photoOk && (
              <img
                className="hero-photo"
                decoding="async"
                src="/images/profile.jpg"
                alt="Professional profile photo of a Java Developer"
                width="160"
                height="160"
                onError={() => setPhotoOk(false)}
              />
            )}
            <CodeCard />
          </div>
        </div>
      </div>
      <div className="hero-bottom container">
        <span className="scroll-ind">
          <i /> Scroll
        </span>
        <span className="counter">01 / 07</span>
      </div>
    </section>
  )
}
