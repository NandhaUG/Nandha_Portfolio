import { Mail, Linkedin, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-inner">
        <p className="label">HAVE AN OPPORTUNITY?</p>
        <h2 className="big">Let's build something meaningful.</h2>
        <p className="contact-desc">
          I'm looking for an entry-level Java / Spring Boot Developer role. If my profile fits your team, I'd be
          happy to connect.
        </p>
        <div className="btn-row center">
          <a className="btn btn-primary" href="mailto:nandhakumar241003@gmail.com">
            <Mail size={16} /> Email Me
          </a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/nandhakumar-n-50750028b/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} /> Connect on LinkedIn
          </a>
        </div>
        <div className="contact-meta">
          <a href="mailto:nandhakumar241003@gmail.com"><Mail size={14} /> nandhakumar241003@gmail.com</a>
          <span><MapPin size={14} /> Salem, Tamil Nadu, India</span>
        </div>
      </div>
    </section>
  )
}
