import React from 'react'
import './PanelInfos.scss'
import { OfferInterface } from '../Hero/Hero'

//SVG Icons
import { IconContext } from 'react-icons'

import { MdAirlineSeatReclineExtra, MdElectricCar } from 'react-icons/md'
import { GiGearStickPattern, GiCarDoor } from 'react-icons/gi'
import { FiBatteryCharging } from 'react-icons/fi'

interface Props {
  infos: {
    offer_description: OfferInterface["offer_description"],
    offer_specs: OfferInterface["offer_specs"]
  }
}

const PanelInfos: React.FC = (props) => {
  return (
    <IconContext.Provider value={{size: '1.5rem'}} >
      <div className="PanelInfos">
        <h3>Infos</h3>
        <div className="PanelInfos-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur quo labore.</p>
          <div className="PanelInfos-body-specs">
            <span>
              <GiGearStickPattern />
              <GiCarDoor />
              <p>Manuelle</p>
            </span>
            <span>
              <MdAirlineSeatReclineExtra />
              <FiBatteryCharging />
              <p>5 places</p>
            </span>
            <span>
              <MdElectricCar />
              <p>Electrique</p>
            </span>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default PanelInfos