import './Nav.scss'
import logo from '../../assets/svg/logo.svg'
import Button from '../Button/Button'
import MobileMenu from '../MobileMenu/MobileMenu'
import { useState } from 'react'

const Nav: React.FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const toggleMenu = () => setShowMenu(prev => !prev)

	return (
		<>
			<nav className='Nav'>
				<img src={logo} alt='Logo Elecity' className='Nav-logo' />
				<div className="Nav-links">
					<a href="#" className='link'>Accueil</a>
					<a href="#" className='link'>Location</a>
					<a href="#" className='link'>F.A.Q</a>
					<a href="#" className='link'>S'enregistrer</a>
					<Button link='#' text='Connexion' />
				</div>
				<div className="Nav-mobile">
					<button type='button' onClick={toggleMenu}>menu</button>
				</div>
			</nav>

			<MobileMenu show={showMenu} handleClick={toggleMenu} />
		</>
	)
}
export default Nav