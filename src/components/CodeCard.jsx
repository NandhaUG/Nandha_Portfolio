const K = ({ children }) => <span className="tk-kw">{children}</span>
const C = ({ children }) => <span className="tk-cls">{children}</span>
const V = ({ children }) => <span className="tk-var">{children}</span>
const S = ({ children }) => <span className="tk-str">{children}</span>

export default function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-head">
        <span className="dots" aria-hidden="true">
          <i style={{ background: '#ff5f57' }} />
          <i style={{ background: '#febc2e' }} />
          <i style={{ background: '#28c840' }} />
        </span>
        <span className="filename">developer.java</span>
        <span className="status-dot" aria-hidden="true" />
      </div>
      <pre className="code-body" aria-label="Java code sample">
        <code>
          <K>public class</K> <C>Developer</C> {'{'}
          {'\n\n    '}
          <K>private final</K> <C>String</C>[] <V>stack</V> = {'{'}
          {'\n        '}
          <S>"Java"</S>,{'\n        '}
          <S>"Spring Boot"</S>,{'\n        '}
          <S>"Spring Data JPA"</S>,{'\n        '}
          <S>"REST APIs"</S>,{'\n        '}
          <S>"MySQL"</S>
          {'\n    };\n\n    '}
          <K>public</K> <C>String</C> <V>principle</V>() {'{'}
          {'\n        '}
          <K>return</K> <S>"Build clean, useful backend solutions."</S>;{'\n    }\n}'}
        </code>
      </pre>
      <div className="code-foot">
        <span className="status-dot" aria-hidden="true" /> Open to entry-level opportunities
      </div>
    </div>
  )
}
