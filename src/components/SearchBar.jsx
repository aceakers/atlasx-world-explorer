function SearchBar({ onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Pesquisar país..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  )
}

export default SearchBar