import './LocationMain.scss'
import React, { useState, useEffect, useContext } from 'react'
import { OfferInterface } from '../Hero/Hero'
import { FetchOffers, GetAvailableCars, PostRent } from '../../helper'
import RentOffer from '../RentOffer/RentOffer'
import { Steps, Panel, ButtonGroup, Button } from 'rsuite'
import "rsuite/dist/rsuite.min.css"
import StepCity from '../StepCity'
import StepOffer from '../StepOffer'
import StepTime from '../StepTime'
import StepPlatform from '../StepPlatform'
import moment from 'moment'
import AuthContext from '../../context/AuthProvider'

const LocationMain: React.FC = () => {

  const { auth } = useContext(AuthContext)

  const [step, setStep] = React.useState(0);

  const onChange = (nextStep: React.SetStateAction<number>) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  const [rentParams, setRentParams] = useState()

  const [city, setCity] = useState()
  const [offerId, setOfferId] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [formule, setFormule] = useState()
  const [availablePlatforms, setAvailablePlatforms] = useState()
  const [platform, setPlatform] = useState()
  const [userId, setUserId] = useState("630cc94c03d70170c7843c79")
  const [resRent, setResRent] = useState()

  const handleCity = (city) => {
    setCity(city)
  }
  const handleOfferId = (offerId) => {
    setOfferId(offerId)
  }
  const handleStartDate = (startDate) => {
    //@ts-ignore
    setStartDate(moment(startDate).seconds(0).format())
    //@ts-ignore
    setEndDate(moment(startDate).add(formule, 'hours').format())
  }
  const handleFormule = (formule) => {
    setFormule(formule)
  }
  const handleplatform = (platform) => {
    setPlatform(platform)
  }

  useEffect(() => {
    if (city && offerId && formule && startDate && endDate) {
      GetAvailableCars(city, offerId, startDate, endDate).then(res => {
        setAvailablePlatforms(res.filter(platform => platform.cars.length != 0))
      })
    }
  }, [city, offerId, formule, startDate, endDate])

  const handlePostRent = () => {
    if (availablePlatforms && platform && userId) {
      PostRent(platform, userId, offerId, startDate, endDate).then(res => {
        setResRent(res[0])
      })
    }
  }



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
      if (offer._id === id) offer.active = true
      return offer
    }))
  }

  const offersElement = offers?.map((offer, i) => {
    return (
      <RentOffer key={offer._id} offer={offer} id={i} toggleActiveOnOffer={toggleActiveOnOffer} handleOfferId={handleOfferId} />
    )
  })

  return (
    <main className="LocationMain">
      {/* <div className="LocationMain-map"> */}
      {/* <h1>SELECTIONNEZ UN PARC PRES DE VOUS</h1>
        <Map /> */}
      {/* </div> */}
      {auth.accessToken ? (
        <div className="LocationMain-offers">

          {/* {rederedOffers ?? 'loading ...'} */}

          <Steps current={step}>
            <Steps.Item title="Choisissez une ville" description="Description" />
            <Steps.Item title="Choisissez une offre" description="Description" />
            <Steps.Item title="Choisissez une formule" description="Description" />
            <Steps.Item title="Choisissez le parc" description="Description" />
          </Steps>
          <hr />
          <Panel>
            {/* <Placeholder.Paragraph /> */}
            {step === 0 && <StepCity handleCity={handleCity} />}
            {step === 1 && <StepOffer offersElement={offersElement} />}
            {step === 2 && <StepTime handleFormule={handleFormule} handleStartDate={handleStartDate} />}
            {step === 3 && <StepPlatform rent_info={{platform, userId, offerId, startDate, endDate, resRent}} platforms={availablePlatforms} handleplatform={handleplatform} handlePostRent={handlePostRent} />}
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


        </div>)
      :
        <div><p>Vous devez être connecté pour réserver un véhicule.</p></div>
      }
    </main>
  )
}

export default LocationMain