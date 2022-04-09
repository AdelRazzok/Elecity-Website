import React, { useState, useRef, useLayoutEffect } from 'react'
import './HeroOffer.scss'
import { OfferInterface } from '../Hero/Hero'
import Button from '../Button/Button'
import gsap from 'gsap'

import plug from '../../assets/img/plug.png'
import brandLogo from '../../assets/svg/peugeot.svg'

interface Props {
  offer: OfferInterface;
  toggleActiveOnOffer: (id: number) => void;
}

const HeroOffer: React.FC<Props> = ({ offer, toggleActiveOnOffer }: Props) => {
  
  let offerInfosRef = useRef<HTMLElement[] | []>([]);

  useLayoutEffect(() => {
    if (!offer.active) return

    gsap.fromTo(offerInfosRef.current!, {
      opacity: 0,
      y: '-100%',
      // duration: .2,
      // ease: 'power1.easeOut',
      // delay: 0.2,
      // stagger: {
      //   amount: .5,
      // },
    },
    {
      opacity: 1,
      y: '0%',
      duration: .2,
      ease: 'power1.easeOut',
      delay: 0.2,
      stagger: {
        amount: .5,
      },
      clearProps: 'scale'
    })

  }, [offer.active])

  const handleClick = () => {
    toggleActiveOnOffer(offer.id)
  }

  return (
    <>
      <div onClick={handleClick} className={`HeroOffer ${offer.active ? 'active' : ''}`} >

        <img src={offer.img} className="HeroOffer-img" />

        <div ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="HeroOffer-head">
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
            <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="HeroOffer-body-info-model">{`Peugeot ${offer.model}`}</span>
            {offer.active && <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="HeroOffer-body-info-traits">{offer.traits.join(' • ')}</span>}
            {offer.active && <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="HeroOffer-body-info-price"><em>{offer.price}</em><em> €</em> /heure</span>}
            {offer.active && <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }}><Button styles={{ paddingInline: '2.1875rem' }} link="#" text="Louer" /></span>}
          </div>
        </div>

      </div>
    </>
  )
}

export default HeroOffer