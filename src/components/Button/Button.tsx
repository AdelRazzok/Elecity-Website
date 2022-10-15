import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

interface Props {
	link: string
	text: string
	styles?: CSSProperties
	handleChange?: (value) => void
} 

const Button: React.FC<Props> = ({ link, text, styles, handleChange }) => {
	return (
		<Link onClick={handleChange} to={link} className='Button' style={styles}>{text}</Link>
	)
} 
export default Button

