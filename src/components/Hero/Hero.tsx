import { useState, useEffect } from 'react'
import { FetchOffers } from '../../helper';
import HeroOffer from '../HeroOffer/HeroOffer';
import './Hero.scss'

export interface OfferInterface {
  active?: boolean;
  _id: string;
  offer_name: string;
  offer_model: string;
  offer_brand: string;
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
    main: {
      image_kit_id: string;
      image_kit_url: string;
    }
    front: {
      image_kit_id: string;
      image_kit_url: string;
    }
    side: {
      image_kit_id: string;
      image_kit_url: string;
    }
    back: {
      image_kit_id: string;
      image_kit_url: string;
    }
  };
  offer_description: string;
  __v?: number;
}

const Hero: React.FC = () => {

  const [offers, setOffers] = useState<OfferInterface[]>([])

  useEffect(() => {
    FetchOffers().then( raw_data => {
      const data = raw_data.map((offer: OfferInterface) => ({ ...offer, active: false }))
      data[0].active = true
      setOffers(data)
    })
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