import './LocationMain.scss'
import React, { useState, useEffect } from 'react'
import Map from '../Map/Map'
import LocationPanel from '../LocationPanel/LocationPanel'
import { OfferInterface } from '../Hero/Hero'

const LocationMain: React.FC = () => {

  const FetchOffers = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_JWT_BEARER}`,
      },
    }

    const res = await fetch('http://elecity-api.herokuapp.com/api/v1/offers', options)
    const raw_data = await res.json()

    const data = await raw_data.map((offer: OfferInterface) => ({ ...offer, active: false })).reverse()

    data[0].active = true
    setOffers(data)
  }

  const [offers, setOffers] = useState<OfferInterface[]>([])

  useEffect(() => {

    FetchOffers()

  }, [])
  
  return (
    <main className="LocationMain">
      <div className="LocationMain-map">
        <h1>SELECTIONNEZ UN PARC PRES DE VOUS</h1>
        <Map />
      </div>
      <div className="LocationMain-panels">

        {offers.map((offer, i) => (
          <LocationPanel offer={offer} id={i} key={offer._id} />
        ))}

      </div>
    </main>
  )
}

export default LocationMain