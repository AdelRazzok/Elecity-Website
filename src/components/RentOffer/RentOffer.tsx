import React, { useRef, useLayoutEffect } from 'react'
import './RentOffer.scss'
import { OfferInterface } from '../Hero/Hero'
import Button from '../Button/Button'
import gsap from 'gsap'

import plug from '../../assets/img/plug.png'
import brandLogo from '../../assets/svg/peugeot.svg'

interface Props {
  offer: OfferInterface;
  id: number;
  toggleActiveOnOffer: (id: string) => void;
  handleOfferId: (value) => void;
}

const RentOffer: React.FC<Props> = ({ offer, id, toggleActiveOnOffer, handleOfferId }: Props) => {
  const specList = offer.offer_specs
  const specs = `${specList.engine} • ${specList.gearbox} • ${specList.seats} places`
  let offerInfosRef = useRef<HTMLElement[] | []>([])

  useLayoutEffect(() => {
    if (!offer.active) return

    gsap.fromTo(offerInfosRef.current!, {
      opacity: 0,
      y: '-100%',
    }, {
      opacity: 1,
      y: '0%',
      duration: .2,
      ease: 'power1.easeOut',
      delay: 0.1,
      stagger: {
        amount: -.15,
      },
      clearProps: 'scale'
    })

  }, [offer.active])
  let carImgsRef = useRef<HTMLElement | null>(null)
  useLayoutEffect(() => {
    gsap.fromTo(carImgsRef.current!, {
      opacity: 0,
      right: '-100%',
    }, {
      opacity: 1,
      right: '-5px',
      duration: .4,
      ease: 'power3.easeOut',
      delay: `0.${id}`,
      clearProps: 'right'
    })
  }, [])
  
  const handleClick = () => {
    toggleActiveOnOffer(offer._id)
  }
  const handleChange = () => {
    handleOfferId(offer._id)
  }
  return (
    <>
      <div onClick={handleClick} className={`RentOffer ${offer.active ? 'active' : ''}`} >
        <img src={offer.offer_image.main.image_kit_url} className="RentOffer-img" ref={el => carImgsRef.current = el} />
        <div ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="RentOffer-head">
          {offer.active && <img src={brandLogo} />}
          <span>
            {offer.active && <span>PEUGEOT</span>}
            {offer.active && <span>-</span>}
            <span>{offer.offer_name}</span>
          </span>
          <img src={plug} />
        </div>
        <div className="RentOffer-body">
          <div className="RentOffer-body-info">
            <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="RentOffer-body-info-model">{offer.offer_model}</span>
            {offer.active && <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="RentOffer-body-info-specs">{specs}</span>}
            {offer.active && <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="RentOffer-body-info-price"><em>{offer.offer_price.hour}</em><em> €</em> /heure</span>}
            {offer.active && <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }}><Button handleChange={handleChange} styles={{ paddingInline: '2.1875rem' }} link="#" text="Choisir" /></span>}
          </div>
        </div>
      </div>
    </>
  )
}

export default RentOffer