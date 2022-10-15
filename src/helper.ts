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

export const GetAvailableCars = async (city, offerId, startDate, endDate) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'token': process.env.REACT_APP_API_KEY!,
    },
  }
  const data = await fetch(`${process.env.REACT_APP_API_BASE_URL!}/rents/available/${city}/${offerId}/${startDate}/${endDate}`, options)
  return await data.json()
}

export const PostRent = async (platform, userId, offerId, startDate, endDate) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': process.env.REACT_APP_API_KEY!,
    },
    body: JSON.stringify({
      rent_params: {
        platform: {
          _id: platform._id
        },
        user: {
          _id: userId
        },
        start_date: startDate,
        end_date: endDate,
        has_started: false,
        offer_id: offerId,
      },
      platform: platform
    })
  }
  const data = await fetch(`${process.env.REACT_APP_API_BASE_URL!}/rents/`, options)
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