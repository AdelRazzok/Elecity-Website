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

const HeroOffer: React.FC<Props> = ({ offer, toggleActiveOnOffer }: Props) => {

  const handleClick = () => {
    toggleActiveOnOffer(offer.id)
  }

  return (
    <>
      <div onClick={handleClick} className={`HeroOffer ${offer.active ? 'active' : ''}`} >

        <div className="HeroOffer-head">
          {offer.active && <img src={brandLogo} />}
          <span>
            {offer.active && <span>PEUGEOT</span>}
            {offer.active && <span>-</span>}
            <span>{offer.type}</span>
          </span>
          <img src={plug} />
        </div>

      </div>
    </>
  )
}

export default HeroOffer