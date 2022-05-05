import React, { useRef, useLayoutEffect, useEffect, useState } from 'react'
import './HeroOffer.scss'
import { OfferInterface } from '../Hero/Hero'
import Button from '../Button/Button'
import gsap from 'gsap'

import plug from '../../assets/img/plug.png'
import brandLogo from '../../assets/svg/peugeot.svg'

interface Props {
  offer: OfferInterface;
  id: number;
  toggleActiveOnOffer: (id: string) => void;
}

const HeroOffer: React.FC<Props> = ({ offer, id, toggleActiveOnOffer }: Props) => {

  const specList = offer.offer_specs
  const specs = `${specList.engine} • ${specList.gearbox} • ${specList.seats} places`

  const [img, setImg] = useState(offer.offer_image.main)
  const [imgLoading, setImgLoading] = useState(true)
  
  useEffect(() => {
    const fetchImg = async () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_JWT_BEARER}`,
        },
      }

      const fileData = await fetch(`http://elecity-api.herokuapp.com/api/v1/files/${img}`, options)
      const blob = await fileData.blob()
      const url = URL.createObjectURL(blob)
      setImgLoading(false)
      setImg(url)
    }
    fetchImg()
  }, [])

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
    if (imgLoading) return
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
  }, [img])

  const handleClick = () => {
    toggleActiveOnOffer(offer._id)
  }

  return (
    <>
      <div onClick={handleClick} className={`HeroOffer ${offer.active ? 'active' : ''}`} >

        {imgLoading ? <span className="HeroOffer-img HeroOffer-img-spinner"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></span> : <img src={img} className="HeroOffer-img" ref={el => carImgsRef.current = el} />}

        <div ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="HeroOffer-head">
          {offer.active && <img src={brandLogo} />}
          <span>
            {offer.active && <span>PEUGEOT</span>}
            {offer.active && <span>-</span>}
            <span>{offer.offer_name}</span>
          </span>
          <img src={plug} />
        </div>

        <div className="HeroOffer-body">
          <div className="HeroOffer-body-info">
            <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="HeroOffer-body-info-model">{offer.offer_model}</span>
            {offer.active && <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="HeroOffer-body-info-specs">{specs}</span>}
            {offer.active && <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }} className="HeroOffer-body-info-price"><em>{offer.offer_price.hour}</em><em> €</em> /heure</span>}
            {offer.active && <span ref={el => { offerInfosRef.current = el ? [...offerInfosRef.current, el] : [] }}><Button styles={{ paddingInline: '2.1875rem' }} link="#" text="Louer" /></span>}
          </div>
        </div>

      </div>
    </>
  )
}

export default HeroOffer