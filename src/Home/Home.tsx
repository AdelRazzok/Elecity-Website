import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Map from '../../src/components/Map'
import Footer from '../../src/components/Footer'

const Home: React.FC = () => {
	return (
		<div className="Home">
			<Hero />
			<Steps />
			<Map />
			<Footer />
		</div>
	)
}
export default Home