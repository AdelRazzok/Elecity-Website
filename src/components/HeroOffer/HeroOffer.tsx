import React, { useState, useEffect } from 'react'
import './HeroOffer.scss'
import { OfferInterface } from '../Hero/Hero'
import Button from '../Button/Button'

import citadine from '../../assets/img/citadine.png'
import plug from '../../assets/img/plug.png'
import brandLogo from '../../assets/svg/peugeot.svg'

interface Props {
  offer: OfferInterface;
  toggleActiveOnOffer: (id: number) => void;
}

const HeroOffer: React.FC<Props> = ({offer, toggleActiveOnOffer}: Props) => {
  
  const handleClick = () => {
    toggleActiveOnOffer(offer.id)
  }
  
  return (
    <>
      {/* <div key={offer.id} className="HeroOffer">
        <div className="HeroOffer-img">
          <img src={offer.img} alt="" />
        </div>
        <div className="HeroOffer-info">
          <h2>{offer.type}</h2>
          <h3>{offer.model}</h3>
          <p>{offer.traits.join(' • ')}</p>
          <h4>{offer.price}€/heure</h4>
        </div>
      </div> */}

      <div onClick={handleClick} className={`HeroOffer ${offer.active ? 'active' : ''}`} >

        {offer.active &&
        <div className="HeroOffer-info">
          
          <div className="HeroOffer-info-head">
            <img src={brandLogo} alt="" />
            <span>PEUGEOT - {offer.type}</span>
            <img src={plug} alt="" />
          </div>

          <h3>{offer.model}</h3>

          <p>{offer.traits.join(' • ')}</p>
          
          <h4>{offer.price}€/heure</h4>

          <Button link={'#'} text={'Louer'}/>

        </div>
        }
        
        <img className="HeroOffer-carImg" src={citadine} />

      </div>
    </>
  )
}

export default HeroOffer