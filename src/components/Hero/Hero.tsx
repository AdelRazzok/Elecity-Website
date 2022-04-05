import { useState, useEffect } from 'react'
import HeroOffer from '../HeroOffer/HeroOffer';
import './Hero.scss'

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
    model: 'Peugeot e-208',
    traits: ['Electrique', 'Automatique', '5 places'],
    price: '7',
    img: '',
  },
  {
    id: 2,
    type: 'SUV',
    model: 'Peugeot e-208',
    traits: ['Electrique', 'Automatique', '5 places'],
    price: '7',
    img: '',
  },
  {
    id: 3,
    type: 'Combispace',
    model: 'Peugeot e-208',
    traits: ['Electrique', 'Automatique', '5 places'],
    price: '7',
    img: '',
  }
]

const Hero: React.FC = () => {

  const [offers, setoffers] = useState<OfferInterface[]>(DUMMY_OFFERS)
  
  const toggleActiveOnOffer = (id: number) => {
    setoffers(prevOffers => prevOffers.map( offer => {
      offer.active = false
      if(offer.id == id) offer.active = true
      return offer
    }))
  }
  
  const rederedOffers = offers?.map( offer => {
    return (
      <HeroOffer key={offer.id} offer={offer} toggleActiveOnOffer={toggleActiveOnOffer}/>
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