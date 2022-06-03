import { useContext, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaStream } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import MobileMenu from '../MobileMenu/MobileMenu'
import logo from '../../assets/svg/logo.svg'
import './Nav.scss'
import { UserContext } from '../../App'

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

	const { user } = useContext(UserContext)

	return (
		<>
			<nav className='Nav'>
				<img src={logo} alt='Logo Elecity' className='Nav-logo' />
				<div className="Nav-links">
					<Link to="/" className='link'>Accueil</Link>
					<Link to="location" className='link'>Location</Link>
					{
						Object.keys(user).length === 0 ?
							<Button link='login' text='Connexion' />
						:
							<Button link='profile' text='Mon Profil' />
					}
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