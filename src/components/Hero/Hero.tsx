import { useState, useEffect } from 'react'
import HeroOffer from '../HeroOffer/HeroOffer';
import './Hero.scss'

import citadine from '../../assets/img/citadine.png'
import suv from '../../assets/img/suv.png'
import combispace from '../../assets/img/combispace.png'

export interface OfferInterface {
  active?: boolean;
  id: number;
  type: string;
  model: string;
  traits: string[];
  price: string;
  img: string;
}

const DUMMY_OFFERS: OfferInterface[]
  = [
    {
      active: true,
      id: 1,
      type: 'Citadine',
      model: 'e-208',
      traits: ['Electrique', 'Automatique', '5 places'],
      price: '7',
      img: citadine,
    },
    {
      id: 2,
      type: 'SUV',
      model: 'e-2008',
      traits: ['Electrique', 'Automatique', '5 places'],
      price: '11',
      img: suv,
    },
    {
      id: 3,
      type: 'Combispace',
      model: 'e-Rifter',
      traits: ['Electrique', 'Automatique', '7 places'],
      price: '13',
      img: combispace,
    }
  ]

const Hero: React.FC = () => {

  const [offers, setOffers] = useState<OfferInterface[]>([])

  useEffect(() => {
    setTimeout(() => {
      setOffers(DUMMY_OFFERS)
    }, 0);
  }, [])

  const toggleActiveOnOffer = (id: number) => {
    setOffers(prevOffers => prevOffers.map(offer => {
      offer.active = false
      if (offer.id == id) offer.active = true
      return offer
    }))
  }

  const rederedOffers = offers?.map(offer => {
    return (
      <HeroOffer key={offer.id} offer={offer} toggleActiveOnOffer={toggleActiveOnOffer} />
    )
  })

  return (
    <section className="Hero">
      <h1>LOUEZ PROPRE ET LOCAL <span>EN TOUTE FACILITÉ</span></h1>
      <p>Profitez d’une offre de location de véhicule 100% électrique à la minute et parcourez librement votre ville</p>
      <div className="Hero-offers">
        {rederedOffers ?? 'loading ...'}
      </div>
    </section>
  )
}

export default Hero