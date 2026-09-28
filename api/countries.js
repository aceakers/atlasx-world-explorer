export default async function handler(req, res) {
  const { search = '', region = '', page = '1' } = req.query

  const limit = 12
  const offset = (Number(page) - 1) * limit

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
    `https://api.restcountries.com/countries/v5?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REST_COUNTRIES_API_KEY}`,
      },
    }
  )

  if (!response.ok) {
    return res.status(response.status).json({
      error: 'Não foi possível carregar os países.',
    })
  }

  const data = await response.json()

  return res.status(200).json(data)
}