import { Code2, Server, Monitor, Database, Boxes, Wrench } from 'lucide-react'

const SKILLS = [
  { Icon: Code2, title: 'Programming Languages', items: ['Java (Core & Advanced)', 'SQL'] },
  { Icon: Server, title: 'Frameworks and Backend Development', items: ['Spring Boot', 'Spring Data JPA', 'RESTful APIs'] },
  { Icon: Monitor, title: 'Web Technologies', items: ['HTML5', 'CSS3', 'JavaScript (Basics)'] },
  { Icon: Database, title: 'Database', items: ['MySQL', 'SQL (DDL, DML, Joins)'] },
  { Icon: Boxes, title: 'Core Concepts', items: ['Object-Oriented Programming (OOP)', 'Data Structures', 'CRUD Operations', 'REST API Design'] },
  { Icon: Wrench, title: 'Development Tools', items: ['IntelliJ IDEA', 'Git', 'GitHub', 'Postman', 'Maven'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="label">MY TOOLKIT</p>
        <h2>Technical skills.</h2>
        <div className="grid-2">
          {SKILLS.map(({ Icon, title, items }) => (
            <article key={title} className="card skill-card">
              <div className="skill-head">
                <span className="icon-box"><Icon size={20} /></span>
                <h3>{title}</h3>
              </div>
              <ul className="skill-list">
                {items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
