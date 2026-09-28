import { useState } from 'react'
import CountryGrid from './CountryGrid'
import SearchBar from "./SearchBar"
import RegionFilter from "./RegionFilter"

function Explorer() {
  const [search, setSearch] = useState('')

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
          <SearchBar onSearch={(value) => setSearch(value)} />
          <RegionFilter />
        </div>

        <CountryGrid search={search} />

      </div>
    </section>
  )
}

export default Explorer