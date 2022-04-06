import './MobileMenu.scss'
import Button from '../Button/Button'

interface Props {
	show: boolean
	handleClick: () => void
}

const MobileMenu: React.FC<Props> = ({ show, handleClick }) => {
	
	return (
		show ? <div className='MobileMenu'>
			<button type='button' className='MobileMenu-close-btn' onClick={handleClick}>X</button>
			<div className="MobileMenu-links">
				<a href="#" className='link'>Accueil</a>
				<a href="#" className='link'>Location</a>
				<a href="#" className='link'>F.A.Q</a>
				<a href="#" className='link'>S'enregistrer</a>
				<Button link='#' text='Connexion' />
			</div>
		</div> : null
	)
}
export default MobileMenu