const API_URL = '/api/countries'

export async function getCountries(
  page = 1,
  search = '',
  region = ''
) {
  const params = new URLSearchParams({
    page,
  })

  if (search) {
    params.append('search', search)
  }

  if (region) {
    params.append('region', region)
  }

  const response = await fetch(
    `${API_URL}?${params.toString()}`
  )

  if (!response.ok) {
    throw new Error('Não foi possível carregar os países.')
  }

  const result = await response.json()

  return {
    countries: result.data.objects,
    hasNextPage: result.data.meta.more,
  }
}