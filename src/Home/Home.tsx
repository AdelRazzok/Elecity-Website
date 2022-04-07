import './Home.scss'
import Footer from '../../src/components/Footer/Footer'
import Map from '../../src/components/Map/Map'
import Nav from '../../src/components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Steps from '../components/Steps/Steps'

export default function Home() {
	return (
		<div className="Home">
			<div className="Home-bg">
				<Nav />
				<Hero />
			</div>
			<Steps />

			<hr />
			{/* <Map /> */}
			{/* <Footer /> */}
		</div>
	)
}