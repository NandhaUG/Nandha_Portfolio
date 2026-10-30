import { Briefcase } from 'lucide-react'

const ITEMS = [
  'Developed backend modules using Java and Spring Boot for an enterprise web application project.',
  'Built a Todo List application with full CRUD functionality using Spring Boot REST APIs, Spring Data JPA, and MySQL.',
  'Wrote SQL queries and consumed RESTful APIs.',
  'Maintained the project structure using Maven and Git.',
  'Collaborated in an agile environment and participated in code reviews.',
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="label">WHERE I'VE LEARNED</p>
        <h2>Experience</h2>
        <div className="timeline">
          <article className="card exp-card">
            <div className="exp-head">
              <span className="icon-box"><Briefcase size={20} /></span>
              <div>
                <h3>Java Developer Intern</h3>
                <p className="muted">Fantasy Solution</p>
              </div>
              <span className="tag">Internship</span>
            </div>
            <ul className="bullets">
              {ITEMS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
