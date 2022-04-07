import { CSSProperties } from 'react'
import './Button.scss'

interface Props {
	link: string
	text: string
	styles: CSSProperties
} 

const Button: React.FC<Props> = ({ link, text, styles }) => {
	return (
		<a href={link} className='Button' style={styles}>{text}</a>
	)
} 
export default Button