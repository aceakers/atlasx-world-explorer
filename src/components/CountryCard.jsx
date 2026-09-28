function CountryCard({ country }) {
  return (
    <article className="country-card">
      <div className="country-flag">
        <img
          src={country.flag}
          alt={`Bandeira de ${country.name}`}
        />
      </div>

      <div className="country-info">
        <h3>{country.name}</h3>

        <p>
          <strong>Capital:</strong> {country.capital}
        </p>

        <p>
          <strong>Região:</strong> {country.region}
        </p>
      </div>

      <button type="button" className="country-button">
        Ver detalhes
      </button>
    </article>
  )
}

export default CountryCard