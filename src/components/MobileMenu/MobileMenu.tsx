import './MobileMenu.scss'
import Button from '../Button/Button'
import { motion } from 'framer-motion'

interface Props {
	showMenu: boolean
	handleClose: () => void
}

const MobileMenu: React.FC<Props> = ({ handleClose }) => {
	const dropIn = {
		hidden: {
			y: '-100vh',
			opacity: 0,
		},
		visible: {
			y: '0',
			opacity: 1,
			transition: {
				duration: 0.2,
				type: 'spring',
				damping: 25,
				stiffness: 100,
			},
		},
		exit: {
			y: '-100vh',
			opacity: 0,
			transition: {
				duration: 0.2,
				type: 'spring',
				damping: 25,
				stiffness: 100,
			}
		}
	}

	return (
		<motion.div
			className='MobileMenu'
			variants={dropIn}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<button
				type='button'
				id='mobilemenu-close'
				className='MobileMenu-close-btn'
				onClick={handleClose}
			>
				X
			</button>
			<div className="MobileMenu-links">
				<a href="#" className='link'>Accueil</a>
				<a href="#" className='link'>Location</a>
				<a href="#" className='link'>F.A.Q</a>
				<a href="#" className='link'>S'enregistrer</a>
				<Button link='#' text='Connexion' />
			</div>
		</motion.div>
	)
}
export default MobileMenu