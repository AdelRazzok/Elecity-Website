import './LocationMain.scss'
import React, { useState, useEffect } from 'react'
import Map from '../Map/Map'
import LocationPanel from '../LocationPanel/LocationPanel'
import { OfferInterface } from '../Hero/Hero'
import { FetchOffers } from '../../helper'
import HeroOffer from '../HeroOffer/HeroOffer'
import { Steps, Panel, Placeholder, ButtonGroup, Button } from 'rsuite'
import "rsuite/dist/rsuite.min.css"



const LocationMain: React.FC = () => {

  const [offers, setOffers] = useState<OfferInterface[]>([])

  useEffect(() => {
    FetchOffers().then(raw_data => {
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

  const [step, setStep] = React.useState(0);
  
  const onChange = (nextStep: React.SetStateAction<number>) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  return (
    <main className="LocationMain">
      <div className="LocationMain-map">
        {/* <h1>SELECTIONNEZ UN PARC PRES DE VOUS</h1>
        <Map /> */}
      </div>
      <div className="LocationMain-offers">

        {/* {rederedOffers ?? 'loading ...'} */}

        <div>
          <Steps current={step}>
            <Steps.Item title="Finished" description="Description" />
            <Steps.Item title="In Progress" description="Description" />
            <Steps.Item title="Waiting" description="Description" />
            <Steps.Item title="Waiting" description="Description" />
          </Steps>
          <hr />
          <Panel header={`Step: ${step + 1}`}>
            {/* <Placeholder.Paragraph /> */}
          </Panel>
          <hr />
          <ButtonGroup>
            <Button onClick={onPrevious} disabled={step === 0}>
              Previous
            </Button>
            <Button onClick={onNext} disabled={step === 3}>
              Next
            </Button>
          </ButtonGroup>
        </div>


      </div>
    </main>
  )
}

export default LocationMain