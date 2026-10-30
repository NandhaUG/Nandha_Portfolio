import { MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="label">A LITTLE ABOUT ME</p>
        <h2>Curious mind. Practical builder.</h2>
        <div className="about-grid">
          <div>
            <p className="about-lead">
              I'm a Java Developer who enjoys turning requirements into clean, dependable backend applications.
            </p>
          </div>
          <div className="about-body">
            <p>
              My focus is backend application development with Java and Spring Boot: designing REST APIs,
              integrating databases with Spring Data JPA and MySQL, and writing maintainable code that is easy to
              read and extend.
            </p>
            <p>
              I'm currently looking for an entry-level Java / Spring Boot Developer opportunity where I can
              contribute to real projects, learn from experienced teammates, and keep growing.
            </p>
            <p className="about-loc">
              <MapPin size={15} /> Based in Salem, Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
