function CountryDetails({ country, onClose }) {
  if (!country) {
    return null
  }

  const languages = country.languages
  ? Object.values(country.languages)
      .map((language) =>
        typeof language === 'string'
          ? language
          : language.name || language.common || ''
      )
      .filter(Boolean)
      .join(', ')
  : 'Não informado'

  const currencies = country.currencies
  ? Object.values(country.currencies)
      .map((currency) => {
        if (typeof currency === 'string') {
          return currency
        }

        return `${currency.name || 'Moeda'}${
          currency.symbol ? ` (${currency.symbol})` : ''
        }`
      })
      .join(', ')
  : 'Não informado'

  const timezones = country.timezones?.join(', ') || 'Não informado'

  return (
    <div className="details-overlay" onClick={onClose}>
      <div
        className="details-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="details-close"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          ×
        </button>

        <div className="details-header">
          <div className="details-flag">
            {country.flag?.url_svg && (
              <img
                src={country.flag.url_svg}
                alt={`Bandeira de ${country.names.common}`}
              />
            )}
          </div>

          <div>
            <span className="section-label">
              DETALHES DO PAÍS
            </span>

            <h2>{country.names.common}</h2>

            <p>
              {country.names.official || 'Nome oficial não informado'}
            </p>
          </div>
        </div>

        <div className="details-grid">
          <div className="details-item">
            <span>Capital</span>
            <strong>
              {country.capitals?.[0]?.name || 'Não informada'}
            </strong>
          </div>

          <div className="details-item">
            <span>Região</span>
            <strong>
              {country.region || 'Não informada'}
            </strong>
          </div>

          <div className="details-item">
            <span>Sub-região</span>
            <strong>
              {country.subregion || 'Não informada'}
            </strong>
          </div>

          <div className="details-item">
            <span>População</span>
            <strong>
              {country.population
                ? country.population.toLocaleString('pt-BR')
                : 'Não informada'}
            </strong>
          </div>

          <div className="details-item">
            <span>Idioma(s)</span>
            <strong>{languages}</strong>
          </div>

          <div className="details-item">
            <span>Moeda(s)</span>
            <strong>{currencies}</strong>
          </div>

          <div className="details-item">
            <span>Área</span>
            <strong>
              {country.area?.kilometers
                ? `${country.area.kilometers.toLocaleString('pt-BR')} km²`
                : 'Não informada'}
            </strong>
          </div>

          <div className="details-item">
            <span>Fuso horário</span>
            <strong>{timezones}</strong>
          </div>

          <div className="details-item">
            <span>Continente</span>
            <strong>
              {country.continents?.join(', ') || 'Não informado'}
            </strong>
          </div>

          <div className="details-item">
            <span>Código</span>
            <strong>
              {country.codes?.alpha_3 || 'Não informado'}
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails