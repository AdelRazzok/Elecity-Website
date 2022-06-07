import React from 'react'
import './PanelPrices.scss'
import { OfferInterface } from '../Hero/Hero'

interface Props {
  id: number,
  prices: OfferInterface["offer_price"]
}

const PanelPrices: React.FC<Props> = ({ prices, id }) => {
  return (
    <div className='PanelPrices'>
      <p>
        <label htmlFor={`hour${id}`}>HOUR - {prices.hour} €</label>
        <input type="radio" name="price" id={`hour${id}`} value={prices.hour} />
      </p>
      <p>
        <label htmlFor={`day${id}`}>DAY - {prices.day} €</label>
        <input type="radio" name="price" id={`day${id}`} value={prices.day} />
      </p>
    </div>
  )
}

export default PanelPrices