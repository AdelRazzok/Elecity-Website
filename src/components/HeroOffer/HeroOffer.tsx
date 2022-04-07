import React, { useState, useEffect } from 'react'
import './HeroOffer.scss'
import { OfferInterface } from '../Hero/Hero'
import Button from '../Button/Button'

import plug from '../../assets/img/plug.png'
import brandLogo from '../../assets/svg/peugeot.svg'

interface Props {
  offer: OfferInterface;
  toggleActiveOnOffer: (id: number) => void;
}

const HeroOffer: React.FC<Props> = ({ offer, toggleActiveOnOffer }: Props) => {

  const handleClick = () => {
    toggleActiveOnOffer(offer.id)
  }

  return (
    <>
      <div onClick={handleClick} className={`HeroOffer ${offer.active ? 'active' : ''}`} >

        <img src={offer.img} className="HeroOffer-img" />

        <div className="HeroOffer-head">
          {offer.active && <img src={brandLogo} />}
          <span>
            {offer.active && <span>PEUGEOT</span>}
            {offer.active && <span>-</span>}
            <span>{offer.type}</span>
          </span>
          <img src={plug} />
        </div>

        <div className="HeroOffer-body">
          <div className="HeroOffer-body-info">
            <span className="HeroOffer-body-info-model">{`Peugeot ${offer.model}`}</span>
            {offer.active && <span className="HeroOffer-body-info-traits">{offer.traits.join(' • ')}</span>}
            {offer.active && <span className="HeroOffer-body-info-price"><em>{offer.price}</em><em> €</em> /heure</span>}
            {offer.active && <Button styles={{paddingInline: '2.1875rem'}} link="#" text="Louer" />}
          </div>
        </div>

      </div>
    </>
  )
}

export default HeroOffer