import './Nav.scss'
import logo from '../../assets/svg/logo.svg'
import Button from '../Button/Button'

const Nav = () => {
	return (
		<nav className='Nav'>
			<img src={logo} alt='Logo Elecity' />
			<div className="Nav-links">
				<a href="#" className='link'>Accueil</a>
				<a href="#" className='link'>Location</a>
				<a href="#" className='link'>F.A.Q</a>
				<a href="#" className='link'>S'enregistrer</a>
				<Button link='#' text='Connexion' />
			</div>
		</nav>
	)
}
export default Nav