import './Home.scss'
import Nav from '../../src/components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Steps from '../components/Steps/Steps'
import Map from '../../src/components/Map/Map'
import Footer from '../../src/components/Footer/Footer'

const Home: React.FC = () => {
	return (
		<div className="Home">
			<div className="Home-bg">
				<Nav />
				<Hero />
			</div>
			<Steps />

			{/* <Map /> */}
			{/* <Footer /> */}
		</div>
	)
}

export default Home