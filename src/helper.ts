export const FetchOffers = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'token': process.env.REACT_APP_API_KEY!,
    },
  }

  const data = await fetch('https://elecity-api.herokuapp.com/api/v1/offers', options)
  return await data.json()
}