import './Location.scss'
import React, { useEffect, useState } from "react"
import LocationHero from '../components/LocationHero/LocationHero';
import LocationMain from '../components/LocationMain/LocationMain';

const Location: React.FC = () => {
	
	return (
		<section className="Location">
			<LocationHero />
			<LocationMain />
		</section>
	)
}

export default Location