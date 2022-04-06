import './App.scss'
import Footer from '../src/components/Footer/Footer'
import Map from '../src/components/Map/Map'
import Nav from '../src/components/Nav/Nav'

export default function App() {
	return (
		<div className="App">
			<h1>Elecity</h1>
			<Nav />
			<Map />
			<Footer />
		</div>
	)
}