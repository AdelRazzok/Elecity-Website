import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../App'
import './Profile.scss'

const Profile: React.FC = () => {
	const { user, setUser } = useContext(UserContext)

	const logOut = () => {
		sessionStorage.clear()
		setUser(() => {
			return {}
		})
	}

	return Object.keys(user).length === 0 ? (
		<Navigate to='/login' />
	) : (
		<section className="Profile">
			<div className="Profile-hero">
				<h1 className="Profile-hero-title">MON PROFIL</h1>
			</div>

			<div className='Profile-user-infos'>
				<p><b>Prénom :</b> {user.firstname}</p>
				<p><b>Nom :</b> {user.lastname}</p>
				<p><b>Adresse :</b> {user.address?.street}</p>
				<p><b>Code postal :</b> {user.address?.zipcode}</p>
				<p><b>Ville :</b> {user.address?.city}</p>
				<p><b>Date de naissance :</b> {user.birthDate}</p>
				<p><b>Téléphone :</b> {user.phone}</p>
				<p><b>Adresse mail :</b> {user.mail}</p>
				
				<button className='Profile-logout-btn' onClick={logOut}>Déconnnexion</button>
			</div>
		</section>
	)
}
export default Profile