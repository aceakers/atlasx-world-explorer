function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-content">

        <div className="about-text">
          <span className="section-label">
            SOBRE O ATLASX
          </span>

          <h2>
            Conheça o projeto
            <span> por trás da exploração.</span>
          </h2>

          <p>
            O AtlasX é um projeto acadêmico desenvolvido para explorar
            informações sobre países e tornar a descoberta de diferentes
            lugares do mundo mais simples e interativa.
          </p>

          <p>
            A plataforma utiliza dados de uma API pública para apresentar
            informações de diferentes países, permitindo pesquisar,
            filtrar e explorar os dados de forma organizada.
          </p>

          <p>
            O projeto foi desenvolvido com foco em componentização,
            responsividade e uma experiência de navegação simples.
          </p>
        </div>

        <div className="about-info">

          <div className="about-item">
            <strong>195+</strong>
            <span>Países exploráveis</span>
          </div>

          <div className="about-item">
            <strong>5</strong>
            <span>Regiões disponíveis</span>
          </div>

          <div className="about-item">
            <strong>React</strong>
            <span>Interface interativa</span>
          </div>

          <div className="about-item">
            <strong>REST API</strong>
            <span>Dados de países</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About