import { Code2, Github } from 'lucide-react'

const PROJECTS = [
  {
    category: 'SPRING BOOT · REST API',
    title: 'Employee Management System',
    desc: 'Developed a Spring Boot web application with RESTful APIs to manage employees and assign tasks to individual employees. Implemented task assignment, status tracking, and employee-wise task views using Spring Data JPA and MySQL.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST APIs'],
    repo: 'https://github.com/NandhaUG/EmployeeTaskManagementSystem.git',
  },
  {
    category: 'ACADEMIC PROJECT',
    title: 'Predictive Maintenance System for Equipment Monitoring',
    desc: 'Built a Java-based system to analyze equipment sensor data and generate maintenance alerts using SQL. Implemented threshold-based alerts when sensors detect high temperatures, with plans to integrate a machine-learning model in the future.',
    tech: ['Java', 'SQL', 'Equipment monitoring', 'Threshold-based alerts'],
    note: 'Repository not public',
  },
  {
    category: 'INTERNSHIP PROJECT',
    title: 'Todo List Application',
    desc: 'Built a Todo List application with full CRUD functionality using Spring Boot REST APIs, Spring Data JPA, and MySQL.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST APIs'],
    note: 'Built during internship',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="label">THINGS I'VE BUILT</p>
        <h2>Selected projects.</h2>
        <div className="grid-projects">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="card project-card">
              <div className="project-top">
                <span className="mono num">{String(i + 1).padStart(2, '0')}</span>
                <span className="icon-box sm"><Code2 size={16} /></span>
              </div>
              <p className="mono cat">{p.category}</p>
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <ul className="badges">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.repo ? (
                <a className="repo-link" href={p.repo} target="_blank" rel="noopener noreferrer">
                  <Github size={15} /> View Repository
                </a>
              ) : (
                <span className="repo-note">{p.note}</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
