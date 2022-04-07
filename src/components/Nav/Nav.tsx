import './Nav.scss'
import logo from '../../assets/svg/logo.svg'
import Button from '../Button/Button'
import MobileMenu from '../MobileMenu/MobileMenu'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const Nav: React.FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const openMenu = () => setShowMenu(true)
	const closeMenu = () => setShowMenu(false)

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
					<button type='button' onClick={() => (showMenu ? closeMenu() : openMenu())}>menu</button>
				</div>
			</nav>

			<AnimatePresence>
				{showMenu && <MobileMenu showMenu={showMenu} handleClose={closeMenu} />}
			</AnimatePresence>
		</>
	)
}
export default Nav