import React from 'react';
import './Map.scss';
import imgTest from '../../assets/img/lhMap.png'

const Map: React.FC = () => {
  return (
    <div className="map--container">

      <div className="map--title">RETROUVEZ NOUS PRES DE CHEZ VOUS</div>
      <div className="map--block">
        <img src={imgTest} alt="mapAlt" className="map--img"></img>
      </div>
    </div>
  )
}

export default Map