import './LocationPanel.scss'
import React, { useState } from 'react'
import { OfferInterface } from '../Hero/Hero'
import PanelInfos from '../PanelInfos/PanelInfos'
import PanelImages from '../PanelImages/PanelImages'
import PanelPrices from '../PanelPrices/PanelPrices'
import PanelFinal from '../PanelFinal/PanelFinal'

interface Props {
  offer: OfferInterface
  id: number
}

const LocationPanels: React.FC<Props> = ({ offer, id }: Props) => {

  // Fill input
  const [inputsValues, setInputsValues] = useState({
    name: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputsValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="LocationPanel">
      <input className="titleCheckbox" defaultChecked={offer.active} type="checkbox" id={`panel${id}`} />
      <label htmlFor={`panel${id}`}><h2>{`${offer.offer_name}`}</h2></label>
      <div className="LocationPanel-body">

        <div className="LocationPanel-body-top">
          <PanelInfos />
          <PanelImages />
        </div>

        <div className="LocationPanel-body-mid">
          <PanelPrices />
        </div>

        <div className="LocationPanel-body-bot">
          <PanelFinal />
        </div>

      </div>
    </div>
  )
}

export default LocationPanels