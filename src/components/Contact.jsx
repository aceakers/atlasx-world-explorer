function Contact() {
  return (
    <section id="contato">
      <h2>Entre em contato</h2>

      <p>
        Tem alguma sugestão, dúvida ou encontrou algum problema?
      </p>

      <form>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            placeholder="Escreva sua mensagem..."
          />
        </div>

        <button type="submit">
          Enviar mensagem
        </button>
      </form>
    </section>
  )
}

export default Contact