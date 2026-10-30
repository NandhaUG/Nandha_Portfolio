import { GraduationCap, School, BookOpen } from 'lucide-react'

const EDU = [
  { Icon: GraduationCap, title: 'Bachelor of Engineering (B.E.)', school: 'ACGCET, Karaikudi', score: 'CGPA: 6.8 / 10' },
  { Icon: BookOpen, title: 'Diploma in Engineering', school: 'KSR Institute of Technology, Namakkal', score: 'Score: 95%' },
  { Icon: School, title: 'Secondary School', school: 'KMHSS, Salem', score: 'Score: 86%' },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="label">MY FOUNDATION</p>
        <h2>Education</h2>
        <div className="grid-3">
          {EDU.map(({ Icon, title, school, score }) => (
            <article key={title} className="card edu-card">
              <span className="icon-box"><Icon size={20} /></span>
              <h3>{title}</h3>
              <p className="muted">{school}</p>
              <p className="mono score">{score}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
