import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(value)
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar país..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="submit">
        Buscar
      </button>
    </form>
  )
}

export default SearchBar