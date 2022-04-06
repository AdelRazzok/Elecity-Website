import './App.scss'
import Footer from '../src/components/Footer/Footer'
import Map from '../src/components/Map/Map'
import Nav from '../src/components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Steps from './components/Steps/Steps'

export default function App() {
	return (
		<div className="App">
			<div className="App-bg">
				<Nav />
				<Hero />
			</div>
			<Steps />

			{/* <hr />
			<Map />
			<Footer /> */}
		</div>
	)
}