const API_URL = 'https://api.restcountries.com/countries/v5'

export async function getCountries(
  page = 1,
  search = '',
  region = ''
) {
  const limit = 12
  const offset = (page - 1) * limit

  const params = new URLSearchParams({
    limit,
    offset,
  })

  if (search) {
    params.append('q', search)
  }

  if (region) {
    params.append('region', region)
  }

  const response = await fetch(
    `${API_URL}?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
      },
    }
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