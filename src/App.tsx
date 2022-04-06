import './App.scss'
import Footer from '../src/components/Footer/Footer'
import Map from '../src/components/Map/Map'
import Nav from '../src/components/Nav/Nav'
import Hero from './components/Hero/Hero'

export default function App() {
	return (
		<div className="App">
			<Nav />
			<Hero />
			<Map />
			<Footer />
		</div>
	)
}