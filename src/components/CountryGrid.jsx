import CountryCard from './CountryCard'

function CountryGrid({ countries, onDetails }) {
  if (countries.length === 0) {
    return (
      <p className="no-results">
        Nenhum país encontrado.
      </p>
    )
  }

  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard
          key={country.names.common}
          country={country}
          onDetails={onDetails}
        />
      ))}
    </div>
  )
}

export default CountryGrid