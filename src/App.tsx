import React, { createContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './Home/Home'
import Register from './Register/Register'
import Location from './Location/Location'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import './styles/globals.scss'

interface User {
	firstname?: string
	lastname?: string
	mail?: string
}
export const UserContext = createContext<User>({})

const App: React.FC = () => {
	const [user, setUser] = useState<User>({})

  	return (
		<Router>	
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="location" element={<Location />} />
				<Route path='register' element={<Register />} />
				<Route path='login' element={<Login />} />
				<Route path='profile' element={<Profile />} />
			</Routes>
		</Router>
	)
}
export default App