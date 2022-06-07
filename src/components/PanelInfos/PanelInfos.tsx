import React from 'react'
import './PanelInfos.scss'
import { OfferInterface } from '../Hero/Hero'

//SVG Icons
import { IconContext } from 'react-icons'
import { MdAirlineSeatReclineExtra, MdElectricCar } from 'react-icons/md'
import { GiGearStickPattern, GiCarDoor } from 'react-icons/gi'
import { FiBatteryCharging } from 'react-icons/fi'

interface Props {
  desc: OfferInterface["offer_description"],
  specs: OfferInterface["offer_specs"]
}

const PanelInfos: React.FC<Props> = ({ desc, specs }) => {


  const badges = Object.keys(specs).map((key: any, i) => {
    let badge: any
    switch (key) {
      case 'engine':
        badge =
          <>
            <MdElectricCar />
            <p key={i}>{specs.engine}</p>
          </>
        break
      case 'gearbox':
        badge =
          <>
            <GiGearStickPattern />
            <p key={i}>{specs.gearbox}</p>
          </>
        break
      case 'seats':
        badge =
          <>
            <MdAirlineSeatReclineExtra />
            <p key={i}>{specs.seats} places</p>
          </>
        break
      case 'autonomy':
        badge =
          <>
            <FiBatteryCharging />
            <p key={i}>{specs.autonomy}</p>
          </>
        break
      case 'doors':
        badge =
          <>
            <GiCarDoor />
            <p key={i}>{specs.doors} portes</p>
          </>
        break
      default:
        badge = null
    }
    return (
      <span>
        <IconContext.Provider value={{ size: '2em' }}>
          {badge}
        </IconContext.Provider>
      </span>
    )
  })

  return (
    <div className="PanelInfos">
      <h3>Infos</h3>
      <div className="PanelInfos-body">
        <p>{desc}</p>
        <div className="PanelInfos-body-specs">
          {badges}
        </div>
      </div>
    </div>
  )
}

export default PanelInfos