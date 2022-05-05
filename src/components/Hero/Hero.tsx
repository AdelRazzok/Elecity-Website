import { useState, useEffect } from 'react'
import HeroOffer from '../HeroOffer/HeroOffer';
import './Hero.scss'

export interface OfferInterface {
  active?: boolean;
  _id: string;
  offer_name: string;
  offer_model: string;
  offer_specs: {
    engine: string;
    gearbox: string;
    seats: number;
    doors: number;
    autonomy: string;
  };
  offer_price: {
    hour: number;
    day: number;
  };
  offer_image: {
    main: string;
    front: string;
    side: string;
    back: string;
  };
  offer_description: string;
  __v?: number;
}

const Hero: React.FC = () => {

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

    const data = await raw_data.map((offer: OfferInterface) => {

      // Object.keys(offer.offer_image).forEach(async (key: string) => {
      //   const k = key as keyof OfferInterface['offer_image']
      //   const img = offer.offer_image[k]

      //   const fileData = await fetch(`http://elecity-api.herokuapp.com/api/v1/files/${img}`, options)
      //   const blob = await fileData.blob()
      //   const url = URL.createObjectURL(blob)
        
      //   offer.offer_image[k] = url
      //   console.log(offer.offer_image[k])
      // })

      return { ...offer, active: false }
    }).reverse()

    data[0].active = true
    setOffers(data)
  }

  const [offers, setOffers] = useState<OfferInterface[]>([])

  useEffect(() => {

    FetchOffers()

  }, [])

  const toggleActiveOnOffer = (id: string) => {
    setOffers(prevOffers => prevOffers.map(offer => {
      offer.active = false
      if (offer._id == id) offer.active = true
      return offer
    }))
  }

  const rederedOffers = offers?.map((offer, i) => {
    return (
      <HeroOffer key={offer._id} offer={offer} id={i} toggleActiveOnOffer={toggleActiveOnOffer} />
    )
  })

  return (
    <section className="Hero">
      <h1>LOUEZ PROPRE ET LOCAL <span>EN TOUTE FACILITÉ...</span></h1>
      <p>Profitez d’une offre de location de véhicule 100% électrique à la minute et parcourez librement votre ville</p>
      <div className="Hero-offers">
        {rederedOffers ?? 'loading ...'}
      </div>
    </section>
  )
}

export default Hero