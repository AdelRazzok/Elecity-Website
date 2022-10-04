import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthProvider'
import { FaStream } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion'
import Button from '../Button'
import MobileMenu from '../MobileMenu'
import logo from '../../assets/svg/logo.svg'
import './Nav.scss'

const Nav: React.FC = () => {
	const { auth } = useContext(AuthContext)
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
					{auth.accessToken ?
						<Button link='profile' text='Mon Profil' />
					:
						<Button link='login' text='Connexion' />}
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