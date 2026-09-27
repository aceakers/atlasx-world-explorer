function Explorer() {
  return (
    <section id="explorar">
      <h2>Explore os países</h2>

      <p>
        Pesquise e descubra informações sobre diferentes países do mundo.
      </p>

      <div>
        <input
          type="text"
          placeholder="Pesquisar país..."
        />

        <select>
          <option value="">Todas as regiões</option>
          <option value="africa">África</option>
          <option value="americas">Américas</option>
          <option value="asia">Ásia</option>
          <option value="europe">Europa</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      <div>
        <p>Os países aparecerão aqui.</p>
      </div>
    </section>
  )
}

export default Explorer