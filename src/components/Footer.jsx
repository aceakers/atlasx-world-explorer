function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            Atlas<span>X</span>
          </a>

          <p>
            Explore o mundo, um país de cada vez.
          </p>
        </div>

        <nav className="footer-navigation">
          <a href="#inicio">Início</a>
          <a href="#explorar">Explorar</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 AtlasX. Todos os direitos reservados.
        </p>

        <p>
          World Explorer
        </p>
      </div>
    </footer>
  )
}

export default Footer