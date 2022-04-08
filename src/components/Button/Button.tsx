import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

interface Props {
	link: string
	text: string
	styles?: CSSProperties
} 

const Button: React.FC<Props> = ({ link, text, styles }) => {
	return (
		<Link to={link} className='Button' style={styles}>{text}</Link>
	)
} 
export default Button