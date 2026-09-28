import { useEffect, useState } from 'react'
import CountryGrid from './CountryGrid'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'
import CountryDetails from './CountryDetails'
import { getCountries } from '../services/countriesApi'

function Explorer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [region, setRegion] = useState('')
  const [countries, setCountries] = useState([])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    getCountries(page, searchTerm, region)
      .then((data) => {
        setCountries(data.countries)
        setHasNextPage(data.hasNextPage)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [page, searchTerm, region])

  return (
    <section id="explorar" className="explorer">
      <div className="explorer-content">
        <div className="explorer-header">
          <span className="section-label">
            EXPLORAR
          </span>

          <h2>
            Encontre um país
          </h2>

          <p>
            Pesquise por um país ou filtre por região para descobrir
            informações sobre diferentes lugares do mundo.
          </p>
        </div>

        <div className="explorer-filters">
          <SearchBar
            onSearch={(value) => {
              setSearchTerm(value)
              setPage(1)
            }}
          />

          <RegionFilter
            onRegionChange={(value) => {
              setRegion(value)
              setPage(1)
            }}
          />
        </div>

        <CountryGrid
          countries={countries}
          search=""
          region=""
          onDetails={(country) => setSelectedCountry(country)}
        />

        <div className="pagination">
          <button
            type="button"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Anterior
          </button>

          <span>Página {page}</span>

          <button
            type="button"
            onClick={() => setPage(page + 1)}
            disabled={!hasNextPage}
          >
            Próxima
          </button>
        </div>
      </div>

      <CountryDetails
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </section>
  )
}

export default Explorer