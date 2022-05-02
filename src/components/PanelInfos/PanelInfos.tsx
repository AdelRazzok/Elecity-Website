import React from 'react'
import './PanelInfos.scss'

import { IconContext } from 'react-icons'
import { RiSteeringFill, } from 'react-icons/ri'
import { MdAirlineSeatReclineExtra, MdElectricCar } from 'react-icons/md'

const PanelInfos = () => {
  return (
    <IconContext.Provider value={{size: '1.5rem'}} >
      <div className="PanelInfos">
        <h3>Infos</h3>
        <div className="PanelInfos-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur quo labore.</p>
          <div className="PanelInfos-body-specs">
            <span>
              <RiSteeringFill />
              <p>Manuelle</p>
            </span>
            <span>
              <MdAirlineSeatReclineExtra />
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