import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Layout from './components/Layout'
import Home from './Home'
import Location from './Location/Location'
import Login from './Login'
import Register from './Register'
import RequireAuth from './components/RequireAuth'
import Profile from './Profile'
import './styles/globals.scss'

const App: React.FC = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/location" element={<Location />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route element={<RequireAuth />}>
						<Route path='/profile' element={<Profile />} />
					</Route>
					<Route path='*' element={<div>404 Page introuvable</div>} />
				</Route>
			</Routes>
		</>
	)
}
export default App