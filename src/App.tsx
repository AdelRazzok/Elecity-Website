import './App.scss'
import Footer from '../src/components/Footer/Footer'
import Map from '../src/components/Map/Map'

export default function App() {
	return (
		<div className="App">
			<h1>Elecity</h1>
			<Map />
			<Footer />
		</div>
	)
}