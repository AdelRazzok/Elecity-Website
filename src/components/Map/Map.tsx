import React from 'react';
import './Map.scss';
import imgTest from '../../assets/png/imageMap.png'






const Map = () => {
    return (
        <div className="Map">
        <div className="Map-display">
            <img src={imgTest} alt="mapAlt"></img>
        </div>
        </div>
    )
}

export default Map