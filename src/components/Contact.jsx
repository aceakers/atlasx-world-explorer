function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact-content">
        <div className="contact-header">
          <span className="section-label">
            CONTATO
          </span>

          <h2>
            Tem alguma sugestão?
          </h2>

          <p>
            Envie uma mensagem e ajude a melhorar o AtlasX.
          </p>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nome</label>

              <input
                id="name"
                type="text"
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>

              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>

            <textarea
              id="message"
              placeholder="Escreva sua mensagem..."
              rows="5"
            />
          </div>

          <button type="submit" className="contact-button">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact