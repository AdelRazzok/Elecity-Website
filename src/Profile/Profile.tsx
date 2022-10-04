import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import './Profile.scss'

interface User {
	first_name: string
	last_name: string
	address: {
		street: string
		city: string
		zipcode: string
	}
	birth_date: string
	phone: string
	mail: string
}

const Profile: React.FC = () => {
	const { auth, setAuth } = useContext(AuthContext)
	const [user, setUser] = useState<User>()

	const getUserInfos = async (token: string) => {
		const settings = {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`
			},
		}
		try {
			const res = await fetch('http://localhost:5000/api/v1/users/me', settings)
			const data = await res.json()
			setUser(data)
		} catch (err) {
			console.log(err)
		}
	}

	const logout = () => {
		setAuth({})
		return <Navigate to='/' replace />
	}
	
	useEffect(() => {
		getUserInfos(auth.accessToken)
	}, [])

	return  (
		<section className="Profile">
			<div className="Profile-hero">
				<h1 className="Profile-hero-title">MON PROFIL</h1>
			</div>

			<div className='Profile-user-infos'>
				<p><b>Prénom :</b> {user?.first_name}</p>
				<p><b>Nom :</b> {user?.last_name}</p>
				<p><b>Adresse :</b> {user?.address?.street}</p>
				<p><b>Ville :</b> {user?.address?.city}</p>
				<p><b>Code postal :</b> {user?.address?.zipcode}</p>
				<p><b>Téléphone :</b> {user?.phone}</p>
				
				<div className="Profile-controls">
					<button onClick={logout}>Déconnnexion</button>
				</div>
			</div>
		</section>
	)
}
export default Profile