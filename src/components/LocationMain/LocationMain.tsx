import './LocationMain.scss'
import React, { useState, useEffect } from 'react'
import Map from '../Map/Map'
import LocationPanel from '../LocationPanel/LocationPanel'

export interface fData {
	active?: boolean;
	id: number;
}

const fakeData: fData[] = [
	{
		id: 1,
	},
	{
		id: 2,
	},
	{
		id: 3,
	}
]

const LocationMain: React.FC = () => {

  const [offerPanels, setOfferPanels] = useState<fData[]>([])

	useEffect(() => {
		const data = fakeData.map(fData => ({ ...fData, active: false }))
		data[0].active = true
		setOfferPanels(data)    
	}, [])
  
  return (
    <main className="LocationMain">
      <div className="LocationMain-map">
        <h1>SELECTIONNEZ UN PARC PRES DE VOUS</h1>
        <Map />
      </div>
      <div className="LocationMain-panels">

        {offerPanels.map((offer, i) => (
          <LocationPanel offer={offer} id={i} key={offer.id} />
        ))}

      </div>
    </main>
  )
}

export default LocationMain