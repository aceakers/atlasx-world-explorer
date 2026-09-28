import { useState } from 'react'

function RegionFilter({ onRegionChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('')

  const regions = [
    { value: '', label: 'Todas as regiões' },
    { value: 'Africa', label: 'África' },
    { value: 'Americas', label: 'Américas' },
    { value: 'Asia', label: 'Ásia' },
    { value: 'Europe', label: 'Europa' },
    { value: 'Oceania', label: 'Oceania' },
  ]

  function handleSelect(region) {
    setSelectedRegion(region.value)
    onRegionChange(region.value)
    setIsOpen(false)
  }

  const selectedLabel =
    regions.find((region) => region.value === selectedRegion)?.label

  return (
    <div className="region-box">
      <button
        type="button"
        className="region-select"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedLabel}</span>
        <span className={`region-arrow ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="region-dropdown">
          {regions.map((region) => (
            <button
              key={region.value}
              type="button"
              className={`region-option ${
                selectedRegion === region.value ? 'selected' : ''
              }`}
              onClick={() => handleSelect(region)}
            >
              {region.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default RegionFilter