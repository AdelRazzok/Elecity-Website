import './Nav.scss'
import Button from '../Button/Button'

interface MobileMenu {
	show: boolean
	handleClick: (prev: any) => void
}

const MobileMenu = (props: MobileMenu) => {
	
	return (
		props.show ? <div className='MobileMenu'>
			<button type='button' className='MobileMenu-close-btn' onClick={props.handleClick}>X</button>
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