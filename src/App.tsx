import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Home/Home'
import Rent from './Rent/Rent'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
		<Route path="rent" element={<Rent />} />
      </Routes>
    </Router>
  )
}

export default App