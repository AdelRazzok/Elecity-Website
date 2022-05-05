import './Nav.scss'
import logo from '../../assets/svg/logo.svg'
import Button from '../Button/Button'
import MobileMenu from '../MobileMenu/MobileMenu'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaStream } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const bodyEl = document.getElementsByTagName('body')[0]
	
	const openMenu = () => {
		bodyEl.style.overflow = 'hidden'
		setShowMenu(true)
	} 
	const closeMenu = () => {
		bodyEl.style.overflow = 'auto'
		setShowMenu(false)
	} 

	return (
		<>
			<nav className='Nav'>
				<img src={logo} alt='Logo Elecity' className='Nav-logo' />
				<div className="Nav-links">
					<Link to="/" className='link'>Accueil</Link>
					<Link to="location" className='link'>Location</Link>
					<Link to="faq" className='link'>F.A.Q</Link>
					<Link to="register" className='link'>S'enregistrer</Link>
					<Button link='login' text='Connexion' />
				</div>
				<div className="Nav-mobile">
					<button
						type='button'
						id='mobilemenu-open'
						onClick={() => (showMenu ? closeMenu() : openMenu())}
					>
						<FaStream />
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{showMenu && <MobileMenu showMenu={showMenu} handleClose={closeMenu} />}
			</AnimatePresence>
		</>
	)
}
export default Nav


