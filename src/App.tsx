import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './Home/Home'
import Register from './Register/Register'
import Location from './Location/Location'
import './styles/globals.scss'

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location" element={<Location />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </Router>
  )
}
export default App