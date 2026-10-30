export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="logo sm">N.</span>
        <p>Designed &amp; built with care by Nandhakumar N. &copy; {new Date().getFullYear()}</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}
