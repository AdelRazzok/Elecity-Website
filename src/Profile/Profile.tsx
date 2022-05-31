
import './Profile.scss'

const Profile: React.FC = () => {
	
	return (
		<section className="Profile">
			<div className="Profile-hero">
				<h1 className="Profile-hero-title">SE CONNECTER</h1>
			</div>

			<div className='Profile-user-infos'>
				<h2>Mon profil</h2>
				<p>Mes infos</p>
				<button>Déconnnexion</button>
			</div>
		</section>
	)
}
export default Profile