import React, { createContext, useEffect, useState } from 'react'
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

export interface UserInterface {
	firstname?: string,
	lastname?: string,
	address?: {
		street?: string,
		zipcode?: number,
		city?: string
	}
	birthDate?: string,
	phone?: string,
	mail?: string
}

export const UserContext = createContext<any>({})

const App: React.FC = () => {
	const [user, setUser] = useState<UserInterface>({})

	useEffect(() => {
		if(sessionStorage.getItem('user')) {
			const storage: any = sessionStorage.getItem('user')
			const data = JSON.parse(storage)

			setUser(() => {
				return data
			})
		}
	}, [])

  	return (
		<Router>
			<UserContext.Provider value={{ user, setUser }}>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="location" element={<Location />} />
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
					<Route path='profile' element={<Profile />} />
				</Routes>
			</UserContext.Provider>
		</Router>
	)
}
export default App