import CountryCard from './CountryCard'

function CountryGrid({ search }) {
  const countries = [
    {
      name: 'Brasil',
      capital: 'Brasília',
      region: 'Américas',
      flag: 'https://flagcdn.com/w320/br.png',
    },
    {
      name: 'Japão',
      capital: 'Tóquio',
      region: 'Ásia',
      flag: 'https://flagcdn.com/w320/jp.png',
    },
    {
      name: 'França',
      capital: 'Paris',
      region: 'Europa',
      flag: 'https://flagcdn.com/w320/fr.png',
    },
  ]

  const filteredCountries = countries.filter((country) =>
  country.name.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div className="country-grid">
      {filteredCountries.map((country) => (
        <CountryCard
          key={country.name}
          country={country}
        />
      ))}
    </div>
  )
}

export default CountryGrid