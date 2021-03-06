import './LocationMain.scss'
import React, { useState, useEffect } from 'react'
import Map from '../Map/Map'
import LocationPanel from '../LocationPanel/LocationPanel'
import { OfferInterface } from '../Hero/Hero'
import { FetchOffers } from '../../helper'

const LocationMain: React.FC = () => {

  const [offers, setOffers] = useState<OfferInterface[]>([])

  useEffect(() => {
    FetchOffers().then( raw_data => {
      const data = raw_data.map((offer: OfferInterface) => ({ ...offer, active: false }))
      data[0].active = true
      setOffers(data)
    })
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