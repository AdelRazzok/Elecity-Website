export const FetchOffers = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'token': process.env.REACT_APP_API_KEY!,
    },
  }
  const data = await fetch(process.env.REACT_APP_API_BASE_URL!+'/offers', options)
  return await data.json()
}

export const checkAPI = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await fetch(process.env.REACT_APP_API_BASE_URL!+'/', options)
    const data = await res.json()
    return data.running
  } catch (error) {
    return false
  }
}