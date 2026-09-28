function CountryCard({ country, onDetails }) {
  return (
    <article className="country-card">
      <div className="country-flag">
        {country.flag?.url_svg && (
          <img
            src={country.flag.url_svg}
            alt={`Bandeira de ${country.names.common}`}
          />
        )}
      </div>

      <div className="country-info">
        <h3>{country.names.common}</h3>

        <p>
          <strong>Capital:</strong>{' '}
          {country.capitals?.[0]?.name || 'Não informada'}
        </p>

        <p>
          <strong>Região:</strong> {country.region}
        </p>
      </div>

      <button
        type="button"
        className="country-button"
        onClick={() => onDetails(country)}
      >
        Ver detalhes
      </button>
    </article>
  )
}

export default CountryCard