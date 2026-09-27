function Header() {
  return (
    <header className="header">
      <div className="header-content">

        <a href="/" className="brand">
          <img src="/atlasx-logo.png" alt="AtlasX" className="brand-logo"/>

          <h1 className="brand-name">
            Atlas<span>X</span>
          </h1>
        </a>

        <nav className="navigation">
          <a href="#explorar">Explorar</a>
          <a href="#regioes">Regiões</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>

          <a href="#explorar" className="nav-button">
            Explorar países
          </a>
        </nav>

      </div>
    </header>
  )
}

export default Header