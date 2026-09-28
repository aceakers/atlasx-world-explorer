function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">
            WORLD EXPLORER
          </span>

          <h2>
            Explore o mundo.
            <br />
            <span>Descubra novos lugares.</span>
          </h2>

          <p>
            Descubra países, regiões, culturas e informações
            sobre diferentes lugares do mundo.
          </p>

          <a href="#explorar" className="hero-button">
            Explorar países
          </a>
        </div>

        <div className="hero-visual">
          <img
            src="/atlasx-logo.png"
            alt="AtlasX"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero